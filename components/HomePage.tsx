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

// Define types for clarity
interface Country {
    code: string;
    label: string;
    emoji?: string;
}

type SupportedCountryCode = 'np' | 'in' | 'es' | 'fr' | 'ph';
type SupportedLanguage =
    | 'Nepali'
    | 'Tamang'
    | 'Limbu'
    | 'Gujrati'
    | 'Punjabi'
    | 'Hindi'
    | 'Spanish'
    | 'French'
    | 'Filipino';

// Sets for supported countries and languages
const supportedCountriesSet = new Set<SupportedCountryCode>(['np', 'in', 'es', 'fr', 'ph']);
const supportedLanguagesSet = new Set<SupportedLanguage>([
    'Nepali',
    'Tamang',
    'Limbu',
    'Gujrati',
    'Punjabi',
    'Hindi',
    'Spanish',
    'French',
    'Filipino',
]);

const languageColors: Record<SupportedLanguage, string> = {
    Nepali: 'orange',
    Tamang: 'orange',
    Limbu: 'orange',
    Spanish: 'orange',
    Gujrati: 'orange',
    Punjabi: 'orange',
    Hindi: 'orange',
    French: 'orange',
    Filipino: 'orange',
};

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

    // Sort countries: supported first (in given order), then rest alphabetically
    const sortedCountries = [
        ...countries.filter((c) => supportedCountriesSet.has(c.code as SupportedCountryCode)),
        ...countries
            .filter((c) => !supportedCountriesSet.has(c.code as SupportedCountryCode))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];

    // Filter countries by search input
    const filteredCountries = countrySearchText.trim() === ''
        ? sortedCountries
        : sortedCountries.filter((country) => {
            const search = countrySearchText.trim().toLowerCase();
            return (
                country.label.toLowerCase().includes(search) ||
                country.code.toLowerCase().includes(search)
            );
        });

    // Sort languages: supported first (in given order), then rest alphabetically
    const sortedLanguages = [
        ...languageOptions.filter((lang) => supportedLanguagesSet.has(lang as SupportedLanguage)),
        ...languageOptions
            .filter((lang) => !supportedLanguagesSet.has(lang as SupportedLanguage))
            .sort((a, b) => a.localeCompare(b)),
    ];

    // Filter languages by search input
    const filteredLanguages = languageSearchText.trim() === ''
        ? sortedLanguages
        : sortedLanguages.filter((lang) =>
            lang.toLowerCase().includes(languageSearchText.trim().toLowerCase())
        );

    // Helper: highlight active countries orange, else gray
    const getCountryBgColor = (code: string) =>
        supportedCountriesSet.has(code as SupportedCountryCode) ? '#FFA500' : '#d1d5db'; // orange or gray-300

    // Helper: highlight active languages orange, else gray
    const getLanguageBgColor = (lang: string) =>
        supportedLanguagesSet.has(lang as SupportedLanguage) ? '#FFA500' : '#d1d5db'; // orange or gray-300

    // Render country with emoji & label
    const renderCountryItem = ({ item }: { item: Country }) => (
        <TouchableOpacity
            key={item.code}
            onPress={() => handleCountrySelect(item.code)}
            className="w-[80px] h-[100px] m-2 rounded-3xl items-center justify-center shadow-lg active:scale-95"
            style={{
                backgroundColor: getCountryBgColor(item.code),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 6,
            }}
        >
            <Text style={{ fontSize: 44 }}>{item.emoji || '🌍'}</Text>
            <Text className="text-sm font-extrabold text-center text-gray-900 mt-1">
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    // Render language with color & emoji
    const renderLanguageItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            key={item}
            onPress={() => handleLanguageSelect(item)}
            className="w-[120px] h-[90px] m-2 rounded-3xl items-center justify-center shadow-lg active:scale-95"
            style={{
                backgroundColor: getLanguageBgColor(item),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 6,
            }}
        >
            <Text className="text-xl font-extrabold text-center text-gray-900 mb-1">{item}</Text>
            <Text style={{ fontSize: 28 }}>
                {item === 'Nepali' || item === 'Tamang' || item === 'Limbu'
                    ? '🇳🇵'
                    : item === 'Spanish'
                        ? '🇪🇸'
                        : item === 'French'
                            ? '🇫🇷'
                            : item === 'Filipino'
                                ? '🇵🇭'
                                : '🗣️'}
            </Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen3.jpg')}
            resizeMode="cover"
            imageStyle={{ width: '100%', height: '100%' }}
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

                    {/* Flags: show supported countries only here */}
                    <View className="items-center mt-4">
                        <View className="flex-row gap-6 mb-3">
                            <Image
                                source={require('../assets/flag/nepal.png')}
                                style={{
                                    width: 80,
                                    height: 70,
                                    resizeMode: 'contain',
                                }}
                            />
                            {(['in', 'es', 'fr'] as SupportedCountryCode[]).map((countryCode) => (
                                <CountryFlag
                                    key={countryCode}
                                    isoCode={countryCode}
                                    size={60}
                                    style={{ borderRadius: 10 }}
                                />
                            ))}
                        </View>
                        <View className="flex-row justify-center gap-6">
                            <CountryFlag
                                isoCode="PH"
                                size={60}
                                style={{ borderRadius: 10 }}
                            />
                        </View>
                    </View>
                </View>

                {!showCountryDropdown && (
                    <View className="items-center my-6">
                        <TouchableOpacity
                            onPress={() => setShowCountryDropdown(true)}
                            className="bg-lang-orange px-8 py-4 rounded-[20px] shadow-lg"
                            style={{ backgroundColor: '#FFA500' }}
                        >
                            <Text className="text-white text-xl font-extrabold">
                                Select Your Country
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Country dropdown modal */}
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
                            <View className="bg-white rounded-3xl w-[85%] px-6 py-8 shadow-lg items-center space-y-6 mx-6">
                                <Text className="text-3xl font-extrabold text-lang-blue text-center tracking-wide">
                                    🌎 Pick Your Country
                                </Text>
                                <SearchBar
                                    value={countrySearchText}
                                    onChangeText={setCountrySearchText}
                                    placeholder="Search country..."
                                />

                                <View className="h-[320px] w-full">
                                    {filteredCountries.length > 0 ? (
                                        <FlatList
                                            data={filteredCountries as Country[]}
                                            renderItem={renderCountryItem}
                                            keyExtractor={(item: Country) => item.code}
                                            numColumns={3}
                                            contentContainerStyle={{
                                                alignItems: 'center',
                                                paddingVertical: 12,
                                            }}
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

                {/* Language dropdown modal */}
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
                            <View className="bg-white rounded-3xl w-[85%] px-6 py-8 shadow-lg items-center space-y-6 ">
                                <Text className="text-3xl font-extrabold text-lang-blue text-center tracking-wide">
                                    🗣️ Pick a Language
                                </Text>
                                <SearchBar
                                    value={languageSearchText}
                                    onChangeText={setLanguageSearchText}
                                    placeholder="Search language..."
                                />

                                <View className="h-[320px] w-full">
                                    {filteredLanguages.length > 0 ? (
                                        <FlatList
                                            data={filteredLanguages}
                                            renderItem={renderLanguageItem}
                                            keyExtractor={(item: string) => item}
                                            numColumns={3}
                                            contentContainerStyle={{
                                                alignItems: 'center',
                                                paddingVertical: 12,
                                            }}
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
                                    Tap a language to continue 🌟
                                </Text>
                            </View>
                        </Pressable>
                    </Pressable>
                </Modal>
            </SafeAreaView>
        </ImageBackground>
    );
}
