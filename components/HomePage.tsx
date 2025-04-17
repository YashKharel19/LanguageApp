import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

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
            resizeMode="cover"
            className="flex-1 justify-center items-center px-6"
        >
            <View className="items-center  text-4xl mb-12 space-y-2">
                <GradientText text="Start" colors={['#00FF00', '#0000FF']} />
                <GradientText text="Learning" colors={['#FFA500', '#FF0000']} />
                <GradientText text="in" colors={['#FF0000', '#FF4D4D']} />
                <GradientText text="Your" colors={['#00BFFF', '#1E90FF']} />
                <GradientText text="Language" colors={['#FF0000', '#FF4D4D']} />
            </View>

            <TouchableOpacity
                onPress={() => router.push('/flashcards')}
                className="bg-lang-orange px-6 py-3 rounded-[15px] shadow"
            >
                <Text className="text-white text-lg font-semibold">Select Your Country</Text>
            </TouchableOpacity>


        </ImageBackground>
    );
}
