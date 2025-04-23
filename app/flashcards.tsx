import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Flashcard from '../components/Flashcard';
import { FlashCardType } from '../containers/flashCardTypes';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { Audio } from 'expo-av';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function FlashcardsScreen() {
    const { language } = useLocalSearchParams();
    const [cards, setCards] = useState<FlashCardType[]>([]);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const translateX = useSharedValue(0);
    const router = useRouter();
    // 🔁 Dynamically import cards based on selected language


    useEffect(() => {
        const loadCards = async () => {
            try {
                let cardModule;
                switch (language) {
                    case 'Nepali':
                        cardModule = await import('../data/nepali.ts');
                        break;
                    case 'Kannada':
                        cardModule = await import('../data/kannada.ts');
                        break;
                    // Add supported languages here
                    default:
                        router.replace('/comingsoon'); // Redirect to child-friendly page
                        return;
                }
                setCards(cardModule.consonantCards || []);
            } catch (error) {
                console.error('Error loading language cards:', error);
            }
        };

        loadCards();
    }, [language]);


    const playSound = async (file: any) => {
        const { sound } = await Audio.Sound.createAsync(file);
        await sound.replayAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
                sound.unloadAsync();
            }
        });
    };

    useEffect(() => {
        translateX.value = direction === 'left' ? width : -width;
        translateX.value = withTiming(0, { duration: 300 });
    }, [index]);

    const animateOut = (onFinish: () => void) => {
        playSound(require('../assets/sounds/leftslide.wav'));
        translateX.value = withTiming(
            direction === 'left' ? -width : width,
            { duration: 200 },
            () => {
                runOnJS(onFinish)();
            }
        );
    };

    const nextCard = () => {
        setDirection('left');
        animateOut(() => {
            setShowAnswer(false);
            setIndex((prev) => (prev + 1) % cards.length);
        });
    };

    const previousCard = () => {
        setDirection('right');
        animateOut(() => {
            setShowAnswer(false);
            setIndex((prev) => (prev - 1 + cards.length) % cards.length);
        });
    };

    const cardStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    if (!cards.length) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <Text className="text-lg text-gray-600">Loading cards...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white px-4 pt-safe">
            <View className="flex-1">
                {/* Flashcard Section (70%) */}
                <View className="flex-[8] justify-center items-center">
                    <Animated.View style={cardStyle}>
                        <Flashcard
                            card={cards[index]}
                            showAnswer={showAnswer}
                            onToggle={() => {
                                setShowAnswer(!showAnswer);
                                playSound(require('../assets/sounds/flip.mp3'));
                            }}
                            onNext={nextCard}
                            onPrev={previousCard}
                        />
                    </Animated.View>
                </View>

                {/* Button Section (30%) */}
                <View className="flex-[2] justify-end items-center pb-6 space-y-4">
                    <TouchableOpacity
                        onPress={() => {
                            setShowAnswer(!showAnswer);
                            playSound(require('../assets/sounds/flip.mp3'));
                        }}
                        className="bg-purple-700 py-3 rounded-lg w-64"
                    >
                        <Text className="text-white text-lg text-center">
                            {showAnswer ? 'Show Letter' : 'Show Meaning'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={nextCard}
                        className="bg-purple-700 py-3 rounded-lg mt-2 w-64"
                    >
                        <Text className="text-white text-lg text-center">Next Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );


}
