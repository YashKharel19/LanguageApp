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
        <View className="items-center">
            <View className="bg-gray-100 p-8 rounded-xl mb-5 w-72">
                <Text className="text-2xl text-center">
                    {showAnswer ? card.answer : card.question}
                </Text>
            </View>

            <TouchableOpacity onPress={onToggle} className="bg-purple-700 px-6 py-4 rounded-lg mt-2 w-48">
                <Text className="text-white text-lg text-center">
                    {showAnswer ? 'Show Question' : 'Show Answer'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onNext} className="bg-purple-700 px-6 py-4 rounded-lg mt-2 w-48">
                <Text className="text-white text-lg text-center">Next Card</Text>
            </TouchableOpacity>
        </View>
    );
}

