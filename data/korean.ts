import Cat from "../assets/images/Cat.png";
import Butterfly from "../assets/images/Butterfly.png";
import Moon from "../assets/images/Moon.png";
import Radio from "../assets/images/Radio.png";
import Water from "../assets/images/water.png";
import Banana from "../assets/images/Banana.png";
import Apple from "../assets/images/Apple.png";
import Child from "../assets/images/nepali/Bachha.png";
import Paper from "../assets/images/Paper.png";
import Car from "../assets/images/Car.png";
import Nose from "../assets/images/nepali/Naak.png";
import Rabbit from "../assets/images/nepali/Kharayo.png";
import Pizza from "../assets/images/Pizza.png";
import Sky from "../assets/images/Sky.png";

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

// Audio for consonants
import letter1 from "../assets/sounds/korean/letter1.mp3";
import letter2 from "../assets/sounds/korean/letter2.mp3";
import letter3 from "../assets/sounds/korean/letter3.mp3";
import letter4 from "../assets/sounds/korean/letter4.mp3";
import letter5 from "../assets/sounds/korean/letter5.mp3";
import letter6 from "../assets/sounds/korean/letter6.mp3";
import letter7 from "../assets/sounds/korean/letter7.mp3";
import letter8 from "../assets/sounds/korean/letter8.mp3";
import letter9 from "../assets/sounds/korean/letter9.mp3";
import letter10 from "../assets/sounds/korean/letter10.mp3";
import letter11 from "../assets/sounds/korean/letter11.mp3";
import letter12 from "../assets/sounds/korean/letter12.mp3";
import letter13 from "../assets/sounds/korean/letter13.mp3";
import letter14 from "../assets/sounds/korean/letter14.mp3";

// Audio for words
import Word1 from "../assets/sounds/korean/word1.mp3";
import Word2 from "../assets/sounds/korean/word2.mp3";
import Word3 from "../assets/sounds/korean/word3.mp3";
import Word4 from "../assets/sounds/korean/word4.mp3";
import Word5 from "../assets/sounds/korean/word5.mp3";
import Word6 from "../assets/sounds/korean/word6.mp3";
import Word7 from "../assets/sounds/korean/word7.mp3";
import Word8 from "../assets/sounds/korean/word8.mp3";
import Word9 from "../assets/sounds/korean/word9.mp3";
import Word10 from "../assets/sounds/korean/word10.mp3";
import Word11 from "../assets/sounds/korean/word11.mp3";
import Word12 from "../assets/sounds/korean/word12.mp3";
import Word13 from "../assets/sounds/korean/word13.mp3";
import Word14 from "../assets/sounds/korean/word14.mp3";

// Audio for numbers
import num0 from "../assets/sounds/korean/zero.mp3";
import num1 from "../assets/sounds/korean/one.mp3";
import num2 from "../assets/sounds/korean/two.mp3";
import num3 from "../assets/sounds/korean/three.mp3";
import num4 from "../assets/sounds/korean/four.mp3";
import num5 from "../assets/sounds/korean/five.mp3";
import num6 from "../assets/sounds/korean/six.mp3";
import num7 from "../assets/sounds/korean/seven.mp3";
import num8 from "../assets/sounds/korean/eight.mp3";
import num9 from "../assets/sounds/korean/nine.mp3";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ㄱ", word: "고양이", letterPronunciation: "giyeok", pronunciation: "go-yang-i", image: Cat, translation: "Cat", audioLetter: letter1, audioWord: Word1 },
    { letter: "ㄴ", word: "나비", letterPronunciation: "nieun", pronunciation: "na-bi", image: Butterfly, translation: "Butterfly", audioLetter: letter2, audioWord: Word2 },
    { letter: "ㄷ", word: "달", letterPronunciation: "digeut", pronunciation: "dal", image: Moon, translation: "Moon", audioLetter: letter3, audioWord: Word3 },
    { letter: "ㄹ", word: "라디오", letterPronunciation: "rieul", pronunciation: "ra-di-o", image: Radio, translation: "Radio", audioLetter: letter4, audioWord: Word4 },
    { letter: "ㅁ", word: "물", letterPronunciation: "mieum", pronunciation: "mul", image: Water, translation: "Water", audioLetter: letter5, audioWord: Word5 },
    { letter: "ㅂ", word: "바나나", letterPronunciation: "bieup", pronunciation: "ba-na-na", image: Banana, translation: "Banana", audioLetter: letter6, audioWord: Word6 },
    { letter: "ㅅ", word: "사과", letterPronunciation: "siot", pronunciation: "sa-gwa", image: Apple, translation: "Apple", audioLetter: letter7, audioWord: Word7 },
    { letter: "ㅇ", word: "아이", letterPronunciation: "ieung", pronunciation: "a-i", image: Child, translation: "Child", audioLetter: letter8, audioWord: Word8 },
    { letter: "ㅈ", word: "종이", letterPronunciation: "jieut", pronunciation: "jong-i", image: Paper, translation: "Paper", audioLetter: letter9, audioWord: Word9 },
    { letter: "ㅊ", word: "차", letterPronunciation: "chieut", pronunciation: "cha", image: Car, translation: "Car", audioLetter: letter10, audioWord: Word10 },
    { letter: "ㅋ", word: "코", letterPronunciation: "kieuk", pronunciation: "ko", image: Nose, translation: "Nose", audioLetter: letter11, audioWord: Word11 },
    { letter: "ㅌ", word: "토끼", letterPronunciation: "tieut", pronunciation: "to-kki", image: Rabbit, translation: "Rabbit", audioLetter: letter12, audioWord: Word12 },
    { letter: "ㅍ", word: "피자", letterPronunciation: "pieup", pronunciation: "pi-ja", image: Pizza, translation: "Pizza", audioLetter: letter13, audioWord: Word13 },
    { letter: "ㅎ", word: "하늘", letterPronunciation: "hieut", pronunciation: "ha-neul", image: Sky, translation: "Sky", audioLetter: letter14, audioWord: Word14 }
];

export const numberCards: FlashCardType[] = [
    { letter: "0", word: "영", letterPronunciation: "yeong", pronunciation: "YEONG", image: Zero, translation: "Zero", audioLetter: num0, audioWord: num0 },
    { letter: "1", word: "일", letterPronunciation: "il", pronunciation: "IL", image: One, translation: "One", audioLetter: num1, audioWord: num1 },
    { letter: "2", word: "이", letterPronunciation: "ee", pronunciation: "EE", image: Two, translation: "Two", audioLetter: num2, audioWord: num2 },
    { letter: "3", word: "삼", letterPronunciation: "sam", pronunciation: "SAM", image: Three, translation: "Three", audioLetter: num3, audioWord: num3 },
    { letter: "4", word: "사", letterPronunciation: "sa", pronunciation: "SA", image: Four, translation: "Four", audioLetter: num4, audioWord: num4 },
    { letter: "5", word: "오", letterPronunciation: "oh", pronunciation: "OH", image: Five, translation: "Five", audioLetter: num5, audioWord: num5 },
    { letter: "6", word: "육", letterPronunciation: "yuk", pronunciation: "YUK", image: Six, translation: "Six", audioLetter: num6, audioWord: num6 },
    { letter: "7", word: "칠", letterPronunciation: "chil", pronunciation: "CHIL", image: Seven, translation: "Seven", audioLetter: num7, audioWord: num7 },
    { letter: "8", word: "팔", letterPronunciation: "pal", pronunciation: "PAL", image: Eight, translation: "Eight", audioLetter: num8, audioWord: num8 },
    { letter: "9", word: "구", letterPronunciation: "gu", pronunciation: "GU", image: Nine, translation: "Nine", audioLetter: num9, audioWord: num9 },
];
