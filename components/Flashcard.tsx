import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import { FlashCardType } from '../containers/flashCardTypes';

type Props = {
    card: FlashCardType;
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
};

export default function Flashcard({ card, showAnswer, onToggle, onNext }: Props) {
    const SvgImage = card.image;
    const rotate = useSharedValue(0);

    useEffect(() => {
        rotate.value = withTiming(showAnswer ? 180 : 0, { duration: 500 });
    }, [showAnswer]);

    const frontStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [0, 180])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));

    const backStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [180, 360])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));

    return (
        <View className="items-center">
            <View className="w-80 h-[420px] relative">
                {/* Front Side */}
                <Animated.View style={frontStyle}>
                    <View className="bg-primary-light p-4 rounded-sm w-80 h-[420px]">
                        <View className="flex-1 items-center justify-center">
                            <Text className="text-8xl font-bold">{card.letter}</Text>
                        </View>
                    </View>
                </Animated.View>

                {/* Back Side */}
                <Animated.View style={backStyle}>
                    <View className="bg-primary-light p-4 rounded-sm w-80 h-[420px]">
                        <View className="flex-1 justify-between">
                            <View>
                                <Text className="text-6xl font-semibold text-center">{card.word}</Text>
                                <Text className="text-sm italic text-gray-500 text-right mt-1 mr-8">
                                    {card.pronunciation}
                                </Text>
                            </View>

                            <View className="items-center">
                                <SvgImage width={250} height={250} />
                            </View>

                            <Text className="text-base text-gray-700 text-center">{card.translation}</Text>
                        </View>
                    </View>
                </Animated.View>
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
