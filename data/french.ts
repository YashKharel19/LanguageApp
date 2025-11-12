import Airplane from "../assets/images/Airplane.png";
import Banana from "../assets/images/Banana.png";
import Cat from "../assets/images/Cat.png";
import Turkey from "../assets/images/Turkey.png";
import Elephant from "../assets/images/Elephant.png";
import Flower from "../assets/images/nepali/Fhul.png";
import Cake from "../assets/images/Cake.png";
import Helicopter from "../assets/images/Helicopter.png";
import Igloo from "../assets/images/Igloo.png";
import Skirt from "../assets/images/kannada/Langa.png";
import Kiwi from "../assets/images/Kiwifruit.png";
import Lion from "../assets/images/Lion.png";
import House from "../assets/images/nepali/Ghara.png";
import Snow from "../assets/images/Snow.png";
import Orange from "../assets/images/Orange.png";
import Apple from "../assets/images/Apple.png";
import Four from "../assets/images/Four.png";
import Rose from "../assets/images/Rose.png";
import Sun from "../assets/images/Sun.png";
import Tiger from "../assets/images/Tiger.png";
import Uniform from "../assets/images/Uniform.png";
import Car from "../assets/images/Car.png";
import Wagon from "../assets/images/Wagon.png";
import Xylophone from "../assets/images/Xylophone.png";
import Yogurt from "../assets/images/Yogurt.png";
import Zebra from "../assets/images/Zebra.png";

import Zero from "../assets/images/What.png"
import One from "../assets/images/numbers/1.png";
import Two from "../assets/images/numbers/2.png";
import Three from "../assets/images/numbers/3.png";
import FourNumber from "../assets/images/numbers/4.png";
import Five from "../assets/images/numbers/5.png";
import Six from "../assets/images/numbers/6.png";
import Seven from "../assets/images/numbers/7.png";
import Eight from "../assets/images/numbers/8.png";
import Nine from "../assets/images/numbers/9.png";

// 🔤 French letter audio (letter1 → letter26)
import letter1 from "../assets/sounds/french/letter1.mp3";
import letter2 from "../assets/sounds/french/letter2.mp3";
import letter3 from "../assets/sounds/french/letter3.mp3";
import letter4 from "../assets/sounds/french/letter4.mp3";
import letter5 from "../assets/sounds/french/letter5.mp3";
import letter6 from "../assets/sounds/french/letter6.mp3";
import letter7 from "../assets/sounds/french/letter7.mp3";
import letter8 from "../assets/sounds/french/letter8.mp3";
import letter9 from "../assets/sounds/french/letter9.mp3";
import letter10 from "../assets/sounds/french/letter10.mp3";
import letter11 from "../assets/sounds/french/letter11.mp3";
import letter12 from "../assets/sounds/french/letter12.mp3";
import letter13 from "../assets/sounds/french/letter13.mp3";
import letter14 from "../assets/sounds/french/letter14.mp3";
import letter15 from "../assets/sounds/french/letter15.mp3";
import letter16 from "../assets/sounds/french/letter16.mp3";
import letter17 from "../assets/sounds/french/letter17.mp3";
import letter18 from "../assets/sounds/french/letter18.mp3";
import letter19 from "../assets/sounds/french/letter19.mp3";
import letter20 from "../assets/sounds/french/letter20.mp3";
import letter21 from "../assets/sounds/french/letter21.mp3";
import letter22 from "../assets/sounds/french/letter22.mp3";
import letter23 from "../assets/sounds/french/letter23.mp3";
import letter24 from "../assets/sounds/french/letter24.mp3";
import letter25 from "../assets/sounds/french/letter25.mp3";
import letter26 from "../assets/sounds/french/letter26.mp3";

// 🔤 French word audio (word1 → word26)
import word1 from "../assets/sounds/french/word1.mp3";
import word2 from "../assets/sounds/french/word2.mp3";
import word3 from "../assets/sounds/french/word3.mp3";
import word4 from "../assets/sounds/french/word4.mp3";
import word5 from "../assets/sounds/french/word5.mp3";
import word6 from "../assets/sounds/french/word6.mp3";
import word7 from "../assets/sounds/french/word7.mp3";
import word8 from "../assets/sounds/french/word8.mp3";
import word9 from "../assets/sounds/french/word9.mp3";
import word10 from "../assets/sounds/french/word10.mp3";
import word11 from "../assets/sounds/french/word11.mp3";
import word12 from "../assets/sounds/french/word12.mp3";
import word13 from "../assets/sounds/french/word13.mp3";
import word14 from "../assets/sounds/french/word14.mp3";
import word15 from "../assets/sounds/french/word15.mp3";
import word16 from "../assets/sounds/french/word16.mp3";
import word17 from "../assets/sounds/french/word17.mp3";
import word18 from "../assets/sounds/french/word18.mp3";
import word19 from "../assets/sounds/french/word19.mp3";
import word20 from "../assets/sounds/french/word20.mp3";
import word21 from "../assets/sounds/french/word21.mp3";
import word22 from "../assets/sounds/french/word22.mp3";
import word23 from "../assets/sounds/french/word23.mp3";
import word24 from "../assets/sounds/french/word24.mp3";
import word25 from "../assets/sounds/french/word25.mp3";
import word26 from "../assets/sounds/french/word26.mp3";

// 🔢 French number audio (zéro → neuf)
import num0 from "../assets/sounds/french/zero.mp3";
import num1 from "../assets/sounds/french/one.mp3";
import num2 from "../assets/sounds/french/two.mp3";
import num3 from "../assets/sounds/french/three.mp3";
import num4 from "../assets/sounds/french/four.mp3";
import num5 from "../assets/sounds/french/five.mp3";
import num6 from "../assets/sounds/french/six.mp3";
import num7 from "../assets/sounds/french/seven.mp3";
import num8 from "../assets/sounds/french/eight.mp3";
import num9 from "../assets/sounds/french/nine.mp3";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "A", word: "Avion", letterPronunciation: "ah", pronunciation: "ah-vyohn", image: Airplane, translation: "Airplane", audioLetter: letter1, audioWord: word1 },
    { letter: "B", word: "Banane", letterPronunciation: "bay", pronunciation: "bah-nahn", image: Banana, translation: "Banana", audioLetter: letter2, audioWord: word2 },
    { letter: "C", word: "Chat", letterPronunciation: "say", pronunciation: "sha", image: Cat, translation: "Cat", audioLetter: letter3, audioWord: word3 },
    { letter: "D", word: "Dinde", letterPronunciation: "day", pronunciation: "dahnd", image: Turkey, translation: "Turkey", audioLetter: letter4, audioWord: word4 },
    { letter: "E", word: "Éléphant", letterPronunciation: "uh", pronunciation: "ay-lay-fahn", image: Elephant, translation: "Elephant", audioLetter: letter5, audioWord: word5 },
    { letter: "F", word: "Fleur", letterPronunciation: "eff", pronunciation: "flur", image: Flower, translation: "Flower", audioLetter: letter6, audioWord: word6 },
    { letter: "G", word: "Gâteau", letterPronunciation: "zhay", pronunciation: "gah-toh", image: Cake, translation: "Cake", audioLetter: letter7, audioWord: word7 },
    { letter: "H", word: "Hélicoptère", letterPronunciation: "ash", pronunciation: "ay-lee-kop-tair", image: Helicopter, translation: "Helicopter", audioLetter: letter8, audioWord: word8 },
    { letter: "I", word: "Igloo", letterPronunciation: "ee", pronunciation: "ee-gloo", image: Igloo, translation: "Igloo", audioLetter: letter9, audioWord: word9 },
    { letter: "J", word: "Jupe", letterPronunciation: "zhee", pronunciation: "zhup", image: Skirt, translation: "Skirt", audioLetter: letter10, audioWord: word10 },
    { letter: "K", word: "Kiwi", letterPronunciation: "kah", pronunciation: "kee-wee", image: Kiwi, translation: "Kiwi", audioLetter: letter11, audioWord: word11 },
    { letter: "L", word: "Lion", letterPronunciation: "ell", pronunciation: "lee-ohn", image: Lion, translation: "Lion", audioLetter: letter12, audioWord: word12 },
    { letter: "M", word: "Maison", letterPronunciation: "em", pronunciation: "meh-zohn", image: House, translation: "House", audioLetter: letter13, audioWord: word13 },
    { letter: "N", word: "Neige", letterPronunciation: "en", pronunciation: "nehzh", image: Snow, translation: "Snow", audioLetter: letter14, audioWord: word14 },
    { letter: "O", word: "Orange", letterPronunciation: "oh", pronunciation: "oh-rah(n)zh", image: Orange, translation: "Orange", audioLetter: letter15, audioWord: word15 },
    { letter: "P", word: "Pomme", letterPronunciation: "pay", pronunciation: "pohm", image: Apple, translation: "Apple", audioLetter: letter16, audioWord: word16 },
    { letter: "Q", word: "Quatre", letterPronunciation: "kyoo", pronunciation: "kah-truh", image: Four, translation: "Four", audioLetter: letter17, audioWord: word17 },
    { letter: "R", word: "Rose", letterPronunciation: "air", pronunciation: "rohz", image: Rose, translation: "Rose", audioLetter: letter18, audioWord: word18 },
    { letter: "S", word: "Soleil", letterPronunciation: "ess", pronunciation: "soh-lay", image: Sun, translation: "Sun", audioLetter: letter19, audioWord: word19 },
    { letter: "T", word: "Tigre", letterPronunciation: "tay", pronunciation: "tee-gruh", image: Tiger, translation: "Tiger", audioLetter: letter20, audioWord: word20 },
    { letter: "U", word: "Uniforme", letterPronunciation: "ew", pronunciation: "u-nee-form", image: Uniform, translation: "Uniform", audioLetter: letter21, audioWord: word21 },
    { letter: "V", word: "Voiture", letterPronunciation: "vay", pronunciation: "vwa-tyur", image: Car, translation: "Car", audioLetter: letter22, audioWord: word22 },
    { letter: "W", word: "Wagon", letterPronunciation: "doo-bluh-vay", pronunciation: "vah-gohn", image: Wagon, translation: "Wagon", audioLetter: letter23, audioWord: word23 },
    { letter: "X", word: "Xylophone", letterPronunciation: "eeks", pronunciation: "gzee-loh-fohn", image: Xylophone, translation: "Xylophone", audioLetter: letter24, audioWord: word24 },
    { letter: "Y", word: "Yaourt", letterPronunciation: "ee-grek", pronunciation: "yah-oor", image: Yogurt, translation: "Yogurt", audioLetter: letter25, audioWord: word25 },
    { letter: "Z", word: "Zèbre", letterPronunciation: "zed", pronunciation: "zeh-bruh", image: Zebra, translation: "Zebra", audioLetter: letter26, audioWord: word26 },
];



export const numberCards: FlashCardType[] = [
    { letter: "0", word: "zéro", letterPronunciation: "zeh-ro", pronunciation: "ZEH-ro", image: Zero, translation: "Zero", audioWord: num0, audioLetter: num0 },
    { letter: "1", word: "un", letterPronunciation: "uh(n)", pronunciation: "UH(n)", image: One, translation: "One", audioWord: num1, audioLetter: num1 },
    { letter: "2", word: "deux", letterPronunciation: "duh", pronunciation: "DUH", image: Two, translation: "Two", audioWord: num2, audioLetter: num2 },
    { letter: "3", word: "trois", letterPronunciation: "trwah", pronunciation: "TRWAH", image: Three, translation: "Three", audioWord: num3, audioLetter: num3 },
    { letter: "4", word: "quatre", letterPronunciation: "katr", pronunciation: "KATR", image: FourNumber, translation: "Four", audioWord: num4, audioLetter: num4 },
    { letter: "5", word: "cinq", letterPronunciation: "sank", pronunciation: "SANK", image: Five, translation: "Five", audioWord: num5, audioLetter: num5 },
    { letter: "6", word: "six", letterPronunciation: "sees", pronunciation: "SEES", image: Six, translation: "Six", audioWord: num6, audioLetter: num6 },
    { letter: "7", word: "sept", letterPronunciation: "set", pronunciation: "SET", image: Seven, translation: "Seven", audioWord: num7, audioLetter: num7 },
    { letter: "8", word: "huit", letterPronunciation: "weet", pronunciation: "WEET", image: Eight, translation: "Eight", audioWord: num8, audioLetter: num8 },
    { letter: "9", word: "neuf", letterPronunciation: "nuhf", pronunciation: "NUHF", image: Nine, translation: "Nine", audioWord: num9, audioLetter: num9 },
];