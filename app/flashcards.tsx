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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function FlashcardsScreen() {
    const { language, category } = useLocalSearchParams<{ language: string; category: string }>();
    const [cards, setCards] = useState<FlashCardType[]>([]);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const translateX = useSharedValue(0);
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const languageStr = Array.isArray(language) ? language[0] : language;
    const categoryStr = Array.isArray(category) ? category[0] : category;

    useEffect(() => {
        const loadCards = async () => {
            try {
                let cardModule: any;

                // 🔹 Load correct language dataset
                switch (languageStr) {
                    case 'Nepali':
                        cardModule = await import('../data/nepali');
                        break;
                    case 'Limbu':
                        cardModule = await import('../data/limbu');
                        break;
                    case 'Tamang':
                        cardModule = await import('../data/tamang');
                        break;
                    case 'Kannada':
                        cardModule = await import('../data/kannada');
                        break;
                    case 'Punjabi':
                        cardModule = await import('../data/punjabi');
                        break;
                    case 'Gujarati':
                        cardModule = await import('../data/gujarati');
                        break;
                    case 'Hindi':
                        cardModule = await import('../data/hindi');
                        break;
                    case 'Spanish':
                        cardModule = await import('../data/spanish');
                        break;
                    case 'Filipino':
                        cardModule = await import('../data/filipino');
                        break;
                    case 'Tibetan':
                        cardModule = await import('../data/tibetan');
                        break;
                    case 'Korean':
                        cardModule = await import('../data/korean');
                        break;
                    case 'Portuguese':
                        cardModule = await import('../data/portuguese');
                        break;
                    case 'French':
                        cardModule = await import('../data/french');
                        break;
                    case 'Persian':
                        cardModule = await import('../data/persian');
                        break;
                    case 'English':
                        cardModule = await import('../data/english');
                        break;
                    case 'Bengali':
                        cardModule = await import('../data/bengali');
                        break;
                    case 'Telugu':
                        cardModule = await import('../data/telugu');
                        break;
                    case 'Malayalam':
                        cardModule = await import('../data/malayalam');
                        break;
                    default:
                        router.replace('/comingsoon');
                        return;
                }

                // 🔹 Pick alphabets or numbers from the loaded module
                if (categoryStr === 'numbers' && cardModule.numberCards) {
                    setCards(cardModule.numberCards);
                } else if (categoryStr === 'alphabets' && cardModule.consonantCards) {
                    setCards(cardModule.consonantCards);
                } else {
                    router.replace('/comingsoon');
                }
            } catch (error) {
                console.error('Error loading language cards:', error);
            }
        };

        loadCards();
    }, [languageStr, categoryStr]);

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
            () => runOnJS(onFinish)()
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
        <SafeAreaView
            edges={['top', 'bottom']}
            className="flex-1 bg-white px-4"
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
            }}
        >
            {/* Top Navigation */}
            <View
                className="flex-row justify-between items-center"
                style={{ marginBottom: height * 0.04 }}
            >
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

            {/* Flashcard Area */}
            <View
                className="flex-1 justify-center items-center"
                style={{ marginBottom: height * 0.05 }}
            >
                <Animated.View style={cardStyle}>
                    <Flashcard
                        card={cards[index]}
                        language={languageStr}
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

            {/* Action Buttons */}
            <View>
                <TouchableOpacity
                    onPress={() => {
                        setShowAnswer(!showAnswer);
                        playSound(require('../assets/sounds/flip.mp3'));
                    }}
                    className="bg-purple-700 py-3 rounded-xl mb-4 w-3/4 self-center"
                    style={{ marginBottom: height * 0.02 }}
                >
                    <Text className="text-white text-lg text-center font-semibold">
                        {showAnswer
                            ? categoryStr === 'numbers'
                                ? 'Show Number'
                                : 'Show Letter'
                            : 'Show Example'}
                    </Text>
                </TouchableOpacity>

                <View
                    className="flex-row self-center w-3/4"
                    style={{ marginBottom: height * 0.02 }}
                >
                    <TouchableOpacity
                        onPress={previousCard}
                        className="flex-1 bg-purple-700 py-3 rounded-xl mr-3"
                    >
                        <Text className="text-white text-lg text-center font-semibold">
                            ⬅ Prev
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={nextCard}
                        className="flex-1 bg-purple-700 py-3 rounded-xl ml-3"
                    >
                        <Text className="text-white text-lg text-center font-semibold">
                            Next ➡
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
