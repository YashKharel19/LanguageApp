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
            source={require('../assets/images/sadbackground.jpg')}
            resizeMode="cover"

            imageStyle={{ width: '100%', height: '100%' }}
            className="flex-1 justify-start items-center"
        >

            <Animated.View
                style={{
                    transform: [{ translateY: bounceValue }],
                    marginTop: 282,
                }}
            >
                <Image
                    source={require('../assets/images/sad.png')} // Add your character image
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />
            </Animated.View>


        </ImageBackground>
    );
}
