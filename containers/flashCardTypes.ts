// containers/flashcards.ts
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export type FlashCardType = {
    letter: string;
    word: string;
    pronunciation: string;
    image: FC<SvgProps>;
    translation: string;
};
