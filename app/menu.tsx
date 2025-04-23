// app/menu.tsx
import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import MenuPage from '../components/MenuPage';

export default function MenuScreen() {
    const { language } = useLocalSearchParams();

    return (
        <View className="flex-1">
            <MenuPage language={language as string} />
        </View>
    );
}
