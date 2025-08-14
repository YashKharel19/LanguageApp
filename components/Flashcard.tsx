import React, { useEffect } from 'react';
import {
    View,
    Text,
    Pressable,
    Platform,
    Dimensions,
    ScrollView,
} from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    runOnJS,
} from 'react-native-reanimated';
import * as Speech from 'expo-speech';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AutoSizeLetter from './AutoSizeLetter';
import { FlashCardType } from '../containers/flashCardTypes';

const { width } = Dimensions.get('window');

type Props = {
    card: FlashCardType;
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function Flashcard({ card, showAnswer, onToggle, onNext, onPrev }: Props) {
    const SvgImage = card.image;
    const rotate = useSharedValue(0);
    const wasSwiping = useSharedValue(false);
    const insets = useSafeAreaInsets();

    const cardWidth = Math.min(width * 0.85, 450);
    const cardHeight = cardWidth * 1.4;

    const speak = (text: string, lang = 'ne-NP') => {
        if (text) {
            Speech.speak(text, {
                language: lang,
                rate: 0.85,
            });
        }
    };

    // Speak letter or word depending on side
    useEffect(() => {
        rotate.value = withTiming(showAnswer ? 180 : 0, { duration: 500 });
        if (showAnswer) {
            speak(card.pronunciation || card.word, 'ne-NP');
        } else {
            speak(card.letterPronunciation || card.letter, 'ne-NP');
        }
    }, [showAnswer]);

    useEffect(() => {
        if (Platform.OS === 'web') {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'ArrowRight') onNext();
                else if (e.key === 'ArrowLeft') onPrev();
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    const frontStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [0, 180])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));

    const backStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [180, 360])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));

    const swipe = Gesture.Pan()
        .onBegin(() => {
            wasSwiping.value = false;
        })
        .onUpdate((e) => {
            if (Math.abs(e.translationX) > 10) {
                wasSwiping.value = true;
            }
        })
        .onEnd((e) => {
            if (e.translationX < -50 && Math.abs(e.velocityX) > 300) {
                runOnJS(onNext)();
            } else if (e.translationX > 50 && Math.abs(e.velocityX) > 300) {
                runOnJS(onPrev)();
            }
        });

    const handlePress = () => {
        if (!wasSwiping.value) {
            onToggle();
        }
    };

    return (
        <SafeAreaView
            edges={['top', 'bottom']}
            className="flex-1 bg-white"
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        >
            <GestureDetector gesture={swipe}>
                <View className="flex-1 justify-center items-center bg-white">
                    <Pressable
                        onPress={handlePress}
                        className="relative"
                        style={{ width: cardWidth, height: cardHeight }}
                    >
                        {/* Front Side */}
                        <Animated.View style={frontStyle}>
                            <View className="bg-primary-light p-4 rounded-xl w-full h-full items-center justify-center">
                                <AutoSizeLetter letter={card.letter} />
                                <Pressable
                                    onPress={() => speak(card.letterPronunciation || card.letter, 'ne-NP')}
                                    style={{ position: 'absolute', top: 10, right: 10 }}
                                >
                                    <Feather name="volume-2" size={28} color="#374151" />
                                </Pressable>
                            </View>
                        </Animated.View>

                        {/* Back Side */}
                        <Animated.View style={backStyle}>
                            <View className="bg-primary-light p-4 rounded-xl w-full h-full">
                                <ScrollView
                                    contentContainerStyle={{
                                        flexGrow: 1,
                                        justifyContent: 'space-between',
                                        paddingBottom: 20,
                                    }}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View>
                                        <View className="flex-row justify-between items-center">
                                            <Text className="text-4xl font-semibold text-center flex-1">
                                                {card.word}
                                            </Text>
                                            <Pressable
                                                onPress={() => speak(card.pronunciation || card.word, 'ne-NP')}
                                            >
                                                <Feather name="volume-2" size={24} color="#374151" />
                                            </Pressable>
                                        </View>
                                        {card.pronunciation ? (
                                            <Text className="text-sm italic text-gray-500 text-center mt-1">
                                                {card.pronunciation}
                                            </Text>
                                        ) : null}
                                    </View>

                                    <View className="items-center">
                                        <SvgImage
                                            width={cardWidth * 0.7}
                                            height={cardWidth * 0.7}
                                            preserveAspectRatio="xMidYMid meet"
                                        />
                                    </View>

                                    <Text className="text-2xl text-gray-700 text-center mt-4">
                                        {card.translation}
                                    </Text>
                                </ScrollView>
                            </View>
                        </Animated.View>
                    </Pressable>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
}
