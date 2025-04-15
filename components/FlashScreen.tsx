// components/FlashScreen.tsx
import { View, Text, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const letters = ['L', 'U', 'M', 'A', 'षा'];
const languages = ['Devnagri', 'Newari', '', 'Hindi', 'Nepali', 'Japanese'];

export default function FlashScreen({ onComplete }: { onComplete: () => void }) {
    const animatedLetters = useRef(letters.map(() => new Animated.Value(0))).current;
    const balloonAnimations = useRef(languages.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        animateLetters();
        animateBalloons();
        playBackgroundMusic();

        // Automatically transition to HomePage after 4s
        const timer = setTimeout(() => {
            onComplete();
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const animateLetters = () => {
        animatedLetters.forEach((anim, i) => {
            Animated.loop(
                Animated.sequence([
                    Animated.delay(i * 100),
                    Animated.timing(anim, {
                        toValue: -12,
                        duration: 400,
                        easing: Easing.bounce,
                        useNativeDriver: true,
                    }),
                    Animated.timing(anim, {
                        toValue: 0,
                        duration: 400,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        });
    };

    const animateBalloons = () => {
        balloonAnimations.forEach((anim) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(anim, {
                        toValue: -30,
                        duration: 2000,
                        easing: Easing.inOut(Easing.quad),
                        useNativeDriver: true,
                    }),
                    Animated.timing(anim, {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.inOut(Easing.quad),
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        });
    };

    const playBackgroundMusic = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/kidsmusic.mp3'),
                {
                    shouldPlay: true,
                    isLooping: true,
                    volume: 0.7,
                }
            );
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-pink-100 px-4">
            <Text className="text-2xl font-bold text-rose-600 mb-2">🎉 Welcome to</Text>

            <View className="flex-row my-2">
                {letters.map((letter, index) => (
                    <Animated.Text
                        key={index}
                        style={{
                            transform: [{ translateY: animatedLetters[index] }],
                        }}
                        className="text-4xl font-bold mx-1"
                    >
                        {letter}
                    </Animated.Text>
                ))}
            </View>

            <Text className="text-lg font-semibold text-purple-700 mt-4">Let's play & learn new languages!</Text>

            <View className="flex-row flex-wrap justify-center mt-8">
                {languages.map((lang, index) => (
                    <Animated.View
                        key={lang}
                        style={{
                            transform: [{ translateY: balloonAnimations[index] }],
                        }}
                        className="m-2 rounded-xl px-3 py-2 shadow-md"
                    >
                        <Text className="text-white font-bold">{lang}</Text>
                    </Animated.View>
                ))}
            </View>
        </View>
    );
}
