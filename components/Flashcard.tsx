// components/Flashcard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type FlashcardProps = {
    card: {
        question: string;
        answer: string;
    };
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
};

export default function Flashcard({ card, showAnswer, onToggle, onNext }: FlashcardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>
                    {showAnswer ? card.answer : card.question}
                </Text>
            </View>
            <TouchableOpacity onPress={onToggle} style={styles.button}>
                <Text style={styles.buttonText}>
                    {showAnswer ? 'Show Question' : 'Show Answer'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext} style={styles.button}>
                <Text style={styles.buttonText}>Next Card</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    card: {
        backgroundColor: '#f8f8f8',
        padding: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: 300,
    },
    text: { fontSize: 24, textAlign: 'center' },
    button: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
        width: 200,
    },
    buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});
