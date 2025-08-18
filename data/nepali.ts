// assets/data/consonants.ts

// Import all 36 local SVG files manually
import Kachuwa from "../assets/images/nepali/Kachuwa.svg";
import Kharayo from "../assets/images/nepali/Kharayo.svg";
import Gamala from "../assets/images/nepali/Gamala.svg";
import Ghara from "../assets/images/nepali/Ghara.svg";
import Nanga from "../assets/images/nepali/Nang.svg";
import Chara from "../assets/images/nepali/Cara.svg";
import Chhata from "../assets/images/nepali/Chata.svg";
import Jarayo from "../assets/images/nepali/Jarayo.svg";
import Jharana from "../assets/images/nepali/Jharna.svg";
import Nyau from "../assets/images/nepali/Goru.svg";
import Tapari from "../assets/images/nepali/Tapari.svg";
import Thela from "../assets/images/nepali/Thela.svg";
import Damru from "../assets/images/nepali/Damaru.svg";
import Dhunga from "../assets/images/nepali/Dhunga.svg";
import Baan from "../assets/images/nepali/Baan.svg";
import Taraju from "../assets/images/nepali/Taraju.svg";
import Thaili from "../assets/images/nepali/Thaili.svg";
import Damkal from "../assets/images/nepali/Damkal.svg";
import Dhanush from "../assets/images/nepali/Dhanush.svg";
import Naka from "../assets/images/nepali/Naak.svg";
import Parewa from "../assets/images/nepali/Parewa.svg";
import Phool from "../assets/images/nepali/Fhul.svg";
import Baccha from "../assets/images/nepali/Bachha.svg";
import Bhalu from "../assets/images/nepali/Bhalu.svg";
import Machha from "../assets/images/Fish.svg";
import Yaan from "../assets/images/nepali/Yaan.svg";
import Rath from "../assets/images/nepali/Ratha.svg";
import Lasun from "../assets/images/nepali/Lasun.svg";
import Vakil from "../assets/images/nepali/Wakil.svg";
import Shankha from "../assets/images/nepali/Sankha.svg";
import Shatkona from "../assets/images/nepali/Satkon.svg";
import Sarp from "../assets/images/nepali/Sarpa.svg";
import Halo from "../assets/images/nepali/Halo.svg";
import Kshatriya from "../assets/images/nepali/Kshetriya.svg";
import Trishul from "../assets/images/nepali/Trishul.svg";
import Gyan from "../assets/images/nepali/Gyan.svg";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
  { letter: "क", word: "कछुवा", letterPronunciation: "ka", pronunciation: "kachuvā", image: Kachuwa, translation: "Tortoise" },
  { letter: "ख", word: "खरायो", letterPronunciation: "kha", pronunciation: "kharāyō", image: Kharayo, translation: "Rabbit" },
  { letter: "ग", word: "गमला", letterPronunciation: "ga", pronunciation: "gamalā", image: Gamala, translation: "Pot" },
  { letter: "घ", word: "घर", letterPronunciation: "gha", pronunciation: "ghara", image: Ghara, translation: "House" },
  { letter: "ङ", word: "नङ", letterPronunciation: "ṅa", pronunciation: "naṅa", image: Nanga, translation: "Nail" },
  { letter: "च", word: "चरा", letterPronunciation: "cha", pronunciation: "carā", image: Chara, translation: "Bird" },
  { letter: "छ", word: "छाता", letterPronunciation: "chha", pronunciation: "chātā", image: Chhata, translation: "Umbrella" },
  { letter: "ज", word: "जरायो", letterPronunciation: "ja", pronunciation: "jarāyo", image: Jarayo, translation: "Deer" },
  { letter: "झ", word: "झरना", letterPronunciation: "jha", pronunciation: "jharanā", image: Jharana, translation: "Waterfall" },
  { letter: "ञ", word: "ञ्याउगोरु सिङ्गे ञ", letterPronunciation: "ña", pronunciation: "ña", image: Nyau, translation: "" },
  { letter: "ट", word: "टपरी", letterPronunciation: "ṭa", pronunciation: "ṭapari", image: Tapari, translation: "Leaf Plate" },
  { letter: "ठ", word: "ठेला", letterPronunciation: "ṭha", pronunciation: "thela", image: Thela, translation: "Cart" },
  { letter: "ड", word: "डमरु", letterPronunciation: "ḍa", pronunciation: "ḍamaru", image: Damru, translation: "Small Drum" },
  { letter: "ढ", word: "ढुङ्गा", letterPronunciation: "ḍha", pronunciation: "ḍhuṅgā", image: Dhunga, translation: "Stone" },
  { letter: "ण", word: "वाण", letterPronunciation: "ṇa", pronunciation: "bāṇa", image: Baan, translation: "Arrow" },
  { letter: "त", word: "तराजु", letterPronunciation: "ta", pronunciation: "tārāju", image: Taraju, translation: "Weighing Scale" },
  { letter: "थ", word: "थैली", letterPronunciation: "tha", pronunciation: "thā'ilī", image: Thaili, translation: "Pouch" },
  { letter: "द", word: "दमकल", letterPronunciation: "da", pronunciation: "damakala", image: Damkal, translation: "Fire Brigade" },
  { letter: "ध", word: "धनुष", letterPronunciation: "dha", pronunciation: "dhanuṣa", image: Dhanush, translation: "Bow" },
  { letter: "न", word: "नाक", letterPronunciation: "na", pronunciation: "nāka", image: Naka, translation: "Nose" },
  { letter: "प", word: "परेवा", letterPronunciation: "pa", pronunciation: "parēvā", image: Parewa, translation: "Pigeon" },
  { letter: "फ", word: "फुल", letterPronunciation: "pha", pronunciation: "phūla", image: Phool, translation: "Flower" },
  { letter: "ब", word: "बच्चा", letterPronunciation: "ba", pronunciation: "baccā", image: Baccha, translation: "Baby" },
  { letter: "भ", word: "भालु", letterPronunciation: "bha", pronunciation: "bhālu", image: Bhalu, translation: "Bear" },
  { letter: "म", word: "माछा", letterPronunciation: "ma", pronunciation: "māchā", image: Machha, translation: "Fish" },
  { letter: "य", word: "यान", letterPronunciation: "ya", pronunciation: "yān", image: Yaan, translation: "Vehicle" },
  { letter: "र", word: "रथ", letterPronunciation: "ra", pronunciation: "rath", image: Rath, translation: "Chariot" },
  { letter: "ल", word: "लसुन", letterPronunciation: "la", pronunciation: "lasuna", image: Lasun, translation: "Garlic" },
  { letter: "व", word: "वकिल", letterPronunciation: "va", pronunciation: "vakila", image: Vakil, translation: "Lawyer" },
  { letter: "श", word: "शंख", letterPronunciation: "sha", pronunciation: "shaṅkha", image: Shankha, translation: "Shell" },
  { letter: "ष", word: "षट्कोण", letterPronunciation: "ṣa", pronunciation: "ṣaṭkoṇa", image: Shatkona, translation: "Hexagon" },
  { letter: "स", word: "सर्प", letterPronunciation: "sa", pronunciation: "sarpa", image: Sarp, translation: "Snake" },
  { letter: "ह", word: "हलो", letterPronunciation: "ha", pronunciation: "halō", image: Halo, translation: "Plow" },
  { letter: "क्ष", word: "क्षत्रिय", letterPronunciation: "kṣa", pronunciation: "kṣetrīya", image: Kshatriya, translation: "Warrior" },
  { letter: "त्र", word: "त्रिशुल", letterPronunciation: "tra", pronunciation: "triśūla", image: Trishul, translation: "Trident" },
  { letter: "ज्ञ", word: "ज्ञान", letterPronunciation: "gya", pronunciation: "jñāna", image: Gyan, translation: "Knowledge" }
];

