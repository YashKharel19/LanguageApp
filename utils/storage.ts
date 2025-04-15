// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_KEY = 'FLASHCARDS_DATA';

export const saveFlashcards = async (cards: { question: string; answer: string }[]) => {
  try {
    const json = JSON.stringify(cards);
    await AsyncStorage.setItem(FLASHCARDS_KEY, json);
  } catch (e) {
    console.error('Saving failed', e);
  }
};

export const loadFlashcards = async () => {
  try {
    const json = await AsyncStorage.getItem(FLASHCARDS_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Loading failed', e);
    return [];
  }
};
