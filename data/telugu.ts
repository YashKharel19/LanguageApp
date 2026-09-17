

import Hand from "../assets/images/Hand.png";
import Sword from "../assets/images/kannada/Khadga.png";
import Basket from "../assets/images/Basket.png";
import Bell from "../assets/images/Bell.png";
import Moon from "../assets/images/Moon.png";
import Umbrella from "../assets/images/nepali/Chata.png";
import Hair from "../assets/images/Braid.png";
import Flag from "../assets/images/Flag.png";
import Tomato from "../assets/images/Tomato.png";
import Head from "../assets/images/Head.png";
import Box from "../assets/images/kannada/Dabbi.png";
import Lid from "../assets/images/Lid.png";
import Pipe from "../assets/images/Pipe.png";
import Drum from "../assets/images/Drum.png";
import Brother from "../assets/images/Brother.png";
import Stick from "../assets/images/Stick.png";
import Bow from "../assets/images/nepali/Dhanush.png";
import Fox from "../assets/images/Fox.png";
import Slate from "../assets/images/Slate.png";
import Fruit from "../assets/images/Grapes.png";
import Cart from "../assets/images/nepali/Thela.png";
import Building from "../assets/images/Building.png";
import Jasmine from "../assets/images/Jasmine.png";
import Warrior from "../assets/images/nepali/Kshetriya.png";
import Chariot from "../assets/images/nepali/Ratha.png";
import Sweet from "../assets/images/Laddoo.png";
import Brinjal from "../assets/images/Brinjal.png";
import Conch from "../assets/images/nepali/Sankha.png";
import Hexagon from "../assets/images/nepali/Satkon.png";
import Bag from "../assets/images/nepali/Thaili.png";
import Swan from "../assets/images/Swan.png";
import Lock from "../assets/images/Lock.png";
import Sage from "../assets/images/Wise.png";

// LETTER SOUNDS
import letter1 from "../assets/sounds/telugu/letter1.mp3";
import letter2 from "../assets/sounds/telugu/letter2.mp3";
import letter3 from "../assets/sounds/telugu/letter3.mp3";
import letter4 from "../assets/sounds/telugu/letter4.mp3";
import letter5 from "../assets/sounds/telugu/letter5.mp3";
import letter6 from "../assets/sounds/telugu/letter6.mp3";
import letter7 from "../assets/sounds/telugu/letter7.mp3";
import letter8 from "../assets/sounds/telugu/letter8.mp3";
import letter9 from "../assets/sounds/telugu/letter9.mp3";
import letter10 from "../assets/sounds/telugu/letter10.mp3";
import letter11 from "../assets/sounds/telugu/letter11.mp3";
import letter12 from "../assets/sounds/telugu/letter12.mp3";
import letter13 from "../assets/sounds/telugu/letter13.mp3";
import letter14 from "../assets/sounds/telugu/letter14.mp3";
import letter15 from "../assets/sounds/telugu/letter15.mp3";
import letter16 from "../assets/sounds/telugu/letter16.mp3";
import letter17 from "../assets/sounds/telugu/letter17.mp3";
import letter18 from "../assets/sounds/telugu/letter18.mp3";
import letter19 from "../assets/sounds/telugu/letter19.mp3";
import letter20 from "../assets/sounds/telugu/letter20.mp3";
import letter21 from "../assets/sounds/telugu/letter21.mp3";
import letter22 from "../assets/sounds/telugu/letter22.mp3";
import letter23 from "../assets/sounds/telugu/letter23.mp3";
import letter24 from "../assets/sounds/telugu/letter24.mp3";
import letter25 from "../assets/sounds/telugu/letter25.mp3";
import letter26 from "../assets/sounds/telugu/letter26.mp3";
import letter27 from "../assets/sounds/telugu/letter27.mp3";
import letter28 from "../assets/sounds/telugu/letter28.mp3";
import letter29 from "../assets/sounds/telugu/letter29.mp3";
import letter30 from "../assets/sounds/telugu/letter30.mp3";
import letter31 from "../assets/sounds/telugu/letter31.mp3";
import letter32 from "../assets/sounds/telugu/letter32.mp3";
import letter33 from "../assets/sounds/telugu/letter33.mp3";
import letter34 from "../assets/sounds/telugu/letter34.mp3";


// WORD SOUNDS
import word1 from "../assets/sounds/telugu/word1.mp3";
import word2 from "../assets/sounds/telugu/word2.mp3";
import word3 from "../assets/sounds/telugu/word3.mp3";
import word4 from "../assets/sounds/telugu/word4.mp3";
import word5 from "../assets/sounds/telugu/word5.mp3";
import word6 from "../assets/sounds/telugu/word6.mp3";
import word7 from "../assets/sounds/telugu/word7.mp3";
import word8 from "../assets/sounds/telugu/word8.mp3";
import word9 from "../assets/sounds/telugu/word9.mp3";
import word10 from "../assets/sounds/telugu/word10.mp3";
import word11 from "../assets/sounds/telugu/word11.mp3";
import word12 from "../assets/sounds/telugu/word12.mp3";
import word13 from "../assets/sounds/telugu/word13.mp3";
import word14 from "../assets/sounds/telugu/word14.mp3";
import word15 from "../assets/sounds/telugu/word15.mp3";
import word16 from "../assets/sounds/telugu/word16.mp3";
import word17 from "../assets/sounds/telugu/word17.mp3";
import word18 from "../assets/sounds/telugu/word18.mp3";
import word19 from "../assets/sounds/telugu/word19.mp3";
import word20 from "../assets/sounds/telugu/word20.mp3";
import word21 from "../assets/sounds/telugu/word21.mp3";
import word22 from "../assets/sounds/telugu/word22.mp3";
import word23 from "../assets/sounds/telugu/word23.mp3";
import word24 from "../assets/sounds/telugu/word24.mp3";
import word25 from "../assets/sounds/telugu/word25.mp3";
import word26 from "../assets/sounds/telugu/word26.mp3";
import word27 from "../assets/sounds/telugu/word27.mp3";
import word28 from "../assets/sounds/telugu/word28.mp3";
import word29 from "../assets/sounds/telugu/word29.mp3";
import word30 from "../assets/sounds/telugu/word30.mp3";
import word31 from "../assets/sounds/telugu/word31.mp3";
import word32 from "../assets/sounds/telugu/word32.mp3";
import word33 from "../assets/sounds/telugu/word33.mp3";
import word34 from "../assets/sounds/telugu/word34.mp3";



import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "క", letterPronunciation: "ka", word: "చేయి", pronunciation: "cheyi", image: Hand, translation: "Hand", audioLetter: letter1, audioWord: word1 },
    { letter: "ఖ", letterPronunciation: "kha", word: "ఖడ్గము", pronunciation: "khadgamu", image: Sword, translation: "Sword", audioLetter: letter2, audioWord: word2 },
    { letter: "గ", letterPronunciation: "ga", word: "గంప", pronunciation: "gampa", image: Basket, translation: "Basket", audioLetter: letter3, audioWord: word3 },
    { letter: "ఘ", letterPronunciation: "gha", word: "గంట", pronunciation: "ganta", image: Bell, translation: "Bell", audioLetter: letter4, audioWord: word4 },
    { letter: "చ", letterPronunciation: "cha", word: "చంద్రుడు", pronunciation: "chandrudu", image: Moon, translation: "Moon", audioLetter: letter5, audioWord: word5 },
    { letter: "ఛ", letterPronunciation: "chha", word: "గొడుగు", pronunciation: "godugu", image: Umbrella, translation: "Umbrella", audioLetter: letter6, audioWord: word6 },
    { letter: "జ", letterPronunciation: "ja", word: "జడ", pronunciation: "jada", image: Hair, translation: "Hair", audioLetter: letter7, audioWord: word7 },
    { letter: "ఝ", letterPronunciation: "jha", word: "జెండా", pronunciation: "jenda", image: Flag, translation: "Flag", audioLetter: letter8, audioWord: word8 },
    { letter: "ట", letterPronunciation: "ṭa", word: "టమోటా", pronunciation: "tamota", image: Tomato, translation: "Tomato", audioLetter: letter9, audioWord: word9 },
    { letter: "ఠ", letterPronunciation: "ṭha", word: "తల", pronunciation: "tala", image: Head, translation: "Head", audioLetter: letter10, audioWord: word10 },
    { letter: "డ", letterPronunciation: "ḍa", word: "డబ్బా", pronunciation: "dabba", image: Box, translation: "Box", audioLetter: letter11, audioWord: word11 },
    { letter: "ఢ", letterPronunciation: "ḍha", word: "ఢొక్కా", pronunciation: "dhokka", image: Lid, translation: "Lid", audioLetter: letter12, audioWord: word12 },
    { letter: "ణ", letterPronunciation: "ṇa", word: "ణాళము", pronunciation: "nalam", image: Pipe, translation: "Pipe", audioLetter: letter13, audioWord: word13 },
    { letter: "త", letterPronunciation: "ta", word: "తబల", pronunciation: "tabala", image: Drum, translation: "Drum", audioLetter: letter14, audioWord: word14 },
    { letter: "థ", letterPronunciation: "tha", word: "తమ్ముడు", pronunciation: "tammudu", image: Brother, translation: "Little Brother", audioLetter: letter15, audioWord: word15 },
    { letter: "ద", letterPronunciation: "da", word: "దండి", pronunciation: "dandi", image: Stick, translation: "Stick", audioLetter: letter16, audioWord: word16 },
    { letter: "ధ", letterPronunciation: "dha", word: "ధనుస్సు", pronunciation: "dhanussu", image: Bow, translation: "Bow", audioLetter: letter17, audioWord: word17 },
    { letter: "న", letterPronunciation: "na", word: "నక్క", pronunciation: "nakka", image: Fox, translation: "Fox", audioLetter: letter18, audioWord: word18 },
    { letter: "ప", letterPronunciation: "pa", word: "పలక", pronunciation: "palaka", image: Slate, translation: "Slate", audioLetter: letter19, audioWord: word19 },
    { letter: "ఫ", letterPronunciation: "pha", word: "ఫలం", pronunciation: "phalam", image: Fruit, translation: "Fruit", audioLetter: letter20, audioWord: word20 },
    { letter: "బ", letterPronunciation: "ba", word: "బండి", pronunciation: "bandi", image: Cart, translation: "Cart", audioLetter: letter21, audioWord: word21 },
    { letter: "భ", letterPronunciation: "bha", word: "భవనం", pronunciation: "bhavanam", image: Building, translation: "Building", audioLetter: letter22, audioWord: word22 },
    { letter: "మ", letterPronunciation: "ma", word: "మల్లె", pronunciation: "malle", image: Jasmine, translation: "Jasmine", audioLetter: letter23, audioWord: word23 },
    { letter: "య", letterPronunciation: "ya", word: "యోధుడు", pronunciation: "yodhudu", image: Warrior, translation: "Warrior", audioLetter: letter24, audioWord: word24 },
    { letter: "ర", letterPronunciation: "ra", word: "రథము", pronunciation: "ratham", image: Chariot, translation: "Chariot", audioLetter: letter25, audioWord: word25 },
    { letter: "ల", letterPronunciation: "la", word: "లడ్డు", pronunciation: "laddu", image: Sweet, translation: "Sweet", audioLetter: letter26, audioWord: word26 },
    { letter: "వ", letterPronunciation: "va", word: "వంకాయ", pronunciation: "vankaya", image: Brinjal, translation: "Brinjal (Eggplant)", audioLetter: letter27, audioWord: word27 },
    { letter: "శ", letterPronunciation: "sha", word: "శంఖము", pronunciation: "shankhamu", image: Conch, translation: "Conch", audioLetter: letter28, audioWord: word28 },
    { letter: "ష", letterPronunciation: "ṣa", word: "షట్కోణం", pronunciation: "shatkōnam", image: Hexagon, translation: "Hexagon", audioLetter: letter29, audioWord: word29 },
    { letter: "స", letterPronunciation: "sa", word: "సంచి", pronunciation: "sanchi", image: Bag, translation: "Bag", audioLetter: letter30, audioWord: word30 },
    { letter: "హ", letterPronunciation: "ha", word: "హంస", pronunciation: "hamsa", image: Swan, translation: "Swan", audioLetter: letter31, audioWord: word31 },
    { letter: "ళ", letterPronunciation: "ḷa", word: "ళకము", pronunciation: "lakamu", image: Lock, translation: "Lock", audioLetter: letter32, audioWord: word32 },
    { letter: "క్ష", letterPronunciation: "ksha", word: "క్షత్రియుడు", pronunciation: "kshatriyudu", image: Warrior, translation: "Warrior", audioLetter: letter33, audioWord: word33 },
    { letter: "ఱ", letterPronunciation: "ṟa", word: "ఋషి", pronunciation: "rushi", image: Sage, translation: "Sage", audioLetter: letter34, audioWord: word34 },
];

