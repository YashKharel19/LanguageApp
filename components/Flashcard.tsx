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
            <View className="bg-primary-light p-4 rounded-sm mb-5 w-100 h-100">
                {showAnswer ? (
                    <View className="flex-1 justify-between">
                        <View>
                            <Text className="text-6xl font-semibold text-center">{card.word}</Text>
                            <Text className="text-sm italic text-gray-500 text-right mt-1 mr-8">{card.pronunciation}</Text>
                        </View>

                        <View className="items-center">
                            <SvgImage width={250} height={250} />
                        </View>

                        <Text className="text-base text-gray-700 text-center">{card.translation}</Text>
                    </View>
                ) : (
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-8xl font-bold">{card.letter}</Text>
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