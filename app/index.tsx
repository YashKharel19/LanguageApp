// app/index.tsx
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import FlashScreen from '../components/FlashScreen';
import HomePage from '../components/HomePage';

export default function Index() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    async function checkFlashSeen() {
      const seen = await AsyncStorage.getItem('hasSeenFlashScreen');
      setShowFlash(seen !== 'true'); // show flash screen if not seen
    }
    checkFlashSeen();
  }, []);

  if (showFlash === null) {
    return null; // or a loader while checking storage
  }

  const onComplete = async () => {
    await AsyncStorage.setItem('hasSeenFlashScreen', 'true');
    setShowFlash(false);
  };

  if (showFlash) {
    return <FlashScreen onComplete={onComplete} />;
  }

  return <HomePage />;
}
