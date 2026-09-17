// containers/flashcards.ts
// import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';

export type FlashCardType = {
    letter: string;
    letterPronunciation: string;
    word: string;
    pronunciation: string;
    image: ImageSourcePropType;
    translation: string;
    audioLetter?: any;
    audioWord?: any;
};
