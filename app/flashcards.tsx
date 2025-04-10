// app/flashcards.tsx
import React, { useState, useEffect } from 'react'; // Importing useState and useEffect
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Flashcard from '../components/Flashcard';
import { loadFlashcards, saveFlashcards } from '../utils/storage';

// Define the type for a flashcard
type FlashcardType = {
    question: string;
    answer: string;
};

export default function FlashcardsScreen() {
    // Specify the type of the state
    const [cards, setCards] = useState<FlashcardType[]>([]); // Set the state to be an array of FlashcardType
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            const storedCards = await loadFlashcards();
            if (storedCards.length === 0) {
                const defaultCards: FlashcardType[] = [
                    { question: 'What is React Native?', answer: 'A framework for building native apps using React' },
                    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript' },
                ];
                await saveFlashcards(defaultCards);
                setCards(defaultCards);
            } else {
                setCards(storedCards);
            }
            setLoading(false);
        };

        fetchCards();
    }, []);

    const nextCard = () => {
        setShowAnswer(false);
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    if (loading) {
        return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
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


