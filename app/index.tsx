// app/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-5">Welcome to Lumalingo App</Text>
      <TouchableOpacity
        className="bg-purple-700 px-6 py-4 rounded-lg"
        onPress={() => router.push('/flashcards')}
      >
        <Text className="text-white text-lg">Start Learning</Text>
      </TouchableOpacity>
    </View>
  );
}

