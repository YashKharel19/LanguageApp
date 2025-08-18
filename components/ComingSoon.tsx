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
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function ComingSoon() {
    const bounceValue = new Animated.Value(0);
    const router = useRouter();

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
            require('../assets/sounds/kidsmusic2.mp3')
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
            source={require('../assets/images/sadbackground.jpg')}
            resizeMode="cover"
            imageStyle={{ width: '100%', height: '100%' }}
            className="flex-1 justify-start items-center"
        >

            {/* Top Navigation Buttons */}
            <View className="absolute top-12 left-5 right-5 flex-row justify-between">
                {/* Back Button */}
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex-row items-center bg-white px-3 py-1 rounded-full shadow mt-8"
                >
                    <Feather name="arrow-left" size={20} color="#000" />
                    <Text className="ml-2 text-base font-medium">Back</Text>
                </TouchableOpacity>

                {/* Home Button */}
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
                    marginTop: 282,
                    marginBottom: 300
                }}
            >
                <Image
                    source={require('../assets/images/sad.png')}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Coming Soon Text */}
            <Text className="text-3xl font-bold text-white mt-6">
                Coming Soon
            </Text>

        </ImageBackground>
    );
}
