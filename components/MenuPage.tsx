// components/MenuPage.tsx
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';

type MenuPageProps = {
    language: string;
};

export default function MenuPage({ language }: MenuPageProps) {
    const router = useRouter();
    const soundRef = useRef<Audio.Sound | null>(null);

    useEffect(() => {
        playBackgroundMusic();
        return () => {
            stopBackgroundMusic();
        };
    }, []);

    const playBackgroundMusic = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/kidsmusic3.mp3'),
                {
                    shouldPlay: true,
                    isLooping: true,
                    volume: 0.7,
                }
            );
            soundRef.current = sound;
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    const stopBackgroundMusic = async () => {
        if (soundRef.current) {
            await soundRef.current.stopAsync();
            await soundRef.current.unloadAsync();
            soundRef.current = null;
        }
    };

    const goToFlashcards = async () => {
        await stopBackgroundMusic();
        router.push({
            pathname: '/flashcards',
            params: { language },
        } as const);
    };

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1"
        >
            <SafeAreaView className="flex-1 justify-between px-4">
                {/* Title */}
                <View className="mt-12">
                    <Text className="text-3xl font-extrabold text-center text-lang-blue tracking-widest">
                        Learn the {language} Alphabets
                    </Text>
                </View>

                {/* Buttons */}
                <View className="mb-16 space-y-4 items-center gap-4">
                    <TouchableOpacity
                        onPress={goToFlashcards}
                        className="bg-lang-orange px-8 py-4 rounded-2xl w-[80%] shadow"
                    >
                        <Text className="text-white text-lg font-bold text-center">Flashcards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={goToFlashcards}
                        className="bg-lang-blue px-8 py-4 rounded-2xl w-[80%] shadow"
                    >
                        <Text className="text-white text-lg font-bold text-center">Mismatch Games</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
