import Pigeon from "../assets/images/nepali/Parewa.svg";
import Rabbit from "../assets/images/nepali/Kharayo.svg";
import Pot from "../assets/images/nepali/Gamala.svg";
import House from "../assets/images/nepali/Ghara.svg";
import Grapes from "../assets/images/Grapes.svg";
import Bird from "../assets/images/nepali/Cara.svg";
import Umbrella from "../assets/images/nepali/Chata.svg";
import Ship from "../assets/images/Ship.svg";
import Waterfall from "../assets/images/nepali/Jharna.svg";
import Tomato from "../assets/images/Tomato.svg";
import Trickster from "../assets/images/Thief.svg";
import SmallDrum from "../assets/images/nepali/Damaru.svg";
import Drum from "../assets/images/Drum.svg";
import Arrow from "../assets/images/nepali/Baan.svg";
import Lock from "../assets/images/Lock.svg";
import Plate from "../assets/images/Plate.svg";
import Medicine from "../assets/images/kannada/Aushadhi.svg";
import Bow from "../assets/images/nepali/Dhanush.svg";
import Tap from "../assets/images/Tap.svg";
import Kite from "../assets/images/Kite.svg";
import Flower from "../assets/images/nepali/Fhul.svg";
import Monkey from "../assets/images/Monkey.svg";
import Bear from "../assets/images/nepali/Bhalu.svg";
import Fish from "../assets/images/Fish.svg";
import Vehicle from "../assets/images/nepali/Yaan.svg";
import Chariot from "../assets/images/nepali/Ratha.svg";
import Garlic from "../assets/images/nepali/Lasun.svg";
import Lawyer from "../assets/images/nepali/Wakil.svg";
import ConchShell from "../assets/images/nepali/Sankha.svg";
import Hexagon from "../assets/images/nepali/Satkon.svg";
import Snake from "../assets/images/nepali/Sarpa.svg";
import Elephant from "../assets/images/Elephant.svg";
import Warrior from "../assets/images/nepali/Kshetriya.svg";
import Trident from "../assets/images/nepali/Trishul.svg";
import Knowledge from "../assets/images/nepali/Gyan.svg";

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
    { letter: 'क', letterPronunciation: 'ka', pronunciation: 'kabootar', word: 'कबूतर', translation: 'Pigeon', image: Pigeon },
    { letter: 'ख', letterPronunciation: 'kha', pronunciation: 'khargosh', word: 'खरगोश', translation: 'Rabbit', image: Rabbit },
    { letter: 'ग', letterPronunciation: 'ga', pronunciation: 'Gamalā', word: 'गमला', translation: 'Pot', image: Pot },
    { letter: 'घ', letterPronunciation: 'gha', pronunciation: 'Ghara', word: 'घर', translation: 'House', image: House },
    { letter: 'ङ', letterPronunciation: 'ṅa', pronunciation: 'ang-oor', word: 'अंगूर', translation: 'Grapes', image: Grapes },
    { letter: 'च', letterPronunciation: 'cha', pronunciation: 'chidiyaa', word: 'चिड़िया', translation: 'Bird', image: Bird },
    { letter: 'छ', letterPronunciation: 'chha', pronunciation: 'chaata', word: 'छाता', translation: 'Umbrella', image: Umbrella },
    { letter: 'ज', letterPronunciation: 'ja', pronunciation: 'jahaaj', word: 'जहाज', translation: 'Ship', image: Ship },
    { letter: 'झ', letterPronunciation: 'jha', pronunciation: 'Jharanā', word: 'झरना', translation: 'Waterfall', image: Waterfall },
    { letter: 'ट', letterPronunciation: 'ṭa', pronunciation: 'tamaatar', word: 'टमाटर', translation: 'Tomato', image: Tomato },
    { letter: 'ठ', letterPronunciation: 'ṭha', pronunciation: 'thag', word: 'ठग', translation: 'Trickster', image: Trickster },
    { letter: 'ड', letterPronunciation: 'ḍa', pronunciation: 'damroo', word: 'डम्रू', translation: 'Small Drum', image: SmallDrum },
    { letter: 'ढ', letterPronunciation: 'ḍha', pronunciation: 'dhol', word: 'ढोल', translation: 'Drum', image: Drum },
    { letter: 'ण', letterPronunciation: 'ṇa', pronunciation: 'bāɳ', word: 'बाण', translation: 'Arrow', image: Arrow },
    { letter: 'त', letterPronunciation: 'ta', pronunciation: 'taalaa', word: 'ताला', translation: 'Lock', image: Lock },
    { letter: 'थ', letterPronunciation: 'tha', pronunciation: 'thaali', word: 'थाली', translation: 'Plate', image: Plate },
    { letter: 'द', letterPronunciation: 'da', pronunciation: 'dawa', word: 'दवा', translation: 'Medicine', image: Medicine },
    { letter: 'ध', letterPronunciation: 'dha', pronunciation: 'Dhanuṣa', word: 'धनुष', translation: 'Bow', image: Bow },
    { letter: 'न', letterPronunciation: 'na', pronunciation: 'nal', word: 'नल', translation: 'Tap', image: Tap },
    { letter: 'प', letterPronunciation: 'pa', pronunciation: 'patang', word: 'पतंग', translation: 'Kite', image: Kite },
    { letter: 'फ', letterPronunciation: 'pha', pronunciation: 'Phūla', word: 'फुल', translation: 'Flower', image: Flower },
    { letter: 'ब', letterPronunciation: 'ba', pronunciation: 'bandar', word: 'बंदर', translation: 'Monkey', image: Monkey },
    { letter: 'भ', letterPronunciation: 'bha', pronunciation: 'Bhālu', word: 'भालु', translation: 'Bear', image: Bear },
    { letter: 'म', letterPronunciation: 'ma', pronunciation: 'machhli', word: 'मछली', translation: 'Fish', image: Fish },
    { letter: 'य', letterPronunciation: 'ya', pronunciation: 'yaan', word: 'यान', translation: 'Vehicle', image: Vehicle },
    { letter: 'र', letterPronunciation: 'ra', pronunciation: 'rath', word: 'रथ', translation: 'Chariot', image: Chariot },
    { letter: 'ल', letterPronunciation: 'la', pronunciation: 'Lahasun', word: 'लहसुन', translation: 'Garlic', image: Garlic },
    { letter: 'व', letterPronunciation: 'va', pronunciation: 'Vakila', word: 'वकील', translation: 'Lawyer', image: Lawyer },
    { letter: 'श', letterPronunciation: 'sha', pronunciation: 'shankh', word: 'शंख', translation: 'Conch shell', image: ConchShell },
    { letter: 'ष', letterPronunciation: 'ṣa', pronunciation: 'ṣaṭkoṇa', word: 'षट्कोण', translation: 'Hexagon', image: Hexagon },
    { letter: 'स', letterPronunciation: 'sa', pronunciation: 'saanp', word: 'साँप', translation: 'Snake', image: Snake },
    { letter: 'ह', letterPronunciation: 'ha', pronunciation: 'haathi', word: 'हाथी', translation: 'Elephant', image: Elephant },
    { letter: 'क्ष', letterPronunciation: 'kṣa', pronunciation: 'kshatriya', word: 'क्षत्रिय', translation: 'Warrior', image: Warrior },
    { letter: 'त्र', letterPronunciation: 'tra', pronunciation: 'trishool', word: 'त्रिशुल', translation: 'Trident', image: Trident },
    { letter: 'ज्ञ', letterPronunciation: 'gya', pronunciation: 'gyaan', word: 'ज्ञान', translation: 'Knowledge', image: Knowledge },
];

export const numberCards: FlashCardType[] = [
    { letter: "०", word: "शून्य", letterPronunciation: "shoon-ya", pronunciation: "shoon-ya", image: Zero, translation: "Zero" },
    { letter: "१", word: "एक", letterPronunciation: "ek", pronunciation: "ek", image: One, translation: "One" },
    { letter: "२", word: "दो", letterPronunciation: "though", pronunciation: "though", image: Two, translation: "Two" },
    { letter: "३", word: "तीन", letterPronunciation: "teen", pronunciation: "teen", image: Three, translation: "Three" },
    { letter: "४", word: "चार", letterPronunciation: "chaar", pronunciation: "chaar", image: Four, translation: "Four" },
    { letter: "५", word: "पाँच", letterPronunciation: "paanch", pronunciation: "paanch", image: Five, translation: "Five" },
    { letter: "६", word: "छः", letterPronunciation: "chhah", pronunciation: "chhah", image: Six, translation: "Six" },
    { letter: "७", word: "सात", letterPronunciation: "saat", pronunciation: "saat", image: Seven, translation: "Seven" },
    { letter: "८", word: "आठ", letterPronunciation: "aath", pronunciation: "aath", image: Eight, translation: "Eight" },
    { letter: "९", word: "नौ", letterPronunciation: "no", pronunciation: "no", image: Nine, translation: "Nine" },
];
