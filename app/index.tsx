// app/index.tsx
import { useState } from 'react';
import FlashScreen from '../components/FlashScreen';
import HomePage from '../components/HomePage';

export default function Index() {
  const [showFlash, setShowFlash] = useState(true);

  if (showFlash) {
    return <FlashScreen onComplete={() => setShowFlash(false)} />;
  }

  return <HomePage />;
}
