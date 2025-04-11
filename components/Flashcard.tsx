// components/Flashcard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlashCardType } from '../containers/flashCardTypes';

type Props = {
    card: FlashCardType;
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
};

export default function Flashcard({ card, showAnswer, onToggle, onNext }: Props) {

    const SvgImage = card.image;
    console.log(card.image)
    return (
        <View className="items-center">
            <View className="bg-gray-100 p-6 rounded-2xl mb-5 w-80">
                {showAnswer ? (
                    <View className="items-center">
                        <View className="flex-row justify-between w-full mb-2">
                            <Text className="text-3xl font-semibold">{card.word}</Text>
                            <Text className="text-base italic text-gray-500">{card.pronunciation}</Text>
                        </View>
                        <View className="my-4 items-center">
                            <SvgImage width={120} height={120} />
                        </View>
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
