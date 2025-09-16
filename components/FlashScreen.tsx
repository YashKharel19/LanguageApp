import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withDelay,
    Easing,
} from 'react-native-reanimated';

const letters = ['L', 'u', 'ma', 'षा'];

export default function FlashScreen({ onComplete }: { onComplete: () => void }) {
    const animatedLetters = letters.map(() => useSharedValue(0));
    const taglineOpacity = useSharedValue(0);
    const soundRef = useRef<Audio.Sound | null>(null);
    const [showButton, setShowButton] = useState(false);

    const screenHeight = Dimensions.get('window').height;

    // Animated styles for letters
    const animatedStyles = animatedLetters.map((val) =>
        useAnimatedStyle(() => ({
            transform: [{ translateY: val.value }],
        }))
    );

    // Animated style for tagline fade-in
    const taglineStyle = useAnimatedStyle(() => ({
        opacity: taglineOpacity.value,
    }));

    useEffect(() => {
        animateLetters();
        playBackgroundMusic();
        fadeInTagline();

        const timer = setTimeout(() => setShowButton(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Smooth continuous dancing animation
    const animateLetters = () => {
        animatedLetters.forEach((val, i) => {
            val.value = withDelay(
                i * 150, // stagger letters
                withRepeat(
                    withTiming(-12, {
                        duration: 600,
                        easing: Easing.inOut(Easing.sin), // smooth up-and-down
                    }),
                    -1,
                    true // auto-reverse for smooth motion
                )
            );
        });
    };

    const fadeInTagline = () => {
        taglineOpacity.value = withTiming(1, { duration: 1500 });
    };

    const playBackgroundMusic = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/kidsmusic.mp3'),
                { shouldPlay: true, isLooping: true, volume: 0.7 }
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

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen3.jpg')}
            resizeMode="cover"
            className="flex-1 justify-between items-center"
        >
            <View style={{ marginTop: screenHeight * 0.15 }} className="items-center">
                {/* Animated Logo */}
                <View className="flex-row mb-2">
                    {letters.map((letter, index) => (
                        <Animated.Text
                            key={index}
                            style={animatedStyles[index]}
                            className={`text-4xl font-bold mx-1 ${getColorForLetter(letter)}`}
                        >
                            {letter}
                        </Animated.Text>
                    ))}
                </View>

                {/* Gradient Tagline with fade-in */}
                <Animated.View style={taglineStyle}>
                    <MaskedView
                        maskElement={
                            <View>
                                <Text className="text-2xl font-bold tracking-widest text-center">LEARN LOCAL,</Text>
                                <Text className="text-2xl font-bold tracking-widest" style={{ paddingLeft: 120 }}>
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
                                <Text className="opacity-0 text-2xl font-bold tracking-widest text-center">LEARN LOCAL,</Text>
                                <Text className="opacity-0 text-2xl font-bold tracking-widest" style={{ paddingLeft: 120 }}>
                                    SPEAK GLOBAL
                                </Text>
                            </View>
                        </LinearGradient>
                    </MaskedView>
                </Animated.View>
            </View>

            {/* Bottom Button */}
            {showButton && (
                <TouchableOpacity
                    onPress={handleGetStarted}
                    className="bg-lang-orange px-6 py-3 rounded-[15px] mb-12"
                >
                    <Text className="text-white text-2xl font-semibold">Get Started</Text>
                </TouchableOpacity>
            )}
        </ImageBackground>
    );
}
