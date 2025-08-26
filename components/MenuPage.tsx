import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useRef, useCallback } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

export default function MenuPage() {
    const { language } = useLocalSearchParams<{ language: string }>();
    const router = useRouter();
    const soundRef = useRef<Audio.Sound | null>(null);

    const redOrangeColors = ['#fff'];
    // Orange and Red

    const playBackgroundMusic = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/kidsmusic2.mp3'),
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

    useFocusEffect(
        useCallback(() => {
            playBackgroundMusic();

            return () => {
                stopBackgroundMusic();
            };
        }, [])
    );

    const goToFlashcards = async () => {
        await stopBackgroundMusic(); // Ensure music stops before navigation
        router.push({
            pathname: '/flashcards',
            params: { language },
        } as const);
    };

    const renderLine = (text: string) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            {text.split('').map((char, index) => (
                <Text
                    key={index}
                    style={{
                        fontSize: 36,
                        fontWeight: 'bold',
                        fontFamily: 'Comic Sans MS',
                        color: redOrangeColors[index % redOrangeColors.length],
                    }}
                >
                    {char}
                </Text>
            ))}
        </View>
    );

    return (
        <ImageBackground
            source={require('../assets/images/menupage.png')}
            resizeMode="stretch"
            className="flex-1"
        >
            <SafeAreaView className="flex-1 justify-between px-4">
                <View className="mt-14 space-y-2">
                    {renderLine(`Learn`)}
                    {renderLine(`${language}`)}
                    {renderLine(`Alphabets`)}
                </View>

                <View className="mb-16 space-y-4 items-center gap-4">
                    <TouchableOpacity
                        onPress={goToFlashcards}
                        className="bg-lang-orange px-8 py-4 rounded-2xl w-[80%] shadow"
                    >
                        <Text className="text-white text-lg font-bold text-center">Flashcards</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
