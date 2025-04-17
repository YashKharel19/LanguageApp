import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
    const router = useRouter();

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
                    <View className="flex-row justify-center gap-4">
                        <GradientText text="Your" colors={['#00BFFF', '#1E90FF']} />
                        <GradientText text="Language" colors={['#FF0000', '#FF4D4D']} />
                    </View>
                </View>

                {/* Bottom Button */}
                <View className="items-center space-y-4">
                    <TouchableOpacity
                        onPress={() => router.push('/flashcards')}
                        className="bg-lang-orange px-6 py-3 rounded-[15px] shadow"
                    >
                        <Text className="text-white text-lg font-semibold">
                            Select Your Country
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
