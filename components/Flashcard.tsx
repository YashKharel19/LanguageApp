import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Pressable,
    Platform,
    Dimensions,
    ScrollView,
    Image
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
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AutoSizeLetter from './AutoSizeLetter';
import { FlashCardType } from '../containers/flashCardTypes';

const { width } = Dimensions.get('window');

type Props = {
    card: FlashCardType;
    language: string;
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function Flashcard({
    card,
    language,
    showAnswer,
    onToggle,
    onNext,
    onPrev,
}: Props) {
    const SvgImage = card.image;
    const rotate = useSharedValue(0);
    const wasSwiping = useSharedValue(false);
    const insets = useSafeAreaInsets();
    const isMounted = useRef(false);

    const cardWidth = Math.min(width * 0.85, 450);
    const cardHeight = cardWidth * 1.4;

    const languageLocales: Record<string, string> = {
        Nepali: 'ne-NP',
        Limbu: 'ne-NP',
        Tamang: 'ne-NP',
        Kannada: 'kn-IN',
        Punjabi: 'pa-IN',
        Gujarati: 'gu-IN',
        Hindi: 'hi-IN',
        Spanish: 'es-ES',
        Filipino: 'fil-PH',
        Tibetan: 'bo-CN',
        French: 'fr-FR',
        Portuguese: 'pt-PT',
        Korean: 'kr-KR',
        Persian: 'ir-IR',

    };

    // 🔹 Play audio file with expo-av
    const playAudio = async (audioFile: any) => {
        try {
            const { sound } = await Audio.Sound.createAsync(audioFile);
            await sound.playAsync();
        } catch (e) {
            console.warn("Audio play error:", e);
        }
    };

    // 🔹 Smart speak: audio for Nepali, TTS for others
    const speak = (text: string, audioFile?: any) => {
        if ((language === "Nepali" || language === "Punjabi" || language === "Bengali" || language === "French" || language === "Gujarati" || language === "Hindi" || language === 'Kannada' || language === 'Korean' || language === 'Malayalam' || language === 'Persian' || language === 'Portuguese' || language === 'Spanish' || language === 'Telugu') && audioFile) {
            playAudio(audioFile);
        } else {
            const locale = languageLocales[language] || 'en-US';
            if (text) {
                Speech.stop();
                Speech.speak(text, {
                    language: locale,
                    rate: 0.85,
                });
            }
        }
    };

    // Speak letter when card changes
    useEffect(() => {
        speak(card.letterPronunciation || card.letter, card.audioLetter);
    }, [card]);

    // Flip animation + speak when toggling
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        rotate.value = withTiming(showAnswer ? 180 : 0, { duration: 500 });

        if (showAnswer) {
            speak(card.pronunciation || card.word, card.audioWord);
        } else {
            speak(card.letterPronunciation || card.letter, card.audioLetter);
        }
    }, [showAnswer]);

    // Keyboard navigation for web
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

    const handleNext = () => {
        onNext();
    };

    const handlePrev = () => {
        onPrev();
    };

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
                runOnJS(handleNext)();
            } else if (e.translationX > 50 && Math.abs(e.velocityX) > 300) {
                runOnJS(handlePrev)();
            }
        });

    const handlePress = () => {
        if (!wasSwiping.value) {
            onToggle();
        }
    };

    const soundButtonStyle = {
        position: 'absolute' as 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 9999,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        zIndex: 10,
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
                                    onPress={(e) => {
                                        e.stopPropagation();
                                        speak(card.letterPronunciation || card.letter, card.audioLetter);
                                    }}
                                    style={soundButtonStyle}
                                >
                                    <Feather name="volume-2" size={24} color="white" />
                                </Pressable>
                            </View>
                        </Animated.View>

                        {/* Back Side */}
                        <Animated.View style={backStyle}>
                            <View className="bg-primary-light p-4 rounded-xl w-full h-full">
                                <Pressable
                                    onPress={(e) => {
                                        e.stopPropagation();
                                        speak(card.pronunciation || card.word, card.audioWord);
                                    }}
                                    style={soundButtonStyle}
                                >
                                    <Feather name="volume-2" size={24} color="white" />
                                </Pressable>

                                <ScrollView
                                    contentContainerStyle={{
                                        flexGrow: 1,
                                        justifyContent: 'space-between',
                                        paddingBottom: 20,
                                    }}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View className="w-full px-4 mt-6">
                                        <Text
                                            style={{ fontSize: cardWidth * 0.155 }}
                                            className="font-semibold text-center w-full"
                                        >
                                            {card.word}
                                        </Text>
                                        {card.pronunciation ? (
                                            <Text className="text-sm italic text-gray-500 text-right mt-1">
                                                {card.pronunciation}
                                            </Text>
                                        ) : null}
                                    </View>

                                    <View className="items-center">
                                        <Image
                                            source={card.image}
                                            style={{
                                                width: cardWidth * 0.7,
                                                height: cardWidth * 0.7,
                                                resizeMode: "contain", // keeps aspect ratio
                                            }}
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
