// import { useState, useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// import FlashScreen from '../components/FlashScreen';
// import HomePage from '../components/HomePage';

// export default function Index() {
//   const [loading, setLoading] = useState(true);
//   const [hasSeenFlash, setHasSeenFlash] = useState(false);

//   useEffect(() => {
//     // async function checkFlashSeen() {
//     //   try {
//     //     // const seen = await AsyncStorage.getItem('hasSeenFlashScreen');
//     //     // setHasSeenFlash(seen === 'true');
//     //   } catch (error) {
//     //     console.error('Error reading flash screen status:', error);
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // }

//     checkFlashSeen();
//   }, []);

//   const onFlashComplete = async () => {
//     try {
//       await AsyncStorage.setItem('hasSeenFlashScreen', true);
//       setHasSeenFlash(true);
//     } catch (error) {
//       console.error('Error saving flash screen status:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   // If user hasn't seen FlashScreen yet, show it
//   if (!hasSeenFlash) {
//     return <FlashScreen onComplete={onFlashComplete} />;
//   }

//   // Otherwise show the HomePage
//   return <HomePage />;
// }
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