import Cat from "../assets/images/Cat.svg";
import Butterfly from "../assets/images/Butterfly.svg";
import Moon from "../assets/images/Moon.svg";
import Radio from "../assets/images/Radio.svg";
import Water from "../assets/images/water.svg";
import Banana from "../assets/images/Banana.svg";
import Apple from "../assets/images/Apple.svg";
import Child from "../assets/images/nepali/Bachha.svg";
import Paper from "../assets/images/Paper.svg";
import Car from "../assets/images/Car.svg";
import Nose from "../assets/images/nepali/Naak.svg";
import Rabbit from "../assets/images/nepali/Kharayo.svg";
import Pizza from "../assets/images/Pizza.svg";
import Sky from "../assets/images/Sky.svg";

import Zero from "../assets/images/What.svg"
import One from "../assets/images/numbers/1.svg";
import Two from "../assets/images/numbers/2.svg";
import Three from "../assets/images/numbers/3.svg";
import Four from "../assets/images/numbers/4.svg";
import Five from "../assets/images/numbers/5.svg";
import Six from "../assets/images/numbers/6.svg";
import Seven from "../assets/images/numbers/7.svg";
import Eight from "../assets/images/numbers/8.svg";
import Nine from "../assets/images/numbers/9.svg";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ㄱ", word: "고양이", letterPronunciation: "giyeok", pronunciation: "go-yang-i", image: Cat, translation: "Cat" },
    { letter: "ㄴ", word: "나비", letterPronunciation: "nieun", pronunciation: "na-bi", image: Butterfly, translation: "Butterfly" },
    { letter: "ㄷ", word: "달", letterPronunciation: "digeut", pronunciation: "dal", image: Moon, translation: "Moon" },
    { letter: "ㄹ", word: "라디오", letterPronunciation: "rieul", pronunciation: "ra-di-o", image: Radio, translation: "Radio" },
    { letter: "ㅁ", word: "물", letterPronunciation: "mieum", pronunciation: "mul", image: Water, translation: "Water" },
    { letter: "ㅂ", word: "바나나", letterPronunciation: "bieup", pronunciation: "ba-na-na", image: Banana, translation: "Banana" },
    { letter: "ㅅ", word: "사과", letterPronunciation: "siot", pronunciation: "sa-gwa", image: Apple, translation: "Apple" },
    { letter: "ㅇ", word: "아이", letterPronunciation: "ieung", pronunciation: "a-i", image: Child, translation: "Child" },
    { letter: "ㅈ", word: "종이", letterPronunciation: "jieut", pronunciation: "jong-i", image: Paper, translation: "Paper" },
    { letter: "ㅊ", word: "차", letterPronunciation: "chieut", pronunciation: "cha", image: Car, translation: "Car" },
    { letter: "ㅋ", word: "코", letterPronunciation: "kieuk", pronunciation: "ko", image: Nose, translation: "Nose" },
    { letter: "ㅌ", word: "토끼", letterPronunciation: "tieut", pronunciation: "to-kki", image: Rabbit, translation: "Rabbit" },
    { letter: "ㅍ", word: "피자", letterPronunciation: "pieup", pronunciation: "pi-ja", image: Pizza, translation: "Pizza" },
    { letter: "ㅎ", word: "하늘", letterPronunciation: "hieut", pronunciation: "ha-neul", image: Sky, translation: "Sky" }
];


export const numberCards: FlashCardType[] = [
    { letter: "0", word: "영", letterPronunciation: "yeong", pronunciation: "YEONG", image: Zero, translation: "Zero" },
    { letter: "1", word: "일", letterPronunciation: "il", pronunciation: "IL", image: One, translation: "One" },
    { letter: "2", word: "이", letterPronunciation: "ee", pronunciation: "EE", image: Two, translation: "Two" },
    { letter: "3", word: "삼", letterPronunciation: "sam", pronunciation: "SAM", image: Three, translation: "Three" },
    { letter: "4", word: "사", letterPronunciation: "sa", pronunciation: "SA", image: Four, translation: "Four" },
    { letter: "5", word: "오", letterPronunciation: "oh", pronunciation: "OH", image: Five, translation: "Five" },
    { letter: "6", word: "육", letterPronunciation: "yuk", pronunciation: "YUK", image: Six, translation: "Six" },
    { letter: "7", word: "칠", letterPronunciation: "chil", pronunciation: "CHIL", image: Seven, translation: "Seven" },
    { letter: "8", word: "팔", letterPronunciation: "pal", pronunciation: "PAL", image: Eight, translation: "Eight" },
    { letter: "9", word: "구", letterPronunciation: "gu", pronunciation: "GU", image: Nine, translation: "Nine" },
];