// app/ComingSoon.tsx
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function ComingSoon() {
    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1"
        >
            <View>


                <Text className="text-3xl text-purple-700 font-bold mb-2">
                    Oopsie!
                </Text>
                <Text className="text-lg text-center text-gray-700 px-4">
                    Flashcards for this language are not ready yet.
                </Text>
                <Text className="text-lg text-center text-gray-700 px-4 mt-2">
                    Come back soon to learn more fun letters!
                </Text>
            </View>
        </ImageBackground>
    );
}
