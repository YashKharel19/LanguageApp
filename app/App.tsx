// App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Flashcard from './components/Flashcard';

type Card = {
    question: string;
    answer: string;
};

export default function App() {
    const cards: Card[] = [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'What is 2 + 2?', answer: '4' },
        { question: 'React Native is based on which language?', answer: 'JavaScript' },
    ];

    const [index, setIndex] = useState<number>(0);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    const nextCard = () => {
        setShowAnswer(false);
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

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
