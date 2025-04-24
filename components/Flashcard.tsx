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
import { FlashCardType } from '../containers/flashCardTypes';
import * as Speech from 'expo-speech';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import AutoSizeLetter from './AutoSizeLetter';

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
    const cardWidth = Math.min(width * 0.9, 400);

    useEffect(() => {
        rotate.value = withTiming(showAnswer ? 180 : 0, { duration: 500 });
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

    const speakWord = () => {
        if (card.pronunciation) {
            Speech.speak(card.pronunciation, {
                language: 'en-US',
                rate: 0.85,
            });
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <GestureDetector gesture={swipe}>
                <View className="flex-1 justify-center items-center bg-white px-4">
                    <Pressable
                        onPress={handlePress}
                        style={{ width: cardWidth }}
                        className="flex-[0.8] relative"
                    >
                        {/* Front Side */}
                        <Animated.View style={frontStyle}>
                            <View className="bg-primary-light p-4 rounded-xl w-full h-full items-center justify-center">
                                <AutoSizeLetter letter={card.letter} />
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
                                        <Text className="text-4xl font-semibold text-center">{card.word}</Text>
                                        <View className="flex-row justify-end items-center mt-1 mr-2 flex-wrap">
                                            <Text className="text-sm italic text-gray-500 mr-2">
                                                {card.pronunciation}
                                            </Text>
                                            <Pressable onPress={speakWord}>
                                                <Feather name="volume-2" size={18} color="#6b7280" />
                                            </Pressable>
                                        </View>
                                    </View>

                                    <View className="items-center my-4">
                                        <SvgImage width={260} height={260} preserveAspectRatio="xMidYMid meet" />
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
