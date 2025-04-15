import { View, Text, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const letters = ['L', 'U', 'M', 'A', 'षा'];
const languages = ['Devnagri', 'Newari', 'Hindi', 'Nepali', 'Japanese'];

export default function FlashScreen({ onComplete }: { onComplete: () => void }) {
    const animatedLetters = useRef(letters.map(() => new Animated.Value(0))).current;
    const balloonAnimations = useRef(languages.map(() => new Animated.Value(0))).current;
    const soundRef = useRef<Audio.Sound | null>(null); // Use Audio.Sound here

    useEffect(() => {
        animateLetters();
        animateBalloons();
        playBackgroundMusic();

        const timer = setTimeout(() => {
            stopBackgroundMusic(); // Stop music before transitioning
            onComplete(); // Proceed to the HomePage
        }, 6000);

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
            soundRef.current = sound; // Store the sound reference
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    const stopBackgroundMusic = async () => {
        if (soundRef.current) {
            await soundRef.current.stopAsync(); // Stop the sound
            soundRef.current = null; // Clear the reference
        }
    };

    const getColorForLetter = (letter: string) => {
        if (letter === 'षा') return 'text-sha-pink';
        return 'text-luma-blue';
    };

    const getBalloonColor = (index: number) => {
        const colors = [
            'bg-lang-red',
            'bg-lang-yellow',
            'bg-lang-green',
            'bg-lang-blue',
            'bg-lang-purple',
            'bg-lang-rose',
            'bg-lang-orange',
        ];
        return colors[index % colors.length];
    };

    return (
        <View className="flex-1 bg-primary-light justify-center items-center px-4">
            <Text className="text-2xl font-bold text-rose-600 mb-2">🎉 Welcome to</Text>

            <View className="flex-row my-2">
                {letters.map((letter, index) => (
                    <Animated.Text
                        key={index}
                        style={{ transform: [{ translateY: animatedLetters[index] }] }}
                        className={`text-4xl font-bold mx-1 ${getColorForLetter(letter)}`}
                    >
                        {letter}
                    </Animated.Text>
                ))}
            </View>

            <Text className="text-lg font-semibold text-purple-600 mt-4">
                Let's play & learn new languages!
            </Text>

            <View className="flex-row flex-wrap justify-center mt-8">
                {languages.map((lang, index) => (
                    <Animated.View
                        key={lang}
                        style={{ transform: [{ translateY: balloonAnimations[index] }] }}
                        className={`m-2 rounded-xl py-2 px-3 shadow-md ${getBalloonColor(index)}`}
                    >
                        <Text className="text-white font-bold text-sm">{lang}</Text>
                    </Animated.View>
                ))}
            </View>
        </View>
    );
}
