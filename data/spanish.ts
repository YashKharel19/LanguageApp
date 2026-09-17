// 📦 Image Imports (renamed to English translations)
import friend from "../assets/images/Friend.png";
import boat from "../assets/images/Ship.png";
import house from "../assets/images/nepali/Ghara.png";
import tooth from "../assets/images/Tooth.png";
import school from "../assets/images/School.png";
import flower from "../assets/images/nepali/Fhul.png";
import cat from "../assets/images/Cat.png";
import hand from "../assets/images/Hand.png";
import icecream from "../assets/images/Icecream.png";
import picture from "../assets/images/Picture.png";
import giraffe from "../assets/images/Girrafe.png";
import kiwi from "../assets/images/Kiwi.png";
import book from "../assets/images/nepali/Gyan.png";
import baby from "../assets/images/nepali/Bachha.png";
import nest from "../assets/images/Nest.png";
import bear from "../assets/images/nepali/Bhalu.png";
import dog from "../assets/images/Dog.png";
import cheese from "../assets/images/Cheese.png";
import mouse from "../assets/images/Mouse.png";
import wise from "../assets/images/Wise.png";
import earth from "../assets/images/Earth.png";
import grapes from "../assets/images/Grapes.png";
import cow from "../assets/images/Cow.png";
import waffle from "../assets/images/Waffle.png";
import xylophone from "../assets/images/Xylophone.png";
import yatch from "../assets/images/Ferry.png";
import shoes from "../assets/images/Shoes.png";

import Zero from "../assets/images/What.png"
import One from "../assets/images/numbers/1.png";
import Two from "../assets/images/numbers/2.png";
import Three from "../assets/images/numbers/3.png";
import Four from "../assets/images/numbers/4.png";
import Five from "../assets/images/numbers/5.png";
import Six from "../assets/images/numbers/6.png";
import Seven from "../assets/images/numbers/7.png";
import Eight from "../assets/images/numbers/8.png";
import Nine from "../assets/images/numbers/9.png";

// Letter Audio Imports
import letter1 from "../assets/sounds/spanish/letter1.mp3";
import letter2 from "../assets/sounds/spanish/letter2.mp3";
import letter3 from "../assets/sounds/spanish/letter3.mp3";
import letter4 from "../assets/sounds/spanish/letter4.mp3";
import letter5 from "../assets/sounds/spanish/letter5.mp3";
import letter6 from "../assets/sounds/spanish/letter6.mp3";
import letter7 from "../assets/sounds/spanish/letter7.mp3";
import letter8 from "../assets/sounds/spanish/letter8.mp3";
import letter9 from "../assets/sounds/spanish/letter9.mp3";
import letter10 from "../assets/sounds/spanish/letter10.mp3";
import letter11 from "../assets/sounds/spanish/letter11.mp3";
import letter12 from "../assets/sounds/spanish/letter12.mp3";
import letter13 from "../assets/sounds/spanish/letter13.mp3";
import letter14 from "../assets/sounds/spanish/letter14.mp3";
import letter15 from "../assets/sounds/spanish/letter15.mp3";
import letter16 from "../assets/sounds/spanish/letter16.mp3";
import letter17 from "../assets/sounds/spanish/letter17.mp3";
import letter18 from "../assets/sounds/spanish/letter18.mp3";
import letter19 from "../assets/sounds/spanish/letter19.mp3";
import letter20 from "../assets/sounds/spanish/letter20.mp3";
import letter21 from "../assets/sounds/spanish/letter21.mp3";
import letter22 from "../assets/sounds/spanish/letter22.mp3";
import letter23 from "../assets/sounds/spanish/letter23.mp3";
import letter24 from "../assets/sounds/spanish/letter24.mp3";
import letter25 from "../assets/sounds/spanish/letter25.mp3";
import letter26 from "../assets/sounds/spanish/letter26.mp3";
import letter27 from "../assets/sounds/spanish/letter27.mp3";

// Word Audio Imports
import Word1 from "../assets/sounds/spanish/word1.mp3";
import Word2 from "../assets/sounds/spanish/word2.mp3";
import Word3 from "../assets/sounds/spanish/word3.mp3";
import Word4 from "../assets/sounds/spanish/word4.mp3";
import Word5 from "../assets/sounds/spanish/word5.mp3";
import Word6 from "../assets/sounds/spanish/word6.mp3";
import Word7 from "../assets/sounds/spanish/word7.mp3";
import Word8 from "../assets/sounds/spanish/word8.mp3";
import Word9 from "../assets/sounds/spanish/word9.mp3";
import Word10 from "../assets/sounds/spanish/word10.mp3";
import Word11 from "../assets/sounds/spanish/word11.mp3";
import Word12 from "../assets/sounds/spanish/word12.mp3";
import Word13 from "../assets/sounds/spanish/word13.mp3";
import Word14 from "../assets/sounds/spanish/word14.mp3";
import Word15 from "../assets/sounds/spanish/word15.mp3";
import Word16 from "../assets/sounds/spanish/word16.mp3";
import Word17 from "../assets/sounds/spanish/word17.mp3";
import Word18 from "../assets/sounds/spanish/word18.mp3";
import Word19 from "../assets/sounds/spanish/word19.mp3";
import Word20 from "../assets/sounds/spanish/word20.mp3";
import Word21 from "../assets/sounds/spanish/word21.mp3";
import Word22 from "../assets/sounds/spanish/word22.mp3";
import Word23 from "../assets/sounds/spanish/word23.mp3";
import Word24 from "../assets/sounds/spanish/word24.mp3";
import Word25 from "../assets/sounds/spanish/word25.mp3";
import Word26 from "../assets/sounds/spanish/word26.mp3";
import Word27 from "../assets/sounds/spanish/word27.mp3";

// Number Audio Imports
import num0 from "../assets/sounds/spanish/zero.mp3";
import num1 from "../assets/sounds/spanish/one.mp3";
import num2 from "../assets/sounds/spanish/two.mp3";
import num3 from "../assets/sounds/spanish/three.mp3";
import num4 from "../assets/sounds/spanish/four.mp3";
import num5 from "../assets/sounds/spanish/five.mp3";
import num6 from "../assets/sounds/spanish/six.mp3";
import num7 from "../assets/sounds/spanish/seven.mp3";
import num8 from "../assets/sounds/spanish/eight.mp3";
import num9 from "../assets/sounds/spanish/nine.mp3";


import { FlashCardType } from "../containers/flashCardTypes";

// 🧠 Flashcard Array
export const consonantCards: FlashCardType[] = [
    { letter: 'A', pronunciation: 'ah-MEE-goh', letterPronunciation: 'a', word: 'Amigo', translation: 'Friend', image: friend, audioLetter: letter1, audioWord: Word1 },
    { letter: 'B', pronunciation: 'BAR-koh', letterPronunciation: 'be', word: 'Barco', translation: 'Boat', image: boat, audioLetter: letter2, audioWord: Word2 },
    { letter: 'C', pronunciation: 'KAH-sah', letterPronunciation: 'se', word: 'Casa', translation: 'House', image: house, audioLetter: letter3, audioWord: Word3 },
    { letter: 'D', pronunciation: 'DYEN-teh', letterPronunciation: 'de', word: 'Diente', translation: 'Tooth', image: tooth, audioLetter: letter4, audioWord: Word4 },
    { letter: 'E', pronunciation: 'es-KWEH-lah', letterPronunciation: 'e', word: 'Escuela', translation: 'School', image: school, audioLetter: letter5, audioWord: Word5 },
    { letter: 'F', pronunciation: 'flor', letterPronunciation: 'efe', word: 'Flor', translation: 'Flower', image: flower, audioLetter: letter6, audioWord: Word6 },
    { letter: 'G', pronunciation: 'GAH-toh', letterPronunciation: 'ge', word: 'Gato', translation: 'Cat', image: cat, audioLetter: letter7, audioWord: Word7 },
    { letter: 'H', pronunciation: 'eh-LAH-doh', letterPronunciation: 'hache', word: 'Helado', translation: 'Ice cream', image: icecream, audioLetter: letter8, audioWord: Word8 },
    { letter: 'I', pronunciation: 'ee-MAH-hen', letterPronunciation: 'i', word: 'Imagen', translation: 'Picture', image: picture, audioLetter: letter9, audioWord: Word9 },
    { letter: 'J', pronunciation: 'hee-RAH-fah', letterPronunciation: 'jota', word: 'Jirafa', translation: 'Giraffe', image: giraffe, audioLetter: letter10, audioWord: Word10 },
    { letter: 'K', pronunciation: 'KEE-wee', letterPronunciation: 'ka', word: 'Kiwi', translation: 'Kiwi', image: kiwi, audioLetter: letter11, audioWord: Word11 },
    { letter: 'L', pronunciation: 'LEE-broh', letterPronunciation: 'ele', word: 'Libro', translation: 'Book', image: book, audioLetter: letter12, audioWord: Word12 },
    { letter: 'M', pronunciation: 'MAH-noh', letterPronunciation: 'eme', word: 'Mano', translation: 'Hand', image: hand, audioLetter: letter13, audioWord: Word13 },
    { letter: 'N', pronunciation: 'NEE-doh', letterPronunciation: 'ene', word: 'Nido', translation: 'Nest', image: nest, audioLetter: letter14, audioWord: Word14 },
    { letter: 'Ñ', pronunciation: 'NEE-nyoh', letterPronunciation: 'eñe', word: 'Niño', translation: 'Child', image: baby, audioLetter: letter15, audioWord: Word15 },
    { letter: 'O', pronunciation: 'OH-soh', letterPronunciation: 'o', word: 'Oso', translation: 'Bear', image: bear, audioLetter: letter16, audioWord: Word16 },
    { letter: 'P', pronunciation: 'PEH-rroh', letterPronunciation: 'pe', word: 'Perro', translation: 'Dog', image: dog, audioLetter: letter17, audioWord: Word17 },
    { letter: 'Q', pronunciation: 'KEH-soh', letterPronunciation: 'cu', word: 'Queso', translation: 'Cheese', image: cheese, audioLetter: letter18, audioWord: Word18 },
    { letter: 'R', pronunciation: 'rah-TOHN', letterPronunciation: 'ere', word: 'Ratón', translation: 'Mouse', image: mouse, audioLetter: letter19, audioWord: Word19 },
    { letter: 'S', pronunciation: 'SAH-byoh', letterPronunciation: 'ese', word: 'Sabio', translation: 'Wise', image: wise, audioLetter: letter20, audioWord: Word20 },
    { letter: 'T', pronunciation: 'TYEHR-rah', letterPronunciation: 'te', word: 'Tierra', translation: 'Earth', image: earth, audioLetter: letter21, audioWord: Word21 },
    { letter: 'U', pronunciation: 'OO-vah', letterPronunciation: 'u', word: 'Uva', translation: 'Grape', image: grapes, audioLetter: letter22, audioWord: Word22 },
    { letter: 'V', pronunciation: 'BAH-kah', letterPronunciation: 'uve', word: 'Vaca', translation: 'Cow', image: cow, audioLetter: letter23, audioWord: Word23 },
    { letter: 'W', pronunciation: 'WAF-leh', letterPronunciation: 'uve doble', word: 'Wafle', translation: 'Waffle', image: waffle, audioLetter: letter24, audioWord: Word24 },
    { letter: 'X', pronunciation: 'ksee-LOH-foh-noh', letterPronunciation: 'equis', word: 'Xilófono', translation: 'Xylophone', image: xylophone, audioLetter: letter25, audioWord: Word25 },
    { letter: 'Y', pronunciation: 'YAH-teh', letterPronunciation: 'i griega', word: 'Yate', translation: 'Yacht', image: yatch, audioLetter: letter26, audioWord: Word26 },
    { letter: 'Z', pronunciation: 'sah-PAH-toh', letterPronunciation: 'zeta', word: 'Zapato', translation: 'Shoes', image: shoes, audioLetter: letter27, audioWord: Word27 },
];


export const numberCards: FlashCardType[] = [
    { letter: "0", word: "cero", letterPronunciation: "SEH-ro", pronunciation: "SEH-ro", image: Zero, translation: "Zero", audioLetter: num0, audioWord: num0 },
    { letter: "1", word: "uno", letterPronunciation: "OO-no", pronunciation: "OO-no", image: One, translation: "One", audioLetter: num1, audioWord: num1 },
    { letter: "2", word: "dos", letterPronunciation: "dos", pronunciation: "dos", image: Two, translation: "Two", audioLetter: num2, audioWord: num2 },
    { letter: "3", word: "tres", letterPronunciation: "tres", pronunciation: "tres", image: Three, translation: "Three", audioLetter: num3, audioWord: num3 },
    { letter: "4", word: "cuatro", letterPronunciation: "KWA-tro", pronunciation: "KWA-tro", image: Four, translation: "Four", audioLetter: num4, audioWord: num4 },
    { letter: "5", word: "cinco", letterPronunciation: "SEEN-ko", pronunciation: "SEEN-ko", image: Five, translation: "Five", audioLetter: num5, audioWord: num5 },
    { letter: "6", word: "seis", letterPronunciation: "says", pronunciation: "says", image: Six, translation: "Six", audioLetter: num6, audioWord: num6 },
    { letter: "7", word: "siete", letterPronunciation: "SYE-te", pronunciation: "SYE-te", image: Seven, translation: "Seven", audioLetter: num7, audioWord: num7 },
    { letter: "8", word: "ocho", letterPronunciation: "OH-cho", pronunciation: "OH-cho", image: Eight, translation: "Eight", audioLetter: num8, audioWord: num8 },
    { letter: "9", word: "nueve", letterPronunciation: "NWE-ve", pronunciation: "NWE-ve", image: Nine, translation: "Nine", audioLetter: num9, audioWord: num9 },
];
