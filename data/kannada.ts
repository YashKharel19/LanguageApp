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
import Read from "../assets/images/Read.svg";
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
import Drum from "../assets/images/Drum.svg";
import Housefly from "../assets/images/Housefly.svg";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ಅ", letterPronunciation: "ah", word: "ಅರಸ", pronunciation: "Arasa", image: Arasa, translation: "King" },
    { letter: "ಆ", letterPronunciation: "aaah", word: "ಆನೆ", pronunciation: "Āne", image: Elephant, translation: "Elephant" },
    { letter: "ಇ", letterPronunciation: "yee", word: "ಇಲಿ", pronunciation: "Ili", image: Mouse, translation: "Mouse" },
    { letter: "ಈ", letterPronunciation: "yeee", word: "ಈಜು", pronunciation: "Eeju", image: Swim, translation: "Swim" },
    { letter: "ಉ", letterPronunciation: "ou", word: "ಉಂಗುರ", pronunciation: "Ungura", image: Ungura, translation: "Ring" },
    { letter: "ಊ", letterPronunciation: "ouu", word: "ಊಟ", pronunciation: "Oota", image: Meal, translation: "Meal" },
    { letter: "ಎ", letterPronunciation: "eh", word: "ಎಲೆ", pronunciation: "Yele", image: Ele, translation: "Leaf" },
    { letter: "ಏ", letterPronunciation: "ae", word: "ಏಡಿ", pronunciation: "Yedi", image: Yedi, translation: "Crab" },
    { letter: "ಐ", letterPronunciation: "ai", word: "ಐದು", pronunciation: "Aidu", image: Aidu, translation: "Five" },
    { letter: "ಒ", letterPronunciation: "oh", word: "ಒಂಟೆ", pronunciation: "Ontey", image: Camel, translation: "Camel" },
    { letter: "ಓ", letterPronunciation: "ooh", word: "ಓದು", pronunciation: "Ōdu", image: Read, translation: "Read" },
    { letter: "ಔ", letterPronunciation: "auh", word: "ಔಷಧಿ", pronunciation: "Auṣadhi", image: Medicine, translation: "Medicine" },
    { letter: "ಅಂ", letterPronunciation: "umm", word: "", pronunciation: "Um", image: What, translation: "" },
    { letter: "ಅ:", letterPronunciation: "uhḥ", word: "ಆಹ್ವಾನ", pronunciation: "auhvaana", image: Invitation, translation: "Invitation" },
    { letter: "ಕ", letterPronunciation: "Ka", word: "ಕಮಲ", pronunciation: "Kamala", image: Lotus, translation: "Lotus" },
    { letter: "ಖ", letterPronunciation: "Kha", word: "ಖಡ್ಗ", pronunciation: "Khaḍga", image: Khadga, translation: "Sword" },
    { letter: "ಗ", letterPronunciation: "Ga", word: "ಗೋಧಿ", pronunciation: "Gōdhi", image: Wheat, translation: "Wheat" },
    { letter: "ಘ", letterPronunciation: "Gha", word: "ಘಂಟೆ", pronunciation: "Ghaṇṭe", image: Bell, translation: "Bell" },
    { letter: "ಙ", letterPronunciation: "ṅa", word: "", pronunciation: "(ṅa)", image: What, translation: "" },
    { letter: "ಚ", letterPronunciation: "Ca", word: "ಚಮಚ", pronunciation: "Chamacha", image: Chamacha, translation: "Spoon" },
    { letter: "ಛ", letterPronunciation: "Cha", word: "ಛತ್ರಿ", pronunciation: "Chatri", image: Chatri, translation: "Umbrella" },
    { letter: "ಜ", letterPronunciation: "Ja", word: "ಜಲ", pronunciation: "Jala", image: Water, translation: "Water" },
    { letter: "ಝ", letterPronunciation: "Jha", word: "ಝರಿ", pronunciation: "Jari", image: Waterfalls, translation: "WaterFalls" },
    { letter: "ಞ", letterPronunciation: "ña", word: "", pronunciation: "ña", image: What, translation: "" },
    { letter: "ಟ", letterPronunciation: "Ta", word: "ಟೋಪಿ", pronunciation: "Topi", image: Topi, translation: "Hat" },
    { letter: "ಠ", letterPronunciation: "Tha", word: "ಠಕ್ಕ", pronunciation: "Takka", image: Thief, translation: "Thief" },
    { letter: "ಡ", letterPronunciation: "Ḍa", word: "ಡಬ್ಬಿ", pronunciation: "Ḍabbi", image: Box, translation: "Box" },
    { letter: "ಢ", letterPronunciation: "Ḍha", word: "ಢಕ್ಕೆ", pronunciation: "Ḍakke", image: Drum, translation: "Drum" },
    { letter: "ಣ", letterPronunciation: "Na", word: "ನೊಣ", pronunciation: "Naa", image: Housefly, translation: "Housefly" },
    { letter: "ತ", letterPronunciation: "Ta", word: "ತಾಯಿ", pronunciation: "Tāayi", image: Mother, translation: "Mother" },
    { letter: "ಥ", letterPronunciation: "Tha", word: "ಥಳಥಳ", pronunciation: "Thala Thala", image: Shine, translation: "Shine" },
    { letter: "ದ", letterPronunciation: "Da", word: "ದನ", pronunciation: "Dhana", image: Dhana, translation: "Cow" },
    { letter: "ಧ", letterPronunciation: "Dha", word: "ಧನಸ್ಸು", pronunciation: "Dhanasuu", image: Bow, translation: "Bow" },
    { letter: "ನ", letterPronunciation: "Na", word: "ನದಿ", pronunciation: "Nadi", image: Nadi, translation: "River" },
    { letter: "ಪ", letterPronunciation: "Pa", word: "ಪದಕ", pronunciation: "Padaka", image: Padaka, translation: "Medal" },
    { letter: "ಫ", letterPronunciation: "Pha", word: "ಫಲ", pronunciation: "Phala", image: Fruits, translation: "Fruit" },
    { letter: "ಬ", letterPronunciation: "Ba", word: "ಬಳೆ", pronunciation: "Bale", image: Bale, translation: "Bangle" },
    { letter: "ಭ", letterPronunciation: "Bha", word: "ಭರಣಿ", pronunciation: "Bharani", image: Bharani, translation: "Jar" },
    { letter: "ಮ", letterPronunciation: "Ma", word: "ಮನೆ", pronunciation: "Mane", image: House, translation: "House" },
    { letter: "ಯ", letterPronunciation: "Ya", word: "ಯಂತ್ರ", pronunciation: "Yantra", image: Yantra, translation: "Machine" },
    { letter: "ರ", letterPronunciation: "Ra", word: "ರಥ", pronunciation: "Ratha", image: Chariot, translation: "Chariot" },
    { letter: "ಲ", letterPronunciation: "La", word: "ಲಂಗ", pronunciation: "Langa", image: Langa, translation: "Skirt" },
    { letter: "ವ", letterPronunciation: "Va", word: "ವನ", pronunciation: "Vana", image: Vana, translation: "Forest" },
    { letter: "ಶ", letterPronunciation: "Sha", word: "ಶಕ್ತಿ", pronunciation: "Shakti", image: Power, translation: "Power" },
    { letter: "ಷ", letterPronunciation: "Ṣa", word: "ಷಟ್ಕೋನ", pronunciation: "Shatkona", image: Hexagon, translation: "Hexagon" },
    { letter: "ಸ", letterPronunciation: "Sa", word: "ಸರ", pronunciation: "Sara", image: Sara, translation: "Necklace" },
    { letter: "ಹ", letterPronunciation: "Ha", word: "ಹಡಗು", pronunciation: "Hadagu", image: Ship, translation: "Ship" },
];
