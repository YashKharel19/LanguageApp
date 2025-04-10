import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

type FlashcardProps = {
    card: {
        letter: string;
        word: string;
        pronunciation: string;
        image: string;
        translation: string;
    };
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
};

export default function Flashcard({ card, showAnswer, onToggle, onNext }: FlashcardProps) {
    return (
        <View className="items-center">
            <View className="bg-gray-100 p-6 rounded-2xl mb-5 w-80">
                {showAnswer ? (
                    <View className="items-center">
                        <View className="flex-row justify-between w-full mb-2">
                            <Text className="text-3xl font-semibold">{card.word}</Text>
                            <Text className="text-base italic text-gray-500">{card.pronunciation}</Text>
                        </View>
                        <Image
                            source={{ uri: card.image }}
                            className="w-40 h-40 rounded-lg my-4"
                            resizeMode="contain"
                        />
                        <Text className="text-lg text-gray-700">{card.translation}</Text>
                    </View>
                ) : (
                    <View className="items-center justify-center h-48">
                        <Text className="text-7xl font-bold">{card.letter}</Text>
                    </View>
                )}
            </View>

            <TouchableOpacity onPress={onToggle} className="bg-purple-700 px-6 py-3 rounded-lg mt-2 w-48">
                <Text className="text-white text-lg text-center">
                    {showAnswer ? 'Show Letter' : 'Show Meaning'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onNext} className="bg-purple-700 px-6 py-3 rounded-lg mt-2 w-48">
                <Text className="text-white text-lg text-center">Next Card</Text>
            </TouchableOpacity>
        </View>
    );
}
