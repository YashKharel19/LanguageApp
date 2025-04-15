import React, { useEffect, useState, useRef } from 'react';
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

    const sound = useRef<Audio.Sound | null>(null);

    useEffect(() => {
        loadSound();
        return () => {
            unloadSound();
        };
    }, []);

    const loadSound = async () => {
        const { sound: loadedSound } = await Audio.Sound.createAsync(
            require('../assets/sounds/leftslide.wav')
        );
        sound.current = loadedSound;
    };

    const playSound = async () => {
        if (sound.current) {
            await sound.current.replayAsync();
        }
    };

    const unloadSound = async () => {
        if (sound.current) {
            await sound.current.unloadAsync();
            sound.current = null;
        }
    };

    useEffect(() => {
        translateX.value = direction === 'left' ? width : -width;
        translateX.value = withTiming(0, { duration: 300 });
    }, [index]);

    const animateOut = (onFinish: () => void) => {
        playSound(); // 🔊 Play sound on swipe
        translateX.value = withTiming(direction === 'left' ? -width : width, { duration: 200 }, () => {
            runOnJS(onFinish)();
        });
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
            <Text className="text-3xl font-bold mt-12">Flashcards</Text>
            <Animated.View style={cardStyle}>
                <Flashcard
                    card={cards[index]}
                    showAnswer={showAnswer}
                    onToggle={() => setShowAnswer(!showAnswer)}
                    onNext={nextCard}
                    onPrev={previousCard}
                />
            </Animated.View>

            <TouchableOpacity
                onPress={() => setShowAnswer(!showAnswer)}
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
