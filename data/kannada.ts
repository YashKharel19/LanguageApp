// assets/data/consonants.ts
import Arasa from "../assets/images/kannada/Arasa.svg";
import Elephant from "../assets/images/Elephant.svg";
import Mouse from "../assets/images/Mouse.svg";
import Ungura from "../assets/images/kannada/Ungura.svg";
import Meal from "../assets/images/kannada/Oota.svg";
import What from "../assets/images/What.svg";
import Hexagon from "../assets/images/nepali/Satkon.svg";
import Aidu from "../assets/images/kannada/Aidu.svg";
import Camel from "../assets/images/Camel.svg";
import Read from "../assets/images/kannada/Odu.svg";
import Medicine from "../assets/images/kannada/Aushadhi.svg";
import Lotus from "../assets/images/Lotus.svg";
import Khadga from "../assets/images/kannada/Khadga.svg";
import Wheat from "../assets/images/kannada/Godhi.svg";
import Bell from "../assets/images/Bell.svg";
import Chatri from "../assets/images/nepali/Chata.svg";
import Water from "../assets/images/Glasswater.svg";
import Bow from "../assets/images/nepali/Dhanush.svg";
import Chamacha from "../assets/images/Spoon.svg";
import Ele from "../assets/images/Leaf.svg";
import Vana from "../assets/images/Forest.svg";
import Bharani from "../assets/images/Jar.svg";
import Box from "../assets/images/kannada/Dabbi.svg";
import Mother from "../assets/images/Mother.svg";
import Waterfalls from "../assets/images/nepali/Jharna.svg";
import Langa from "../assets/images/kannada/Langa.svg";
import House from "../assets/images/nepali/Ghara.svg";
import Yantra from "../assets/images/kannada/Yantra.svg";
import Chariot from "../assets/images/nepali/Ratha.svg";
import Sara from "../assets/images/Necklace.svg";
import Ship from "../assets/images/Ship.svg";
import Power from "../assets/images/Power.svg";
import Yedi from "../assets/images/Crab.svg";
import Dhana from "../assets/images/kannada/Dhana.svg";
import Bale from "../assets/images/Bangle.svg";
import Topi from "../assets/images/kannada/Topi.svg";
import Padaka from "../assets/images/kannada/Padaka.svg";
import Fruits from "../assets/images/Fruits.svg";
import Nadi from "../assets/images/River.svg";
import Thief from "../assets/images/Thief.svg";
import Swim from "../assets/images/Swim.svg";
import Invitation from "../assets/images/Invitation.svg";
import Shine from "../assets/images/Shine.svg";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ಅ", word: "ಅರಸ", pronunciation: "Arasa", image: Arasa, translation: "King" },
    { letter: "ಆ", word: "ಆನೆ", pronunciation: "Āne", image: Elephant, translation: "Elephant" },
    { letter: "ಇ", word: "ಇಲಿ", pronunciation: "Ili", image: Mouse, translation: "Mouse" },
    { letter: "ಈ", word: "ಈಜು", pronunciation: "Eeju", image: Swim, translation: "Swim" },
    { letter: "ಉ", word: "ಉಂಗುರ", pronunciation: "Ungura", image: Ungura, translation: "Ring" },
    { letter: "ಊ", word: "ಊಟ", pronunciation: "Oota", image: Meal, translation: "Meal" },
    { letter: "ಎ", word: "ಎಲೆ", pronunciation: "Yele", image: Ele, translation: "Leaf" },
    { letter: "ಏ", word: "ಏಡಿ", pronunciation: "Yedi", image: Yedi, translation: "Crab" },
    { letter: "ಐ", word: "ಐದು", pronunciation: "Aidu", image: Aidu, translation: "Five" },
    { letter: "ಒ", word: "ಒಂಟೆ", pronunciation: "Ontey", image: Camel, translation: "Camel" },
    { letter: "ಓ", word: "ಓದು", pronunciation: "Ōdu", image: Read, translation: "Read" },
    { letter: "ಔ", word: "ಔಷಧಿ", pronunciation: "Auṣadhi", image: Medicine, translation: "Medicine" },
    { letter: "ಅಂ", word: "", pronunciation: "", image: What, translation: "" },
    { letter: "ಅ:", word: "ಆಹ್ವಾನ", pronunciation: "auhvaana", image: Invitation, translation: "Invitation" },
    { letter: "ಕ", word: "ಕಮಲ", pronunciation: "Kamala", image: Lotus, translation: "Lotus" },
    { letter: "ಖ", word: "ಖಡ್ಗ", pronunciation: "Khaḍga", image: Khadga, translation: "Sword" },
    { letter: "ಗ", word: "ಗೋಧಿ", pronunciation: "Gōdhi", image: Wheat, translation: "Wheat" },
    { letter: "ಘ", word: "ಘಂಟೆ", pronunciation: "Ghaṇṭe", image: Bell, translation: "Bell" },
    { letter: "ಙ", word: "", pronunciation: "", image: What, translation: "" },
    { letter: "ಚ", word: "ಚಮಚ", pronunciation: "Chamacha", image: Chamacha, translation: "Spoon" },
    { letter: "ಛ", word: "ಛತ್ರಿ", pronunciation: "Chatri", image: Chatri, translation: "Umbrella" },
    { letter: "ಜ", word: "ಜಲ", pronunciation: "Jala", image: Water, translation: "Water" },
    { letter: "ಝ", word: "ಝರಿ", pronunciation: "Jari", image: Waterfalls, translation: "WaterFalls" },
    { letter: "ಞ", word: "", pronunciation: "", image: What, translation: "" },
    { letter: "ಟ", word: "ಟೋಪಿ", pronunciation: "Topi", image: Topi, translation: "Hat" },
    { letter: "ಠ", word: "ಠಕ್ಕ", pronunciation: "Takka", image: Thief, translation: "Thief" },
    { letter: "ಡ", word: "ಡಬ್ಬಿ", pronunciation: "Ḍabbi", image: Box, translation: "Box" },
    { letter: "ತ", word: "ತಾಯಿ", pronunciation: "Tāayi", image: Mother, translation: "Mother" },
    { letter: "ಥ", word: "ಥಳಥಳ", pronunciation: "Thala", image: Shine, translation: "Shine" },
    { letter: "ದ", word: "ದನ", pronunciation: "Dhana", image: Dhana, translation: "Cow" },
    { letter: "ಧ", word: "ಧನಸ್ಸು", pronunciation: "Dhanasuu", image: Bow, translation: "Bow" },
    { letter: "ನ", word: "ನದಿ", pronunciation: "Nadi", image: Nadi, translation: "River" },
    { letter: "ಪ", word: "ಪದಕ", pronunciation: "Padaka", image: Padaka, translation: "Medal" },
    { letter: "ಫ", word: "ಫಲ", pronunciation: "Phala", image: Fruits, translation: "Fruit" },
    { letter: "ಬ", word: "ಬಳೆ", pronunciation: "Bale", image: Bale, translation: "Bangle" },
    { letter: "ಭ", word: "ಭರಣಿ", pronunciation: "Bharani", image: Bharani, translation: "Jar" },
    { letter: "ಮ", word: "ಮನೆ", pronunciation: "Mane", image: House, translation: "House" },
    { letter: "ಯ", word: "ಯಂತ್ರ", pronunciation: "Yantra", image: Yantra, translation: "Machine" },
    { letter: "ರ", word: "ರಥ", pronunciation: "Ratha", image: Chariot, translation: "Chariot" },
    { letter: "ಲ", word: "ಲಂಗ", pronunciation: "Langa", image: Langa, translation: "Skirt" },
    { letter: "ವ", word: "ವನ", pronunciation: "Vana", image: Vana, translation: "Forest" },
    { letter: "ಶ", word: "ಶಕ್ತಿ", pronunciation: "Shakti", image: Power, translation: "Power" },
    { letter: "ಷ", word: "ಷಟ್ಕೋನ", pronunciation: "Shatkona", image: Hexagon, translation: "Hexagon" },
    { letter: "ಸ", word: "ಸರ", pronunciation: "Sara", image: Sara, translation: "Necklace" },
    { letter: "ಹ", word: "ಹಡಗು", pronunciation: "Hadagu", image: Ship, translation: "Ship" },
];
