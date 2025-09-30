// englishCards.ts
import Apple from "../assets/images/Apple.png";
import Ball from "../assets/images/Ball.png";
import Cat from "../assets/images/Cat.png";
import Dog from "../assets/images/Dog.png";
import Elephant from "../assets/images/Elephant.png";
import Fish from "../assets/images/Fish.png";
import Giraffe from "../assets/images/Girrafe.png";
import House from "../assets/images/nepali/Ghara.png";
import Ice from "../assets/images/Ice.png";
import Jacket from "../assets/images/Jacket.png";
import Kite from "../assets/images/Kite.png";
import Lion from "../assets/images/Lion.png";
import Moon from "../assets/images/Moon.png";
import Nose from "../assets/images/nepali/Naak.png";
import Orange from "../assets/images/Orange.png";
import Pencil from "../assets/images/Pencil.png";
import Queen from "../assets/images/Queen.png";
import Rabbit from "../assets/images/nepali/Kharayo.png";
import Sky from "../assets/images/Sky.png";
import Tree from "../assets/images/Tree.png";
import Umbrella from "../assets/images/nepali/Chata.png";
import Van from "../assets/images/Van.png";
import Water from "../assets/images/water.png";
import Xylophone from "../assets/images/Xylophone.png";
import Yak from "../assets/images/nepali/Goru.png";
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
    { letter: "A", word: "Apple", letterPronunciation: "a", pronunciation: "apple", image: Apple, translation: "Apple" },
    { letter: "B", word: "Ball", letterPronunciation: "b", pronunciation: "ball", image: Ball, translation: "Ball" },
    { letter: "C", word: "Cat", letterPronunciation: "c", pronunciation: "kat", image: Cat, translation: "Cat" },
    { letter: "D", word: "Dog", letterPronunciation: "d", pronunciation: "dog", image: Dog, translation: "Dog" },
    { letter: "E", word: "Elephant", letterPronunciation: "e", pronunciation: "elephant", image: Elephant, translation: "Elephant" },
    { letter: "F", word: "Fish", letterPronunciation: "f", pronunciation: "fish", image: Fish, translation: "Fish" },
    { letter: "G", word: "Giraffe", letterPronunciation: "g", pronunciation: "giraffe", image: Giraffe, translation: "Giraffe" },
    { letter: "H", word: "House", letterPronunciation: "h", pronunciation: "house", image: House, translation: "House" },
    { letter: "I", word: "Ice", letterPronunciation: "i", pronunciation: "ice", image: Ice, translation: "Ice" },
    { letter: "J", word: "Jacket", letterPronunciation: "j", pronunciation: "jacket", image: Jacket, translation: "Jacket" },
    { letter: "K", word: "Kite", letterPronunciation: "k", pronunciation: "kite", image: Kite, translation: "Kite" },
    { letter: "L", word: "Lion", letterPronunciation: "l", pronunciation: "lion", image: Lion, translation: "Lion" },
    { letter: "M", word: "Moon", letterPronunciation: "m", pronunciation: "moon", image: Moon, translation: "Moon" },
    { letter: "N", word: "Nose", letterPronunciation: "n", pronunciation: "nose", image: Nose, translation: "Nose" },
    { letter: "O", word: "Orange", letterPronunciation: "o", pronunciation: "orange", image: Orange, translation: "Orange" },
    { letter: "P", word: "Pencil", letterPronunciation: "p", pronunciation: "pencil", image: Pencil, translation: "Pencil" },
    { letter: "Q", word: "Queen", letterPronunciation: "q", pronunciation: "Queen", image: Queen, translation: "Queen" },
    { letter: "R", word: "Rabbit", letterPronunciation: "r", pronunciation: "rabbit", image: Rabbit, translation: "Rabbit" },
    { letter: "S", word: "Sky", letterPronunciation: "s", pronunciation: "sky", image: Sky, translation: "Sky" },
    { letter: "T", word: "Tree", letterPronunciation: "t", pronunciation: "tree", image: Tree, translation: "Tree" },
    { letter: "U", word: "Umbrella", letterPronunciation: "u", pronunciation: "umbrella", image: Umbrella, translation: "Umbrella" },
    { letter: "V", word: "Van", letterPronunciation: "v", pronunciation: "van", image: Van, translation: "Van" },
    { letter: "W", word: "Water", letterPronunciation: "w", pronunciation: "water", image: Water, translation: "Water" },
    { letter: "X", word: "Xylophone", letterPronunciation: "x", pronunciation: "xylophone", image: Xylophone, translation: "Xylophone" },
    { letter: "Y", word: "Yak", letterPronunciation: "y", pronunciation: "yak", image: Yak, translation: "Yak" },
    { letter: "Z", word: "Zebra", letterPronunciation: "z", pronunciation: "zebra", image: Zebra, translation: "Zebra" }
];

export const numberCards: FlashCardType[] = [
    { letter: "0", word: "zero", letterPronunciation: "zee-ro", pronunciation: "ZEE-ro", image: Zero, translation: "Zero" },
    { letter: "1", word: "one", letterPronunciation: "wuhn", pronunciation: "WUHn", image: One, translation: "One" },
    { letter: "2", word: "two", letterPronunciation: "too", pronunciation: "TOO", image: Two, translation: "Two" },
    { letter: "3", word: "three", letterPronunciation: "three", pronunciation: "THREE", image: Three, translation: "Three" },
    { letter: "4", word: "four", letterPronunciation: "for", pronunciation: "FOR", image: Four, translation: "Four" },
    { letter: "5", word: "five", letterPronunciation: "fyev", pronunciation: "FIVE", image: Five, translation: "Five" },
    { letter: "6", word: "six", letterPronunciation: "siks", pronunciation: "SIX", image: Six, translation: "Six" },
    { letter: "7", word: "seven", letterPronunciation: "SEV-uhn", pronunciation: "SEV-uhn", image: Seven, translation: "Seven" },
    { letter: "8", word: "eight", letterPronunciation: "ayt", pronunciation: "EIGHT", image: Eight, translation: "Eight" },
    { letter: "9", word: "nine", letterPronunciation: "nyn", pronunciation: "NINE", image: Nine, translation: "Nine" },
];