// app/index.tsx
import { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const balloon1 = useRef(new Animated.Value(0)).current;
  const balloon2 = useRef(new Animated.Value(0)).current;
  const dinoDance = useRef(new Animated.Value(0)).current;
  const titleBounce = useRef(new Animated.Value(0)).current;

  const sound = useRef<Audio.Sound | null>(null);

  // Load and play background music
  // useEffect(() => {
  //   const playMusic = async () => {
  //     const { sound: loadedSound } = await Audio.Sound.createAsync(
  //       require('../assets/sounds/kidsmusic2.mp3'), // Make sure you have this file
  //       { shouldPlay: true, isLooping: true }
  //     );
  //     sound.current = loadedSound;
  //     await loadedSound.playAsync();
  //   };

   // playMusic();

   // return () => {
   //   sound.current?.unloadAsync();
 //   };
 // }, []);

  // Animations start
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setShowIntro(false);
      animateBalloon(balloon1, 0);
      animateBalloon(balloon2, 500);
      animateDino();
      bounceTitle();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const animateBalloon = (balloon: Animated.Value, delay: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(balloon, {
          toValue: -30,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(balloon, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const animateDino = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dinoDance, {
          toValue: -10,
          duration: 400,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(dinoDance, {
          toValue: 10,
          duration: 400,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const bounceTitle = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(titleBounce, {
          toValue: -10,
          duration: 500,
          easing: Easing.elastic(2),
          useNativeDriver: true,
        }),
        Animated.timing(titleBounce, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(2),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  if (showIntro) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome to Lumasha</Text>
        <Text style={styles.subtitle}>Learn languages through play and stories</Text>
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.balloon, { left: 50, transform: [{ translateY: balloon1 }] }]}>
        🎈
      </Animated.Text>
      <Animated.Text style={[styles.balloon, { right: 50, transform: [{ translateY: balloon2 }] }]}>
        🎈
      </Animated.Text>

      <Animated.Text style={[styles.dino, { transform: [{ translateY: dinoDance }] }]}>
        🦕
      </Animated.Text>

      <Animated.Text style={[styles.mainTitle, { transform: [{ translateY: titleBounce }] }]}>
        Explore Lumasha
      </Animated.Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#7C3AED' }]}
        onPress={() => router.push('/stories')}
      >
        <Text style={styles.buttonText}>📖 Story Mode</Text>s
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#EC4899' }]}
        onPress={() => router.push('/flashcards')}
      >
        <Text style={styles.buttonText}>▶️ Play & Learn</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Designed for curious kids and lifelong learners 🌍✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7C3AED',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#4B5563',
    marginTop: 10,
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B21A8',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 30,
    textAlign: 'center',
  },
  balloon: {
    position: 'absolute',
    top: 80,
    fontSize: 40,
    zIndex: 1,
  },
  dino: {
    fontSize: 100,
    marginVertical: 10,
  },
});
