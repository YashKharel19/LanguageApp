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
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function FlashcardsScreen() {
    const { language } = useLocalSearchParams();
    const [cards, setCards] = useState<FlashCardType[]>([]);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const translateX = useSharedValue(0);
    const router = useRouter();

    useEffect(() => {
        const loadCards = async () => {
            try {
                let cardModule;
                switch (language) {
                    case 'Nepali':
                        cardModule = await import('../data/nepali.ts');
                        break;
                    case 'Limbu':
                        cardModule = await import('../data/limbu.ts');
                        break;
                    case 'Tamang':
                        cardModule = await import('../data/tamang.ts');
                        break;
                    case 'Kannada':
                        cardModule = await import('../data/kannada.ts');
                        break;
                    case 'Punjabi':
                        cardModule = await import('../data/punjabi.ts');
                        break;
                    case 'Gujrati':
                        cardModule = await import('../data/gujrati.ts');
                        break;
                    case 'Hindi':
                        cardModule = await import('../data/hindi.ts');
                        break;
                    case 'Spanish':
                        cardModule = await import('../data/spanish.ts');
                        break;
                    case 'Filipino':
                        cardModule = await import('../data/filipino.ts');
                        break;

                    default:
                        router.replace('/comingsoon');
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
        <SafeAreaView className="flex-1 bg-white px-4">
            {/* 🔙 Top Nav Buttons */}
            <View className="flex-row justify-between items-center pt-2 pb-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex-row items-center bg-white px-3 py-1 rounded-full shadow"
                >
                    <Feather name="arrow-left" size={20} color="#000" />
                    <Text className="ml-2 text-base font-medium">Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.replace('/')}
                    className="flex-row items-center bg-white px-3 py-1 rounded-full shadow"
                >
                    <Feather name="home" size={20} color="#000" />
                    <Text className="ml-2 text-base font-medium">Home</Text>
                </TouchableOpacity>
            </View>

            {/* 📖 Flashcard Area */}
            <View className="flex-1">
                <View className="flex-[12] justify-center items-center">
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

                {/* 🔘 Action Buttons */}
                <View className="flex-[1] justify-end items-center pb-6 space-y-4">
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
