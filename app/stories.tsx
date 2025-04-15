import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');

const letters = ['L', 'U', 'M', 'A', 'S', 'H', 'A'];
const languages = ['English', 'Spanish', 'French', 'Hindi', 'Nepali', 'Japanese'];

export default function Stories() {
  const animatedLetters = useRef(letters.map(() => new Animated.Value(0))).current;
  const balloonAnimations = useRef(languages.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    animateLetters();
    animateBalloons();
    playBackgroundMusic();
  }, []);

  const animateLetters = () => {
    animatedLetters.forEach((anim, i) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 100),
          Animated.timing(anim, {
            toValue: -12,
            duration: 400,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  };

  const animateBalloons = () => {
    balloonAnimations.forEach((anim) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: -30,
            duration: 2000,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  };

  const playBackgroundMusic = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/kidsmusic.mp3'),
        {
          shouldPlay: true,
          isLooping: true,
          volume: 0.7,
        }
      );
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to</Text>
      <View style={styles.letterRow}>
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.letter,
              {
                transform: [{ translateY: animatedLetters[index] }],
                color: getRandomColor(index),
              },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>

      <Text style={styles.subtext}>Let's play & learn new languages!</Text>

      <View style={styles.balloonsContainer}>
        {languages.map((lang, index) => (
          <Animated.View
            key={lang}
            style={{
              transform: [{ translateY: balloonAnimations[index] }],
              margin: 10,
              backgroundColor: getRandomColor(index + 3),
              borderRadius: 20,
              paddingVertical: 6,
              paddingHorizontal: 12,
              elevation: 4,
            }}
          >
            <Text style={styles.balloonText}>{lang}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

function getRandomColor(i: number) {
  const colors = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA', '#F472B6', '#FB923C'];
  return colors[i % colors.length];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E11D48',
    marginBottom: 10,
  },
  letterRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  letter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  subtext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C3AED',
    marginTop: 15,
  },
  balloonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  balloonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});