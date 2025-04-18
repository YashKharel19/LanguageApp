import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CountryFlag from 'react-native-country-flag';
import { Audio } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const countries = [
    { label: 'Nepal', code: 'np', emoji: '🇳🇵' },
    { label: 'India', code: 'in', emoji: '🇮🇳' },
    { label: 'China', code: 'cn', emoji: '🇨🇳' },
    { label: 'Bangladesh', code: 'bd', emoji: '🇧🇩' },
    { label: 'Spain', code: 'es', emoji: '🇪🇸' },
    { label: 'France', code: 'fr', emoji: '🇫🇷' },
];

const languagesByCountry: Record<string, string[]> = {
    np: ['Nepali', 'Newari', 'Maithili', 'Tamang', 'Gurung', 'Magar'],
    in: ['Hindi', 'Tamil', 'Bengali'],
    cn: ['Mandarin', 'Cantonese'],
    bd: ['Bengali'],
    es: ['Spanish'],
    fr: ['French'],
};

export default function HomePage() {
    const router = useRouter();
    const soundRef = useRef<Audio.Sound | null>(null);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [languageOptions, setLanguageOptions] = useState<string[]>([]);

    const GradientText = ({
        text,
        colors,
    }: {
        text: string;
        colors: [string, string];
    }) => (
        <MaskedView
            maskElement={
                <View className="items-center">
                    <Text className="text-3xl font-extrabold tracking-widest text-center">
                        {text}
                    </Text>
                </View>
            }
        >
            <LinearGradient colors={colors} start={[0, 0]} end={[1, 1]}>
                <Text className="opacity-0 text-3xl font-extrabold tracking-widest text-center">
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    );



    useEffect(() => {
        playBackgroundMusic();

        return () => {
            stopBackgroundMusic(); // Cleanup when navigating away or component unmounts
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

    const handleCountrySelect = (value: string) => {
        setSelectedCountry(value);
        setLanguageOptions(languagesByCountry[value]);
    };

    const handleLanguageSelect = async (lang: string) => {
        setSelectedLanguage(lang);
        await stopBackgroundMusic();
        // Navigate or continue to next step

        router.push('/flashcards');
    };
    // const handleSelectCountry = async () => {
    //     await stopBackgroundMusic();
    //     router.push('/flashcards');
    // };

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1"
        >
            <SafeAreaView className="flex-1 justify-between">
                {/* Top Gradient Text Section */}
                <View>
                    <View className="items-center">
                        <GradientText text="Start" colors={['#0000FF', '#00FF00']} />
                    </View>
                    <View className="flex-row justify-center gap-4">
                        <GradientText text="Learning" colors={['#FFA500', '#FF0000']} />
                        <GradientText text="in" colors={['#FF0000', '#FF4D4D']} />
                    </View>
                    <View className="flex-row justify-center gap-4 mb-2">
                        <GradientText text="Your" colors={['#00BFFF', '#1E90FF']} />
                        <GradientText text="Language" colors={['#FF0000', '#FF4D4D']} />
                    </View>

                    {/* Flags directly below the text */}
                    <View className="items-center mt-4">
                        <View className="flex-row gap-6 mb-3">
                            <Image
                                source={require('../assets/flag/nepal.png')}
                                style={{
                                    width: 70,
                                    height: 60,
                                    resizeMode: 'contain',
                                }}
                            />
                            {countries.slice(1, 3).map((country) => (
                                <CountryFlag key={country.code} isoCode={country.code} size={50} style={{ borderRadius: 8 }} />
                            ))}
                        </View>
                        <View className="flex-row justify-center gap-6">
                            {countries.slice(3).map((country) => (
                                <CountryFlag key={country.code} isoCode={country.code} size={50} style={{ borderRadius: 8 }} />
                            ))}
                        </View>
                    </View>
                </View>


                {/* Button to show dropdown */}
                {!showCountryDropdown && (
                    <View className="items-center my-6">
                        <TouchableOpacity
                            onPress={() => setShowCountryDropdown(true)}
                            className="bg-lang-orange px-6 py-3 rounded-[15px] shadow"
                        >
                            <Text className="text-white text-lg font-semibold">Select Your Country</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Enhanced Country Picker for Kids */}
                {showCountryDropdown && !selectedCountry && (
                    <View className="bg-white rounded-2xl mx-6 px-4 py-6 shadow-md items-center space-y-4">
                        {/* Fun Title */}
                        <Text className="text-2xl font-extrabold text-lang-blue text-center tracking-wide">
                            🌎 Pick Your Country
                        </Text>

                        {/* Emoji Flag Grid */}
                        <View className="flex-row flex-wrap justify-center gap-4 px-4 pt-2">
                            {countries.map((country) => (
                                <TouchableOpacity
                                    key={country.code}
                                    onPress={() => handleCountrySelect(country.code)}
                                    className="bg-[#FFF4E0] w-[70px] h-[90px] rounded-2xl items-center justify-center shadow-md active:scale-95"
                                    style={{
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 3,
                                        elevation: 4,
                                    }}
                                >
                                    <Text style={{ fontSize: 36 }}>
                                        {country.emoji || '🌍'}
                                    </Text>
                                    <Text className="text-xs font-semibold text-center text-gray-800 mt-1">
                                        {country.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Friendly Prompt */}
                        <Text className="text-sm text-gray-600 text-center pt-2">
                            Tap a country to continue 🌟
                        </Text>
                    </View>
                )}


                {/* Language options */}
                {selectedCountry && !selectedLanguage && (
                    <View className="mt-6">
                        <Text className="text-center text-xl font-bold mb-4 text-white">Pick a Language:</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20 }}
                        >
                            {languageOptions.map((lang) => (
                                <TouchableOpacity
                                    key={lang}
                                    onPress={() => handleLanguageSelect(lang)}
                                    className="bg-white px-5 py-3 rounded-xl mx-2 shadow"
                                >
                                    <Text className="text-lg font-bold text-lang-orange">{lang}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </SafeAreaView>
        </ImageBackground>
    );
}
