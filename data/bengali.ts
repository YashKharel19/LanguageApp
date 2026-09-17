import Banana from "../assets/images/Banana.png";
import Rabbit from "../assets/images/nepali/Kharayo.png";
import Cow from "../assets/images/Cow.png";
import Clock from "../assets/images/Clock.png";
import Moon from "../assets/images/Moon.png";
import Umbrella from "../assets/images/nepali/Chata.png";
import Water from "../assets/images/Glasswater.png";
import RidgeGourd from "../assets/images/RidgeGourd.png";
import Tomato from "../assets/images/Tomato.png";
import Cart from "../assets/images/nepali/Thela.png";
import Egg from "../assets/images/Egg.png";
import Drum from "../assets/images/Drum.png";
import Star from "../assets/images/Star.png";
import Plate from "../assets/images/Plate.png";
import Milk from "../assets/images/Milk.png";
import Coriander from "../assets/images/Coriander.png";
import River from "../assets/images/River.png";
import Onion from "../assets/images/Onion.png";
import Flower from "../assets/images/nepali/Fhul.png";
import Book from "../assets/images/Book.png";
import Bear from "../assets/images/nepali/Bhalu.png";
import Fish from "../assets/images/Fish.png";
import Vehicle from "../assets/images/nepali/Yaan.png";
import Roti from "../assets/images/Roti.png";
import Lemon from "../assets/images/Lemon.png";
import Child from "../assets/images/Child.png";
import Bull from "../assets/images/nepali/Goru.png";
import Snake from "../assets/images/nepali/Sarpa.png";
import Duck from "../assets/images/Duck.png";

// 🔊 Bengali audio files (letters + words)
import letter1 from "../assets/sounds/bengali/letter1.mp3";
import letter2 from "../assets/sounds/bengali/letter2.mp3";
import letter3 from "../assets/sounds/bengali/letter3.mp3";
import letter4 from "../assets/sounds/bengali/letter4.mp3";
import letter5 from "../assets/sounds/bengali/letter5.mp3";
import letter6 from "../assets/sounds/bengali/letter6.mp3";
import letter7 from "../assets/sounds/bengali/letter7.mp3";
import letter8 from "../assets/sounds/bengali/letter8.mp3";
import letter9 from "../assets/sounds/bengali/letter9.mp3";
import letter10 from "../assets/sounds/bengali/letter10.mp3";
import letter11 from "../assets/sounds/bengali/letter11.mp3";
import letter12 from "../assets/sounds/bengali/letter12.mp3";
import letter13 from "../assets/sounds/bengali/letter13.mp3";
import letter14 from "../assets/sounds/bengali/letter14.mp3";
import letter15 from "../assets/sounds/bengali/letter15.mp3";
import letter16 from "../assets/sounds/bengali/letter16.mp3";
import letter17 from "../assets/sounds/bengali/letter17.mp3";
import letter18 from "../assets/sounds/bengali/letter18.mp3";
import letter19 from "../assets/sounds/bengali/letter19.mp3";
import letter20 from "../assets/sounds/bengali/letter20.mp3";
import letter21 from "../assets/sounds/bengali/letter21.mp3";
import letter22 from "../assets/sounds/bengali/letter22.mp3";
import letter23 from "../assets/sounds/bengali/letter23.mp3";
import letter24 from "../assets/sounds/bengali/letter24.mp3";
import letter25 from "../assets/sounds/bengali/letter25.mp3";
import letter26 from "../assets/sounds/bengali/letter26.mp3";
import letter27 from "../assets/sounds/bengali/letter27.mp3";
import letter28 from "../assets/sounds/bengali/letter28.mp3";
import letter29 from "../assets/sounds/bengali/letter29.mp3";

import Word1 from "../assets/sounds/bengali/word1.mp3";
import Word2 from "../assets/sounds/bengali/word2.mp3";
import Word3 from "../assets/sounds/bengali/word3.mp3";
import Word4 from "../assets/sounds/bengali/word4.mp3";
import Word5 from "../assets/sounds/bengali/word5.mp3";
import Word6 from "../assets/sounds/bengali/word6.mp3";
import Word7 from "../assets/sounds/bengali/word7.mp3";
import Word8 from "../assets/sounds/bengali/word8.mp3";
import Word9 from "../assets/sounds/bengali/word9.mp3";
import Word10 from "../assets/sounds/bengali/word10.mp3";
import Word11 from "../assets/sounds/bengali/word11.mp3";
import Word12 from "../assets/sounds/bengali/word12.mp3";
import Word13 from "../assets/sounds/bengali/word13.mp3";
import Word14 from "../assets/sounds/bengali/word14.mp3";
import Word15 from "../assets/sounds/bengali/word15.mp3";
import Word16 from "../assets/sounds/bengali/word16.mp3";
import Word17 from "../assets/sounds/bengali/word17.mp3";
import Word18 from "../assets/sounds/bengali/word18.mp3";
import Word19 from "../assets/sounds/bengali/word19.mp3";
import Word20 from "../assets/sounds/bengali/word20.mp3";
import Word21 from "../assets/sounds/bengali/word21.mp3";
import Word22 from "../assets/sounds/bengali/word22.mp3";
import Word23 from "../assets/sounds/bengali/word23.mp3";
import Word24 from "../assets/sounds/bengali/word24.mp3";
import Word25 from "../assets/sounds/bengali/word25.mp3";
import Word26 from "../assets/sounds/bengali/word26.mp3";
import Word27 from "../assets/sounds/bengali/word27.mp3";
import Word28 from "../assets/sounds/bengali/word28.mp3";
import Word29 from "../assets/sounds/bengali/word29.mp3";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ক", letterPronunciation: "ka", word: "কলা", pronunciation: "ko-la", image: Banana, translation: "Banana", audioLetter: letter1, audioWord: Word1 },
    { letter: "খ", letterPronunciation: "kho", word: "খরগোশ", pronunciation: "kho-ro-gosh", image: Rabbit, translation: "Rabbit", audioLetter: letter2, audioWord: Word2 },
    { letter: "গ", letterPronunciation: "ga", word: "গরু", pronunciation: "go-ru", image: Cow, translation: "Cow", audioLetter: letter3, audioWord: Word3 },
    { letter: "ঘ", letterPronunciation: "gho", word: "ঘড়ি", pronunciation: "gho-ri", image: Clock, translation: "Clock", audioLetter: letter4, audioWord: Word4 },
    { letter: "চ", letterPronunciation: "cha", word: "চাঁদ", pronunciation: "chaand", image: Moon, translation: "Moon", audioLetter: letter5, audioWord: Word5 },
    { letter: "ছ", letterPronunciation: "chha", word: "ছাতা", pronunciation: "cha-ta", image: Umbrella, translation: "Umbrella", audioLetter: letter6, audioWord: Word6 },
    { letter: "জ", letterPronunciation: "ja", word: "জল", pronunciation: "jol", image: Water, translation: "Water", audioLetter: letter7, audioWord: Word7 },
    { letter: "ঝ", letterPronunciation: "jha", word: "ঝিঙে", pronunciation: "jhinge", image: RidgeGourd, translation: "Ridge Gourd", audioLetter: letter8, audioWord: Word8 },
    { letter: "ট", letterPronunciation: "ṭa", word: "টমেটো", pronunciation: "to-me-to", image: Tomato, translation: "Tomato", audioLetter: letter9, audioWord: Word9 },
    { letter: "ঠ", letterPronunciation: "ṭha", word: "ঠেলা", pronunciation: "the-la", image: Cart, translation: "Cart", audioLetter: letter10, audioWord: Word10 },
    { letter: "ড", letterPronunciation: "ḍa", word: "ডিম", pronunciation: "dim", image: Egg, translation: "Egg", audioLetter: letter11, audioWord: Word11 },
    { letter: "ঢ", letterPronunciation: "ḍha", word: "ঢোল", pronunciation: "dhol", image: Drum, translation: "Drum", audioLetter: letter12, audioWord: Word12 },
    { letter: "ত", letterPronunciation: "ta", word: "তারা", pronunciation: "ta-ra", image: Star, translation: "Star", audioLetter: letter13, audioWord: Word13 },
    { letter: "থ", letterPronunciation: "tha", word: "থালা", pronunciation: "tha-la", image: Plate, translation: "Plate", audioLetter: letter14, audioWord: Word14 },
    { letter: "দ", letterPronunciation: "da", word: "দুধ", pronunciation: "dudh", image: Milk, translation: "Milk", audioLetter: letter15, audioWord: Word15 },
    { letter: "ধ", letterPronunciation: "dha", word: "ধনিয়া", pronunciation: "dhoni-ya", image: Coriander, translation: "Coriander", audioLetter: letter16, audioWord: Word16 },
    { letter: "ন", letterPronunciation: "na", word: "নদী", pronunciation: "no-di", image: River, translation: "River", audioLetter: letter17, audioWord: Word17 },
    { letter: "প", letterPronunciation: "pa", word: "পেঁয়াজ", pronunciation: "pen-yaj", image: Onion, translation: "Onion", audioLetter: letter18, audioWord: Word18 },
    { letter: "ফ", letterPronunciation: "pha", word: "ফুল", pronunciation: "phul", image: Flower, translation: "Flower", audioLetter: letter19, audioWord: Word19 },
    { letter: "ব", letterPronunciation: "ba", word: "বই", pronunciation: "boi", image: Book, translation: "Book", audioLetter: letter20, audioWord: Word20 },
    { letter: "ভ", letterPronunciation: "bha", word: "ভালুক", pronunciation: "bha-luk", image: Bear, translation: "Bear", audioLetter: letter21, audioWord: Word21 },
    { letter: "ম", letterPronunciation: "ma", word: "মাছ", pronunciation: "mach", image: Fish, translation: "Fish", audioLetter: letter22, audioWord: Word22 },
    { letter: "য", letterPronunciation: "ya", word: "যান", pronunciation: "jan", image: Vehicle, translation: "Vehicle", audioLetter: letter23, audioWord: Word23 },
    { letter: "র", letterPronunciation: "ra", word: "রুটি", pronunciation: "ru-ti", image: Roti, translation: "Roti", audioLetter: letter24, audioWord: Word24 },
    { letter: "ল", letterPronunciation: "la", word: "লেবু", pronunciation: "le-bu", image: Lemon, translation: "Lemon", audioLetter: letter25, audioWord: Word25 },
    { letter: "শ", letterPronunciation: "sha", word: "শিশু", pronunciation: "shi-shu", image: Child, translation: "Child", audioLetter: letter26, audioWord: Word26 },
    { letter: "ষ", letterPronunciation: "ṣa", word: "ষাঁড়", pronunciation: "shar", image: Bull, translation: "Bull", audioLetter: letter27, audioWord: Word27 },
    { letter: "স", letterPronunciation: "sa", word: "সাপ", pronunciation: "shap", image: Snake, translation: "Snake", audioLetter: letter28, audioWord: Word28 },
    { letter: "হ", letterPronunciation: "ha", word: "হাঁস", pronunciation: "haas", image: Duck, translation: "Duck", audioLetter: letter29, audioWord: Word29 },

];
