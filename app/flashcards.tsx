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
        <View style={styles.container}>
            <Text style={styles.title}>Flashcards</Text>
            <Flashcard
                card={cards[index]}
                showAnswer={showAnswer}
                onToggle={() => setShowAnswer(!showAnswer)}
                onNext={nextCard}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
});
