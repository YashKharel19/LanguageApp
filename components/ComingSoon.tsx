// app/ComingSoon.tsx
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { Audio } from 'expo-av';

export default function ComingSoon() {
    const bounceValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceValue, {
                    toValue: -10,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(bounceValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const playPopSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/kidsmusic2.mp3') // Make sure this sound exists
        );
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
                sound.unloadAsync();
            }
        });
    };

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1 justify-center items-center p-6"
        >
            <Animated.View
                style={{
                    transform: [{ translateY: bounceValue }],
                    marginBottom: 20,
                }}
            >
                <Image
                    source={require('../assets/images/sad.png')} // Add your character image
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />
            </Animated.View>

            <View className="items-center bg-white/70 px-6 py-4 rounded-2xl shadow-md">
                <Text className="text-3xl text-purple-700 font-bold mb-2">
                    Oopsie! 🚧
                </Text>
                <Text className="text-lg text-center text-gray-800">
                    Flashcards for this language aren't ready yet.
                </Text>
                <Text className="text-base text-center text-gray-700 mt-1">
                    Come back soon to learn more fun letters!
                </Text>

                <TouchableOpacity
                    onPress={playPopSound}
                    className="bg-yellow-400 px-6 py-3 rounded-full mt-4 shadow-md"
                    activeOpacity={0.8}
                >
                    <Text className="text-white text-lg font-bold">🎈 Tap Me!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
