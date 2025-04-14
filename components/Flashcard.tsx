import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    runOnJS,
} from 'react-native-reanimated';
import { FlashCardType } from '../containers/flashCardTypes';

const { width, height } = Dimensions.get('window');

type Props = {
    card: FlashCardType;
    showAnswer: boolean;
    onToggle: () => void;
    onNext: () => void;
    onPrev?: () => void; // for swipe left/right
};

export default function Flashcard({ card, showAnswer, onToggle, onNext, onPrev }: Props) {
    const SvgImage = card.image;
    const rotate = useSharedValue(0);

    useEffect(() => {
        rotate.value = withTiming(showAnswer ? 180 : 0, { duration: 500 });
    }, [showAnswer]);

    const cardWidth = width * 0.9;
    const cardHeight = height * 0.66;

    const frontStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [0, 180])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: cardWidth,
        height: cardHeight,
    }));

    const backStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateY: `${interpolate(rotate.value, [0, 180], [180, 360])}deg` },
        ],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: cardWidth,
        height: cardHeight,
    }));

    const swipe = Gesture.Pan()
        .onEnd((e) => {
            if (e.translationX < -50) {
                runOnJS(onNext)();
            } else if (e.translationX > 50 && onPrev) {
                runOnJS(onPrev)();
            }
        });

    return (
        <GestureDetector gesture={swipe}>
            <View className="flex-1 items-center justify-center bg-white px-4">
                <Pressable
                    onPress={onToggle}
                    style={{ width: cardWidth, height: cardHeight }}
                    className="relative overflow-hidden mb-6"
                >
                    {/* Front Side */}
                    <Animated.View style={frontStyle}>
                        <View className="bg-primary-light p-4 rounded-sm w-full h-full items-center justify-center">
                            <Text className="text-8xl font-bold">{card.letter}</Text>
                        </View>
                    </Animated.View>

                    {/* Back Side */}
                    <Animated.View style={backStyle}>
                        <View className="bg-primary-light p-4 rounded-sm w-full h-full justify-between">
                            <View>
                                <Text className="text-6xl font-semibold text-center">{card.word}</Text>
                                <Text className="text-sm italic text-gray-500 text-right mt-1 mr-8">
                                    {card.pronunciation}
                                </Text>
                            </View>

                            <View className="items-center">
                                <SvgImage width={340} height={340} />
                            </View>

                            <Text className="text-4xl text-gray-700 text-center mt-4">{card.translation}</Text>
                        </View>
                    </Animated.View>
                </Pressable>

                <TouchableOpacity onPress={onToggle} className="bg-purple-700 px-6 py-3 rounded-lg w-64">
                    <Text className="text-white text-lg text-center">
                        {showAnswer ? 'Show Letter' : 'Show Meaning'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onNext} className="bg-purple-700 px-6 py-3 rounded-lg mt-2 w-64">
                    <Text className="text-white text-lg text-center">Next Card</Text>
                </TouchableOpacity>
            </View>
        </GestureDetector>
    );
}
