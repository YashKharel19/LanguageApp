import { View, Text, Animated, Easing, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const letters = ['L', 'u', 'ma', 'षा'];

export default function FlashScreen({ onComplete }: { onComplete: () => void }) {
    const animatedLetters = useRef(letters.map(() => new Animated.Value(0))).current;
    const soundRef = useRef<Audio.Sound | null>(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        animateLetters();
        playBackgroundMusic();

        const timer = setTimeout(() => {
            setShowButton(true);
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
            soundRef.current = sound;
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    const stopBackgroundMusic = async () => {
        if (soundRef.current) {
            await soundRef.current.stopAsync();
            soundRef.current = null;
        }
    };

    const handleGetStarted = async () => {
        await stopBackgroundMusic();
        onComplete();
    };

    const getColorForLetter = (letter: string) => {
        switch (letter) {
            case 'L':
                return 'text-lang-orange';
            case 'u':
                return 'text-lang-red';
            case 'ma':
                return 'text-lang-blue';
            case 'षा':
                return 'text-lang-yellow';
            default:
                return 'text-black';
        }
    };

    const screenHeight = Dimensions.get('window').height;

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1 justify-between items-center px-4 py-8"
        >
            <View style={{ marginTop: screenHeight * 0.15 }} className="items-center">
                {/* Animated Logo */}
                <View className="flex-row mb-2">
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

                {/* Gradient Tagline */}
                <MaskedView
                    maskElement={
                        <View>
                            <Text className="text-2xl font-bold tracking-widest text-center">
                                LEARN LOCAL,
                            </Text>
                            <Text
                                className="text-2xl font-bold tracking-widest"
                                style={{ paddingLeft: 120 }}
                            >
                                SPEAK GLOBAL
                            </Text>
                        </View>
                    }
                >
                    <LinearGradient
                        colors={['#f79313', '#fbcd3c', '#f0665d', '#ff0000']}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <View>
                            <Text className="opacity-0 text-2xl font-bold tracking-widest text-center">
                                LEARN LOCAL,
                            </Text>
                            <Text
                                className="opacity-0 text-2xl font-bold tracking-widest"
                                style={{ paddingLeft: 120 }}
                            >
                                SPEAK GLOBAL
                            </Text>
                        </View>
                    </LinearGradient>
                </MaskedView>
            </View>

            {/* Bottom Button */}
            {showButton && (
                <TouchableOpacity
                    onPress={handleGetStarted}
                    className="bg-lang-orange px-6 py-3 rounded-[15px]"
                >
                    <Text className="text-white text-lg font-semibold">Get Started</Text>
                </TouchableOpacity>
            )}
        </ImageBackground>
    );
}
