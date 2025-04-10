// app/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lumalingo App</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/flashcards')}>
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 18 },
});
