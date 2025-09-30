import Bee from "../assets/images/Bee.png";
import Ball from "../assets/images/Ball.png";
import Car from "../assets/images/nepali/Yaan.png";
import Dice from "../assets/images/Dice.png";
import Elephant from "../assets/images/Elephant.png";
import Seal from "../assets/images/Seal.png";
import Cat from "../assets/images/Cat.png";
import Hippopotamus from "../assets/images/Hippo.png";
import Iguana from "../assets/images/Iguna.png";
import Alligator from "../assets/images/Aligator.png";
import Karate from "../assets/images/Karate.png";
import Pencil from "../assets/images/Pencil.png";
import Apple from "../assets/images/Apple.png";
import Cloud from "../assets/images/Cloud.png";
import Sheep from "../assets/images/Sheep.png";
import Duck from "../assets/images/Duck.png";
import Cheese from "../assets/images/Cheese.png";
import Mouse from "../assets/images/Mouse.png";
import Snake from "../assets/images/nepali/Sarpa.png";
import Shark from "../assets/images/Shark.png";
import Grape from "../assets/images/Grapes.png";
import Cow from "../assets/images/Cow.png";
import Waffle from "../assets/images/Waffle.png";
import Cup from "../assets/images/Cup.png";
import Youtube from "../assets/images/Youtube.png";
import Zebra from "../assets/images/Zebra.png";

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

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "A", word: "Abelha", letterPronunciation: "ah", pronunciation: "ah-BAY-lyah", image: Bee, translation: "Bee" },
    { letter: "B", word: "Bola", letterPronunciation: "bê", pronunciation: "BOH-lah", image: Ball, translation: "Ball" },
    { letter: "C", word: "Carro", letterPronunciation: "cê", pronunciation: "car", image: Car, translation: "Car" },
    { letter: "D", word: "Dado", letterPronunciation: "dê", pronunciation: "dah-hoo", image: Dice, translation: "Dice" },
    { letter: "E", word: "Elefante", letterPronunciation: "é", pronunciation: "eh-leh-FAHN-chee", image: Elephant, translation: "Elephant" },
    { letter: "F", word: "Foca", letterPronunciation: "efe", pronunciation: "FOH-kah", image: Seal, translation: "Seal" },
    { letter: "G", word: "Gato", letterPronunciation: "gê", pronunciation: "GAH-too", image: Cat, translation: "Cat" },
    { letter: "H", word: "Hipopótamo", letterPronunciation: "agá", pronunciation: "ee-poh-POH-tah-moo", image: Hippopotamus, translation: "Hippopotamus" },
    { letter: "I", word: "Iguana", letterPronunciation: "i", pronunciation: "ee-GWAH-nah", image: Iguana, translation: "Iguana" },
    { letter: "J", word: "Jacaré", letterPronunciation: "jóta", pronunciation: "zha-kah-REH", image: Alligator, translation: "Alligator" },
    { letter: "K", word: "Karatê", letterPronunciation: "ká", pronunciation: "kah-rah-TEH", image: Karate, translation: "Karate" },
    { letter: "L", word: "Lápis", letterPronunciation: "éle", pronunciation: "LAH-pees", image: Pencil, translation: "Pencil" },
    { letter: "M", word: "Maçã", letterPronunciation: "ême", pronunciation: "mah-SAHN", image: Apple, translation: "Apple" },
    { letter: "N", word: "Nuvem", letterPronunciation: "êne", pronunciation: "NOO-vayn", image: Cloud, translation: "Cloud" },
    { letter: "O", word: "Ovelha", letterPronunciation: "ó", pronunciation: "oh-VEH-lyah", image: Sheep, translation: "Sheep" },
    { letter: "P", word: "Pato", letterPronunciation: "pê", pronunciation: "PAH-too", image: Duck, translation: "Duck" },
    { letter: "Q", word: "Queijo", letterPronunciation: "quê", pronunciation: "KAY-zhoo", image: Cheese, translation: "Cheese" },
    { letter: "R", word: "Rato", letterPronunciation: "érre", pronunciation: "HAH-too", image: Mouse, translation: "Mouse" },
    { letter: "S", word: "Serpente", letterPronunciation: "ésse", pronunciation: "snake", image: Snake, translation: "Snake" },
    { letter: "T", word: "Tubarão", letterPronunciation: "tê", pronunciation: "too-bah-HOWN", image: Shark, translation: "Shark" },
    { letter: "U", word: "Uva", letterPronunciation: "u", pronunciation: "OO-vah", image: Grape, translation: "Grape" },
    { letter: "V", word: "Vaca", letterPronunciation: "vê", pronunciation: "VAH-kah", image: Cow, translation: "Cow" },
    { letter: "W", word: "Waffle", letterPronunciation: "dáblio", pronunciation: "ˈwäfəl", image: Waffle, translation: "Waffle" },
    { letter: "X", word: "Xícara", letterPronunciation: "xis", pronunciation: "SHEE-kah-rah", image: Cup, translation: "Cup" },
    { letter: "Y", word: "Youtube", letterPronunciation: "ípsilon", pronunciation: "yoo-TOO-bee", image: Youtube, translation: "Youtube" },
    { letter: "Z", word: "Zebra", letterPronunciation: "zê", pronunciation: "ZEH-brah", image: Zebra, translation: "Zebra" }
];


export const numberCards: FlashCardType[] = [
    { letter: "0", word: "zero", letterPronunciation: "zeh-roo", pronunciation: "ZEH-roo", image: Zero, translation: "Zero" },
    { letter: "1", word: "um", letterPronunciation: "oom", pronunciation: "OOM", image: One, translation: "One" },
    { letter: "2", word: "dois", letterPronunciation: "doysh", pronunciation: "DOYSH", image: Two, translation: "Two" },
    { letter: "3", word: "três", letterPronunciation: "trehz", pronunciation: "TREHZ", image: Three, translation: "Three" },
    { letter: "4", word: "quatro", letterPronunciation: "KWA-troh", pronunciation: "KWA-troh", image: Four, translation: "Four" },
    { letter: "5", word: "cinco", letterPronunciation: "SEEN-koo", pronunciation: "SEEN-koo", image: Five, translation: "Five" },
    { letter: "6", word: "seis", letterPronunciation: "saysh", pronunciation: "SAYSH", image: Six, translation: "Six" },
    { letter: "7", word: "sete", letterPronunciation: "SEH-chee", pronunciation: "SEH-chee", image: Seven, translation: "Seven" },
    { letter: "8", word: "oito", letterPronunciation: "OY-too", pronunciation: "OY-too", image: Eight, translation: "Eight" },
    { letter: "9", word: "nove", letterPronunciation: "NOH-vee", pronunciation: "NOH-vee", image: Nine, translation: "Nine" },
];