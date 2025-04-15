import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Flashcard from '../components/Flashcard';
import { consonantCards } from '../data/nepali';
import { FlashCardType } from '../containers/flashCardTypes';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');

export default function FlashcardsScreen() {
    const [cards] = useState<FlashCardType[]>(consonantCards);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const translateX = useSharedValue(0);

    // Play a sound file dynamically
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
        // Start animation from off-screen
        translateX.value = direction === 'left' ? width : -width;
        translateX.value = withTiming(0, { duration: 300 });
    }, [index]);

    const animateOut = (onFinish: () => void) => {
        playSound(require('../assets/sounds/leftslide.wav')); // 🔊 Swipe sound
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

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Animated.View style={cardStyle}>
                <Flashcard
                    card={cards[index]}
                    showAnswer={showAnswer}
                    onToggle={() => {
                        setShowAnswer(!showAnswer);
                        playSound(require('../assets/sounds/flip.mp3')); // 🔊 Flip sound
                    }}
                    onNext={nextCard}
                    onPrev={previousCard}
                />
            </Animated.View>

            <TouchableOpacity
                onPress={() => {
                    setShowAnswer(!showAnswer);
                    playSound(require('../assets/sounds/flip.mp3'));
                }}
                className="bg-purple-700 px-6 py-3 rounded-lg mt-6 w-64"
            >
                <Text className="text-white text-lg text-center">
                    {showAnswer ? 'Show Letter' : 'Show Meaning'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={nextCard}
                className="bg-purple-700 px-6 py-3 rounded-lg mt-2 w-64"
            >
                <Text className="text-white text-lg text-center">Next Card</Text>
            </TouchableOpacity>
        </View>
    );
}
