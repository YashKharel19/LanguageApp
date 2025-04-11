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
import Machha from "../assets/images/nepali/Machha.svg";
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

console.log(Kachuwa)
export const consonantCards: FlashCardType[] = [
  { letter: "क", word: "कछुवा", pronunciation: "Kachuvā", image: Kachuwa, translation: "Tortoise" },
  { letter: "ख", word: "खरायो", pronunciation: "Kharāyō", image: Kharayo, translation: "Rabbit" },
  { letter: "ग", word: "गमला", pronunciation: "Gamalā", image: Gamala, translation: "Pot" },
  { letter: "घ", word: "घर", pronunciation: "Ghara", image: Ghara, translation: "House" },
  { letter: "ङ", word: "नङ", pronunciation: "Naṅa", image: Nanga, translation: "Nail" },
  { letter: "च", word: "चरा", pronunciation: "Carā", image: Chara, translation: "Bird" },
  { letter: "छ", word: "छाता", pronunciation: "Chātā", image: Chhata, translation: "Umbrella" },
  { letter: "ज", word: "जरायो", pronunciation: "Jarāyo", image: Jarayo, translation: "Deer" },
  { letter: "झ", word: "झरना", pronunciation: "Jharanā", image: Jharana, translation: "Waterfall" },
  { letter: "ञ", word: "ञ्याउगोरु सिङ्गे ञ", pronunciation: "", image: Nyau, translation: "" },
  { letter: "ट", word: "टपरी", pronunciation: "Top-uh-ree", image: Tapari, translation: "Leaf Plate" },
  { letter: "ठ", word: "ठेला", pronunciation: "Thela", image: Thela, translation: "Cart" },
  { letter: "ड", word: "डमरु", pronunciation: "Ḍamaru", image: Damru, translation: "Small Drum" },
  { letter: "ढ", word: "ढुङ्गा", pronunciation: "Ḍhuṅgā", image: Dhunga, translation: "Stone" },
  { letter: "ण", word: "वाण", pronunciation: "baan", image: Baan, translation: "Arrow" },
  { letter: "त", word: "तराजु", pronunciation: "Tārāju", image: Taraju, translation: "Weighing Scale" },
  { letter: "थ", word: "थैली", pronunciation: "Thā'ilī", image: Thaili, translation: "Pouch" },
  { letter: "द", word: "दमकल", pronunciation: "Damakala", image: Damkal, translation: "Fire Brigade" },
  { letter: "ध", word: "धनुष", pronunciation: "Dhanuṣa", image: Dhanush, translation: "Bow" },
  { letter: "न", word: "नाक", pronunciation: "Nāka", image: Naka, translation: "Nose" },
  { letter: "प", word: "परेवा", pronunciation: "Parēvā", image: Parewa, translation: "Pigeon" },
  { letter: "फ", word: "फुल", pronunciation: "Phūla", image: Phool, translation: "Flower" },
  { letter: "ब", word: "बच्चा", pronunciation: "Baccā", image: Baccha, translation: "Baby" },
  { letter: "भ", word: "भालु", pronunciation: "Bhālu", image: Bhalu, translation: "Bear" },
  { letter: "म", word: "माछा", pronunciation: "Māchā", image: Machha, translation: "Fish" },
  { letter: "य", word: "यान", pronunciation: "yaan", image: Yaan, translation: "Vehicle" },
  { letter: "र", word: "रथ", pronunciation: "rath", image: Rath, translation: "Chariot" },
  { letter: "ल", word: "लसुन", pronunciation: "Lasuna", image: Lasun, translation: "Garlic" },
  { letter: "व", word: "वकिल", pronunciation: "Vakila", image: Vakil, translation: "Lawyer" },
  { letter: "श", word: "शंख", pronunciation: "shankh", image: Shankha, translation: "Shell" },
  { letter: "ष", word: "षट्कोण", pronunciation: "ṣaṭkoṇa", image: Shatkona, translation: "Hexagon" },
  { letter: "स", word: "सर्प", pronunciation: "Sarpa", image: Sarp, translation: "Snake" },
  { letter: "ह", word: "हलो", pronunciation: "Halō", image: Halo, translation: "Plow" },
  { letter: "क्ष", word: "क्षत्रिय", pronunciation: "kṣetrīya", image: Kshatriya, translation: "Warrior" },
  { letter: "त्र", word: "त्रिशुल", pronunciation: "Triśūla", image: Trishul, translation: "Trident" },
  { letter: "ज्ञ", word: "ज्ञान", pronunciation: "Jñāna", image: Gyan, translation: "Knowledge" }
];
