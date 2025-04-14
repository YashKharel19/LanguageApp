import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Flashcard from '../components/Flashcard';
import { consonantCards } from '../data/nepali'; // Adjust if needed
import { FlashCardType } from '../containers/flashCardTypes';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function FlashcardsScreen() {
    const [cards] = useState<FlashCardType[]>(consonantCards);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const translateX = useSharedValue(0);

    useEffect(() => {
        // Slide new card in from the side
        translateX.value = direction === 'left' ? width : -width;
        translateX.value = withTiming(0, { duration: 300 });
    }, [index]);

    const animateOut = (onFinish: () => void) => {
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
            setIndex((prev) => (prev - 1 + cards.length) % cards.length); // wrap correctly
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
        </View>
    );
}
