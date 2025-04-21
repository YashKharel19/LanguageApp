// Import all 47 local SVG files manually
import Arasa from "../assets/images/kannada/Arasa.svg";
import Aane from "../assets/images/kannada/Aane.svg";
import Ili from "../assets/images/kannada/Ili.svg";
import Mane from "../assets/images/nepali/Ghara.svg";
import Chatri from "../assets/images/nepali/Chata.svg";
import Yedi from "../assets/images/kannada/Yedi.svg";
import Ele from "../assets/images/kannada/Ele.svg";
import Jari from "../assets/images/nepali/Jharna.svg";
import Ratha from "../assets/images/nepali/Ratha.svg";
import Dhanasuu from "../assets/images/nepali/Dhanush.svg";
import Shatkona from "../assets/images/nepali/Satkon.svg";
import Ontey from "../assets/images/kannada/Ontey.svg";
import Hadagu from "../assets/images/kannada/Hadagu.svg";
import Topi from "../assets/images/kannada/Topi.svg";
import Oota from '../assets/images/kannada/Oota.svg';
import Sara from "../assets/images/kannada/Sara.svg";
import Phala from '../assets/images/kannada/Phala.svg';
import Dhana from '../assets/images/kannada/Arasa.svg';

import Eejoo from '../assets/images/kannada/Arasa.svg';
import Ungura from '../assets/images/kannada/Arasa.svg';
import Aidu from '../assets/images/kannada/Arasa.svg';
import Odu from '../assets/images/kannada/Arasa.svg';
import Aushadhi from '../assets/images/kannada/Arasa.svg';
import Um from '../assets/images/kannada/Arasa.svg';
import Auhvaana from '../assets/images/kannada/Arasa.svg';
import Kamala from '../assets/images/kannada/Arasa.svg';
import Khadga from '../assets/images/kannada/Arasa.svg';
import Godhi from '../assets/images/kannada/Arasa.svg';
import Ghante from '../assets/images/kannada/Arasa.svg';
import Nga from '../assets/images/kannada/Arasa.svg';
import Chamacha from '../assets/images/kannada/Arasa.svg';
import Jala from '../assets/images/kannada/Arasa.svg';
import Nya from '../assets/images/kannada/Arasa.svg';
import Takka from '../assets/images/kannada/Arasa.svg';
import Dabbi from '../assets/images/kannada/Arasa.svg';
import Dakke from '../assets/images/kannada/Arasa.svg';
import Naa from '../assets/images/kannada/Arasa.svg';
import Taayi from '../assets/images/kannada/Arasa.svg';
import ThalaThala from '../assets/images/kannada/Arasa.svg';
import Nadi from '../assets/images/kannada/Arasa.svg';
import Padaka from '../assets/images/kannada/Arasa.svg';
import Bale from '../assets/images/kannada/Arasa.svg';
import Bharani from '../assets/images/kannada/Arasa.svg';
import Yantra from '../assets/images/kannada/Arasa.svg';
import Langa from '../assets/images/kannada/Arasa.svg';
import Vana from '../assets/images/kannada/Arasa.svg';
import Shakti from '../assets/images/kannada/Arasa.svg';



import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ಅ", word: "ಅರಸ", pronunciation: "Arasa", image: Arasa, translation: "King" },
    { letter: "ಆ", word: "ಆನೆ", pronunciation: "Āne", image: Aane, translation: "Elephant" },
    { letter: "ಇ", word: "ಇಲಿ", pronunciation: "Ili", image: Ili, translation: "Mouse" },
    { letter: "ಈ", word: "ಈಜು", pronunciation: "eeju", image: Eejoo, translation: "Swim" },
    { letter: "ಉ", word: "ಉಂಗುರ", pronunciation: "ungura", image: Ungura, translation: "Ring" },
    { letter: "ಊ", word: "ಊಟ", pronunciation: "oota", image: Oota, translation: "Meal" },
    { letter: "ಎ", word: "ಎಲೆ", pronunciation: "yele", image: Ele, translation: "Leaf" },
    { letter: "ಏ", word: "ಏಡಿ", pronunciation: "yedi", image: Yedi, translation: "Crab" },
    { letter: "ಐ", word: "ಐದು", pronunciation: "Aidu", image: Aidu, translation: "Five" },
    { letter: "ಒ", word: "ಒಂಟೆ", pronunciation: "ontey", image: Ontey, translation: "Camel" },
    { letter: "ಓ", word: "ಓದು", pronunciation: "Ōdu", image: Odu, translation: "Read" },
    { letter: "ಔ", word: "ಔಷಧಿ", pronunciation: "Auṣhadhi", image: Aushadhi, translation: "Medicine" },
    { letter: "ಅಂ", word: "No word", pronunciation: "um", image: Um, translation: "" },
    { letter: "ಅ:", word: "ಆಹ್ವಾನ", pronunciation: "auhvaana", image: Auhvaana, translation: "Invitation" },
    { letter: "ಕ", word: "ಕಮಲ", pronunciation: "Kamala", image: Kamala, translation: "Lotus" },
    { letter: "ಖ", word: "ಖಡ್ಗ", pronunciation: "Khaḍga", image: Khadga, translation: "Sword" },
    { letter: "ಗ", word: "ಗೋಧಿ", pronunciation: "Gōdhi", image: Godhi, translation: "Wheat" },
    { letter: "ಘ", word: "ಘಂಟೆ", pronunciation: "Ghaṇṭe", image: Ghante, translation: "Bell" },
    { letter: "ಙ", word: "No word", pronunciation: "(ṅa)", image: Nga, translation: "" },
    { letter: "ಚ", word: "ಚಮಚ", pronunciation: "chamacha", image: Chamacha, translation: "Spoon" },
    { letter: "ಛ", word: "ಛತ್ರಿ", pronunciation: "chatri", image: Chatri, translation: "Umbrella" },
    { letter: "ಜ", word: "ಜಲ", pronunciation: "Jala", image: Jala, translation: "Water" },
    { letter: "ಝ", word: "ಝರಿ", pronunciation: "jari", image: Jari, translation: "Water Falls" },
    { letter: "ಞ", word: "No word", pronunciation: "ña", image: Nya, translation: "" },
    { letter: "ಟ", word: "ಟೋಪಿ", pronunciation: "Ṭōpi", image: Topi, translation: "Hat" },
    { letter: "ಠ", word: "ಠಕ್ಕ", pronunciation: "takka", image: Takka, translation: "Thief" },
    { letter: "ಡ", word: "ಡಬ್ಬಿ", pronunciation: "Ḍabbi", image: Dabbi, translation: "Box" },
    { letter: "ಢ", word: "ಢಕ್ಕೆ", pronunciation: "dakke", image: Dakke, translation: "drum" },
    { letter: "ಣ", word: "ನೊಣ", pronunciation: "naa", image: Naa, translation: "housefly" },
    { letter: "ತ", word: "ತಾಯಿ", pronunciation: "Tāayi", image: Taayi, translation: "Mother" },
    { letter: "ಥ", word: "ಥಳಥಳ", pronunciation: "thala thala", image: ThalaThala, translation: "shine" },
    { letter: "ದ", word: "ದನ", pronunciation: "Dhana", image: Dhana, translation: "Cow" },
    { letter: "ಧ", word: "ಧನಸ್ಸು", pronunciation: "dhanasuu", image: Dhanasuu, translation: "bow" },
    { letter: "ನ", word: "ನಮಸ್ಕಾರ", pronunciation: "nadi", image: Nadi, translation: "river" },
    { letter: "ಪ", word: "ಪದ", pronunciation: "Padaka", image: Padaka, translation: "Medal" },
    { letter: "ಫ", word: "ಫಲ", pronunciation: "phala", image: Phala, translation: "Fruit" },
    { letter: "ಬ", word: "ಬಳೆ", pronunciation: "bale", image: Bale, translation: "bangle" },
    { letter: "ಭ", word: "ಭರಣಿ", pronunciation: "Bharani", image: Bharani, translation: "Jar" },
    { letter: "ಮ", word: "ಮನೆ", pronunciation: "Mane", image: Mane, translation: "House" },
    { letter: "ಯ", word: "ಯಶಸ್ಸು", pronunciation: "yantra", image: Yantra, translation: "machine" },
    { letter: "ರ", word: "ರಥ", pronunciation: "Ratha", image: Ratha, translation: "Chariot" },
    { letter: "ಲ", word: "ಲಂಗ", pronunciation: "langa", image: Langa, translation: "Skirt" },
    { letter: "ವ", word: "ವೃಕ್ಷ", pronunciation: "vana", image: Vana, translation: "Forest" },
    { letter: "ಶ", word: "ಶಕ್ತಿ", pronunciation: "Shakti", image: Shakti, translation: "Power" },
    { letter: "ಷ", word: "ಷಟ್ಕೋನ", pronunciation: "Shatkona", image: Shatkona, translation: "Hexagon" },
    { letter: "ಸ", word: "ಸೂರ್ಯ", pronunciation: "Sara", image: Sara, translation: "Neklace" },
    { letter: "ಹ", word: "ಹಡಗು", pronunciation: "hadagu", image: Hadagu, translation: "Ship" },
];

