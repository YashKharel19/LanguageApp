import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function ComingSoon() {
    const bounceValue = useRef(new Animated.Value(0)).current;
    const router = useRouter();
    const soundRef = useRef<Audio.Sound | null>(null);

    useEffect(() => {
        // Start bounce animation
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

        // Load and play sound with looping
        const loadAndPlaySound = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/kidscomingsoon.wav')
            );
            soundRef.current = sound;

            await sound.setIsLoopingAsync(true);
            await sound.playAsync();
        };

        loadAndPlaySound();

        return () => {
            if (soundRef.current) {
                soundRef.current.stopAsync();
                soundRef.current.unloadAsync();
                soundRef.current = null;
            }
        };
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/sadbackground.jpg')}
            resizeMode="cover"
            className="flex-1 justify-between items-center py-20"
        >
            {/* Top Navigation Buttons */}
            <View className="absolute top-12 left-5 right-5 flex-row justify-between">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex-row items-center bg-white px-3 py-1 rounded-full shadow mt-8"
                >
                    <Feather name="arrow-left" size={20} color="#000" />
                    <Text className="ml-2 text-base font-medium">Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.replace('/')}
                    className="flex-row items-center bg-white px-3 py-1 rounded-full shadow mt-8"
                >
                    <Feather name="home" size={20} color="#000" />
                    <Text className="ml-2 text-base font-medium">Home</Text>
                </TouchableOpacity>
            </View>

            {/* Animated Image */}
            <Animated.View
                style={{
                    transform: [{ translateY: bounceValue }],
                    flex: 1,
                    justifyContent: "flex-end", // push toward bottom
                    alignItems: "center",
                    marginBottom: "65%", // responsive spacing
                }}
            >
                <Image
                    source={require('../assets/images/sad.png')}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />
            </Animated.View>


            {/* Coming Soon Text */}
            <Text className="text-3xl font-bold text-white mb-12">
                Coming Soon
            </Text>
        </ImageBackground>
    );
}
