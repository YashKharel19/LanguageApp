import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Modal,
    Pressable,
    Keyboard,
    Image,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { useRef, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';
import FlagOnPole from '../components/FlagOnPole';
import { countries } from '../data/countries';
import { languagesByCountry } from '../data/languages';

interface Country {
    code: string;
    label: string;
    emoji?: string;
}

const supportedCountries = ['np', 'in', 'es', 'ph', 'cn', 'fr', 'bf', 'pt', 'st', 'pt', 'ir', 'kr', 'ao', 'as', 'cv', 'gq', 'gw', 'mz', 'tl'];
const supportedLanguages = [
    'Nepali', 'Tamang', 'Limbu', 'Gujrati', 'Punjabi', 'Hindi', 'Kannada', 'Spanish', 'Filipino', 'Tibetan', 'Portuguese', 'French', 'Persian', 'Korean'
];
const supportedLanguagesSet = new Set(supportedLanguages);

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

    const featuredCountries = ['np', 'in', 'ph', 'bd', 'es', 'fr'];

    const sortedCountries = [
        ...supportedCountries
            .map(code => countries.find(c => c.code === code))
            .filter(Boolean) as Country[],
        ...countries
            .filter(c => !supportedCountries.includes(c.code))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];

    const filteredCountries = countrySearchText.trim() === ''
        ? sortedCountries
        : sortedCountries.filter((country) => {
            const search = countrySearchText.trim().toLowerCase();
            return (
                country.label.toLowerCase().includes(search) ||
                country.code.toLowerCase().includes(search)
            );
        });

    const filteredLanguages = [
        ...languageOptions.filter(l => supportedLanguagesSet.has(l)),
        ...languageOptions
            .filter(l => !supportedLanguagesSet.has(l))
            .sort((a, b) => a.localeCompare(b)),
    ].filter((lang) =>
        lang.toLowerCase().includes(languageSearchText.trim().toLowerCase())
    );

    const renderCountryItem = ({ item }: { item: Country }) => {
        const isSupported = supportedCountries.includes(item.code);
        return (
            <TouchableOpacity
                onPress={() => handleCountrySelect(item.code)}
                className={`w-[70px] h-[90px] m-2 rounded-2xl items-center justify-center shadow-md active:scale-95 ${isSupported ? 'bg-[#FFA500]' : 'bg-gray-200'}`}
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
    };

    const renderLanguageItem = ({ item }: { item: string }) => {
        const isSupported = supportedLanguagesSet.has(item);
        return (
            <TouchableOpacity
                onPress={() => handleLanguageSelect(item)}
                className={`rounded-2xl m-2 items-center justify-center px-4 py-3 ${isSupported ? 'bg-[#FFA500]' : 'bg-gray-200'}`}
                style={{
                    minWidth: '28%',
                    maxWidth: '32%',
                    flexGrow: 1,
                    flexShrink: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 4,
                }}
            >
                <Text
                    className="text-center font-semibold text-gray-800"
                    style={{ fontSize: 14, flexWrap: 'wrap' }}
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/Splashscreen3.jpg')}
            resizeMode="cover"
            imageStyle={{ width: '100%', height: '100%' }}
            className="flex-1"
        >
            <SafeAreaView className="flex-1 justify-between">
                <View className="mt-4 flex-row items-center justify-center px-4">
                    {/* Left flags */}
                    <View className="flex-col items-center">
                        {featuredCountries.slice(0, 3).map((countryCode, index) =>
                            countryCode === 'np' ? (
                                <FlagOnPole key={`flag-left-${index}`} source={require('../assets/flag/nepal.png')} isImage side="left" />
                            ) : (
                                <FlagOnPole key={`flag-left-${index}`} isoCode={countryCode} side="left" />
                            )
                        )}
                    </View>

                    {/* Center gradient text */}
                    <View className="mx-6 items-center">
                        <GradientText text="Start" colors={['#0000FF', '#00FF00']} />
                        <GradientText text="Learning" colors={['#FFA500', '#FF0000']} />
                        <GradientText text="in Your" colors={['#FF0000', '#FFA500']} />
                        <GradientText text="Language" colors={['#FF0000', '#FF4D4D']} />
                    </View>

                    {/* Right flags */}
                    <View className="flex-col items-center">
                        {featuredCountries.slice(3, 6).map((countryCode, index) => (
                            <FlagOnPole key={`flag-right-${index}`} isoCode={countryCode} side="right" />
                        ))}
                    </View>
                </View>

                {!showCountryDropdown && (
                    <View className="items-center my-6">
                        <TouchableOpacity
                            onPress={() => setShowCountryDropdown(true)}
                            className="bg-lang-orange px-6 py-3 rounded-[15px] shadow"
                        >
                            <Text className="text-white text-2xl font-semibold">
                                Select Your Country
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Country Selection Modal */}
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
                                    <FlatList
                                        data={filteredCountries}
                                        renderItem={renderCountryItem}
                                        keyExtractor={(item: Country) => item.code}
                                        numColumns={3}
                                        contentContainerStyle={{ alignItems: 'center', paddingVertical: 8 }}
                                        showsVerticalScrollIndicator={true}
                                        initialNumToRender={12}
                                        removeClippedSubviews={true}
                                        keyboardShouldPersistTaps="handled"
                                    />
                                </View>
                                <Text className="text-sm text-gray-600 text-center pt-2">
                                    Tap a country to continue 🌟
                                </Text>
                            </View>
                        </Pressable>
                    </Pressable>
                </Modal>

                {/* Language Selection Modal */}
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
                            <View className="bg-white rounded-2xl w-[80%] px-4 py-6 shadow-md items-center space-y-4">
                                <Text className="text-2xl font-extrabold text-lang-blue text-center tracking-wide">
                                    🗣️ Pick a Language
                                </Text>
                                <SearchBar
                                    value={languageSearchText}
                                    onChangeText={setLanguageSearchText}
                                    placeholder="Search language..."
                                />
                                <View style={{ maxHeight: 400, width: '100%' }}>
                                    <FlatList
                                        data={filteredLanguages}
                                        renderItem={renderLanguageItem}
                                        keyExtractor={(item: string) => item}
                                        numColumns={3}
                                        columnWrapperStyle={{ justifyContent: 'center' }}
                                        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 8, paddingBottom: 12 }}
                                        showsVerticalScrollIndicator={true}
                                        keyboardShouldPersistTaps="handled"
                                    />
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
