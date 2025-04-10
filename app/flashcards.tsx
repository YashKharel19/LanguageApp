import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Flashcard from '../components/Flashcard';
import flashcardData from '../data/nepali.json'; // <-- Import JSON file directly

type FlashcardType = {
    question: string;
    answer: string;
};

export default function FlashcardsScreen() {
    const [cards] = useState<FlashcardType[]>(flashcardData); // Load directly from JSON
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const nextCard = () => {
        setShowAnswer(false);
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    if (cards.length === 0) {
        return <ActivityIndicator size="large" className="mt-24" />;
    }

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-3xl font-bold mb-5">Flashcards</Text>
            <Flashcard
                card={cards[index]}
                showAnswer={showAnswer}
                onToggle={() => setShowAnswer(!showAnswer)}
                onNext={nextCard}
            />
        </View>
    );
}
