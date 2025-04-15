// components/HomePage.tsx
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function HomePage() {
    const router = useRouter();
    const balloon1 = useRef(new Animated.Value(0)).current;
    const balloon2 = useRef(new Animated.Value(0)).current;
    const dinoDance = useRef(new Animated.Value(0)).current;
    const titleBounce = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animateBalloon(balloon1, 0);
        animateBalloon(balloon2, 500);
        animateDino();
        bounceTitle();
    }, []);

    const animateBalloon = (balloon: Animated.Value, delay: number) => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(delay),
                Animated.timing(balloon, {
                    toValue: -30,
                    duration: 2000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(balloon, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const animateDino = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(dinoDance, {
                    toValue: -10,
                    duration: 400,
                    easing: Easing.bounce,
                    useNativeDriver: true,
                }),
                Animated.timing(dinoDance, {
                    toValue: 10,
                    duration: 400,
                    easing: Easing.bounce,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const bounceTitle = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(titleBounce, {
                    toValue: -10,
                    duration: 500,
                    easing: Easing.elastic(2),
                    useNativeDriver: true,
                }),
                Animated.timing(titleBounce, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.elastic(2),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    return (
        <View className="flex-1 bg-primary-light justify-center items-center px-5">
            <Animated.Text style={{ transform: [{ translateY: balloon1 }] }} className="absolute top-20 left-12 text-4xl">
                🎈
            </Animated.Text>
            <Animated.Text style={{ transform: [{ translateY: balloon2 }] }} className="absolute top-20 right-12 text-4xl">
                🎈
            </Animated.Text>

            <Animated.Text style={{ transform: [{ translateY: dinoDance }] }} className="text-8xl my-2">
                🦕
            </Animated.Text>

            <Animated.Text style={{ transform: [{ translateY: titleBounce }] }} className="text-3xl font-bold text-purple-900 mb-5">
                Explore Lumasha
            </Animated.Text>

            <TouchableOpacity className="bg-pink-500 rounded-2xl py-3 px-8 shadow" onPress={() => router.push('/flashcards')}>
                <Text className="text-white font-semibold text-lg">▶️ Play & Learn</Text>
            </TouchableOpacity>

            <Text className="text-sm text-gray-500 mt-10 text-center">
                Designed for curious kids and lifelong learners 🌍✨
            </Text>
        </View>
    );
}
