import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    FlatList,
    Modal,
    Pressable,
    Keyboard,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CountryFlag from 'react-native-country-flag';
import { Audio } from 'expo-av';
import { useRef, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';
import { countries } from '../data/countries';
import { languagesByCountry } from '../data/languages';

// Define proper types for country and language data
interface Country {
    code: string;
    label: string;
    emoji?: string;
}

export default function HomePage() {
    const router = useRouter();
    const soundRef = useRef<Audio.Sound | null>(null);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [languageOptions, setLanguageOptions] = useState<string[]>([]);
    const [countrySearchText, setCountrySearchText] = useState('');
    const [languageSearchText, setLanguageSearchText] = useState('');

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

    useFocusEffect(
        useCallback(() => {
            setShowCountryDropdown(false);
            setSelectedCountry(null);
            setSelectedLanguage(null);
            setLanguageOptions([]);

            playBackgroundMusic();
            return () => {
                stopBackgroundMusic();
            };
        }, [])
    );

    const handleCountrySelect = (value: string) => {
        setSelectedCountry(value);
        setLanguageOptions(languagesByCountry[value] || []);
        setLanguageSearchText('');
    };

    const handleLanguageSelect = async (lang: string) => {
        setSelectedLanguage(lang);
        await stopBackgroundMusic();
        router.push({ pathname: '/menu', params: { language: lang } });
    };

    const closeCountryDropdown = () => {
        Keyboard.dismiss();
        setShowCountryDropdown(false);
    };

    const closeLanguageSelection = () => {
        Keyboard.dismiss();
        setSelectedCountry(null);
        setLanguageOptions([]);
    };

    const GradientText = ({ text, colors }: { text: string; colors: [string, string] }) => (
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

    const featuredCountries = ['NP', 'IN', 'CN', 'BD', 'LK', 'ES', 'FR', 'DE'];

    const filteredCountries = countrySearchText.trim() === ''
        ? countries
        : countries.filter((country) => {
            const search = countrySearchText.trim().toLowerCase();
            return (
                country.label.toLowerCase().includes(search) ||
                country.code.toLowerCase().includes(search)
            );
        });

    const filteredLanguages = languageOptions.filter((lang) =>
        lang.toLowerCase().includes(languageSearchText.trim().toLowerCase())
    );

    // Properly typed render functions for FlatList
    const renderCountryItem = ({ item }: { item: Country }) => (
        <TouchableOpacity
            key={item.code}
            onPress={() => handleCountrySelect(item.code)}
            className="bg-primary-light w-[70px] h-[90px] m-2 rounded-2xl items-center justify-center shadow-md active:scale-95"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
            }}
        >
            <Text style={{ fontSize: 36 }}>{item.emoji || '🌍'}</Text>
            <Text className="text-xs font-semibold text-center text-gray-800 mt-1">
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    const renderLanguageItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            key={item}
            onPress={() => handleLanguageSelect(item)}
            className="bg-primary-light w-[100px] h-[80px] m-2 rounded-2xl items-center justify-center shadow-md active:scale-95"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
            }}
        >
            <Text className="text-md font-semibold text-center text-gray-800">
                {item}
            </Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen.png')}
            resizeMode="stretch"
            className="flex-1"
        >
            <SafeAreaView className="flex-1 justify-between">
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

                    {/* Flags */}
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
                            {featuredCountries.slice(1, 4).map((countryCode) => (
                                <CountryFlag
                                    key={countryCode}
                                    isoCode={countryCode}
                                    size={50}
                                    style={{ borderRadius: 8 }}
                                />
                            ))}
                        </View>
                        <View className="flex-row justify-center gap-6">
                            {featuredCountries.slice(4).map((countryCode) => (
                                <CountryFlag
                                    key={countryCode}
                                    isoCode={countryCode}
                                    size={50}
                                    style={{ borderRadius: 8 }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                {!showCountryDropdown && (
                    <View className="items-center my-6">
                        <TouchableOpacity
                            onPress={() => setShowCountryDropdown(true)}
                            className="bg-lang-orange px-6 py-3 rounded-[15px] shadow"
                        >
                            <Text className="text-white text-lg font-semibold">
                                Select Your Country
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Country dropdown as Modal */}
                <Modal
                    visible={showCountryDropdown && !selectedCountry}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={closeCountryDropdown}
                >
                    <Pressable
                        onPress={closeCountryDropdown}
                        className="flex-1 justify-center items-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                        <Pressable onPress={(e) => e.stopPropagation()}>
                            <View className="bg-white rounded-2xl w-[80%] px-4 py-6 shadow-md items-center space-y-4 mx-6">
                                <Text className="text-2xl font-extrabold text-lang-blue text-center tracking-wide">
                                    🌎 Pick Your Country
                                </Text>
                                <SearchBar
                                    value={countrySearchText}
                                    onChangeText={setCountrySearchText}
                                    placeholder="Search country..."
                                />

                                <View className="h-[300px] w-full">
                                    {filteredCountries.length > 0 ? (
                                        <FlatList
                                            data={filteredCountries as Country[]}
                                            renderItem={renderCountryItem}
                                            keyExtractor={(item: Country) => item.code}
                                            numColumns={3}
                                            contentContainerStyle={{ alignItems: 'center', paddingVertical: 8 }}
                                            showsVerticalScrollIndicator={true}
                                            initialNumToRender={12}
                                            removeClippedSubviews={true}
                                            keyboardShouldPersistTaps="handled"
                                        />
                                    ) : (
                                        <View className="flex-1 justify-center items-center">
                                            <Text className="text-gray-600 text-base text-center">
                                                No countries found ❌
                                            </Text>
                                        </View>
                                    )}
                                </View>
                                <Text className="text-sm text-gray-600 text-center pt-2">
                                    Tap a country to continue 🌟
                                </Text>
                            </View>
                        </Pressable>
                    </Pressable>
                </Modal>

                {/* Language dropdown as Modal */}
                <Modal
                    visible={selectedCountry !== null && !selectedLanguage}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={closeLanguageSelection}
                >
                    <Pressable
                        onPress={closeLanguageSelection}
                        className="flex-1 justify-center items-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                        <Pressable onPress={(e) => e.stopPropagation()}>
                            <View className="bg-white rounded-2xl w-[80%] px-4 py-6 shadow-md items-center space-y-4 ">
                                <Text className="text-2xl font-extrabold text-lang-blue text-center tracking-wide">
                                    🗣️ Pick a Language
                                </Text>
                                <SearchBar
                                    value={languageSearchText}
                                    onChangeText={setLanguageSearchText}
                                    placeholder="Search language..."
                                />

                                <View className="h-[300px] w-full">
                                    {filteredLanguages.length > 0 ? (
                                        <FlatList
                                            data={filteredLanguages}
                                            renderItem={renderLanguageItem}
                                            keyExtractor={(item: string) => item}
                                            numColumns={3}
                                            contentContainerStyle={{ alignItems: 'center', paddingVertical: 8 }}
                                            showsVerticalScrollIndicator={true}
                                            keyboardShouldPersistTaps="handled"
                                        />
                                    ) : (
                                        <View className="flex-1 justify-center items-center">
                                            <Text className="text-gray-600 text-base text-center">
                                                No languages found ❌
                                            </Text>
                                        </View>
                                    )}
                                </View>
                                <Text className="text-sm text-gray-600 text-center pt-2">
                                    Tap a language to begin 📚
                                </Text>
                            </View>
                        </Pressable>
                    </Pressable>
                </Modal>
            </SafeAreaView>
        </ImageBackground>
    );
}