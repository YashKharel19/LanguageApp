// assets/data/consonants.ts

// Import all 41 local SVG files manually (based on English translation)
import Camel from "../assets/images/Camel.svg";
import Mango from "../assets/images/Mango.svg";
import Brick from "../assets/images/Brick.svg";
import Apple from "../assets/images/Apple.svg";
import Elephant from "../assets/images/Elephant.svg";
import Pen from "../assets/images/Pen.svg";
import Well from "../assets/images/Well.svg";
import Cow from "../assets/images/kannada/Dhana.svg";
import House from "../assets/images/nepali/Ghara.svg";
import Moon from "../assets/images/Moon.svg";
import Umbrella from "../assets/images/nepali/Chata.svg";
import Ship from "../assets/images/Ship.svg";
import Broom from "../assets/images/Broom.svg";
import Tomato from "../assets/images/Tomato.svg";
import Cart from "../assets/images/nepali/Thela.svg";
import Frog from "../assets/images/Frog.svg";
import Drum from "../assets/images/Drum.svg";
import Garlic from "../assets/images/nepali/Lasun.svg";
import Parrot from "../assets/images/Parrot.svg";
import Pouch from "../assets/images/nepali/Thaili.svg";
import Door from "../assets/images/Door.svg";
import Bow from "../assets/images/nepali/Dhanush.svg";
import Lemon from "../assets/images/Lemon.svg";
import Kite from "../assets/images/Kite.svg";
import Flower from "../assets/images/nepali/Fhul.svg";
import Monkey from "../assets/images/Monkey.svg";
import Bear from "../assets/images/nepali/Baan.svg";
import Fish from "../assets/images/Fish.svg";
import Friend from "../assets/images/Friend.svg";
import King from "../assets/images/kannada/Arasa.svg";
import Red from "../assets/images/Red.svg";
import RollingPin from "../assets/images/Rollingpin.svg";
import Watch from "../assets/images/Watch.svg";
import Lion from "../assets/images/Lion.svg";
import Rabbit from "../assets/images/nepali/Kharayo.svg";
import Balloon from "../assets/images/Baloon.svg";
import Land from "../assets/images/Land.svg";
import Fruit from "../assets/images/Fruits.svg";
import Boy from "../assets/images/Boy.svg";

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
    { letter: "ੳ", word: "ਊਠ", pronunciation: "Ūṭha", letterPronunciation: "ū", image: Camel, translation: "Camel" },
    { letter: "ਅ", word: "ਅਬ", pronunciation: "Amb", letterPronunciation: "a", image: Mango, translation: "Mango" },
    { letter: "ੲ", word: "ਇੱਟ", pronunciation: "īṭṭ", letterPronunciation: "ī", image: Brick, translation: "Brick" },
    { letter: "ਸ", word: "ਸੇਬ", pronunciation: "Sēba", letterPronunciation: "sa", image: Apple, translation: "Apple" },
    { letter: "ਹ", word: "ਹਾਥੀ", pronunciation: "Hāthī", letterPronunciation: "ha", image: Elephant, translation: "Elephant" },
    { letter: "ਕ", word: "ਕਲਮ", pronunciation: "Kalam", letterPronunciation: "ka", image: Pen, translation: "Pen" },
    { letter: "ਖ", word: "ਖੂਹ", pronunciation: "Kūā", letterPronunciation: "kha", image: Well, translation: "Well" },
    { letter: "ਗ", word: "ਗਾਂ", pronunciation: "Gā", letterPronunciation: "ga", image: Cow, translation: "Cow" },
    { letter: "ਘ", word: "ਘਰ", pronunciation: "Ghara", letterPronunciation: "gha", image: House, translation: "House" },
    { letter: "ਚ", word: "ਚੰਦ", pronunciation: "Chand", letterPronunciation: "cha", image: Moon, translation: "Moon" },
    { letter: "ਛ", word: "ਛੱਤਰੀ", pronunciation: "Chhatarī", letterPronunciation: "chha", image: Umbrella, translation: "Umbrella" },
    { letter: "ਜ", word: "ਜਹਾਜ਼", pronunciation: "Jahāz", letterPronunciation: "ja", image: Ship, translation: "Ship" },
    { letter: "ਝ", word: "ਝਾੜੂ", pronunciation: "Jhāṛū", letterPronunciation: "jha", image: Broom, translation: "Broom" },
    { letter: "ਟ", word: "ਟਮਾਟਰ", pronunciation: "ṭa-mā-ṭar", letterPronunciation: "ṭa", image: Tomato, translation: "Tomato" },
    { letter: "ਠ", word: "ਠੇਲ੍ਹਾ", pronunciation: "ṭhea-lhā", letterPronunciation: "ṭha", image: Cart, translation: "Cart" },
    { letter: "ਡ", word: "ਡੱਡੂ", pronunciation: "Ḍaḍū", letterPronunciation: "ḍa", image: Frog, translation: "Frog" },
    { letter: "ਢ", word: "ਢੋਲ", pronunciation: "Ḍhōla", letterPronunciation: "ḍha", image: Drum, translation: "Drum" },
    { letter: "ਣ", word: "ਲਸਣ", pronunciation: "Lasaṇa", letterPronunciation: "ṇa", image: Garlic, translation: "Garlic" },
    { letter: "ਤ", word: "ਤੋਤਾ", pronunciation: "Tota", letterPronunciation: "ta", image: Parrot, translation: "Parrot" },
    { letter: "ਥ", word: "ਥੈਲੀ", pronunciation: "Thailī", letterPronunciation: "tha", image: Pouch, translation: "Pouch" },
    { letter: "ਦ", word: "ਦਰਵਾਜ਼ਾ", pronunciation: "Darwāja", letterPronunciation: "da", image: Door, translation: "Door" },
    { letter: "ਧ", word: "ਧਨੁਸ਼", pronunciation: "Dhanush", letterPronunciation: "dha", image: Bow, translation: "Bow" },
    { letter: "ਨ", word: "ਨਿੰਬੂ", pronunciation: "Nimbū", letterPronunciation: "na", image: Lemon, translation: "Lemon" },
    { letter: "ਪ", word: "ਪਤੰਗ", pronunciation: "patang", letterPronunciation: "pa", image: Kite, translation: "Kite" },
    { letter: "ਫ", word: "ਫੁੱਲ", pronunciation: "Phula", letterPronunciation: "pha", image: Flower, translation: "Flower" },
    { letter: "ਬ", word: "ਬਾਂਦਰ", pronunciation: "Bāndar", letterPronunciation: "ba", image: Monkey, translation: "Monkey" },
    { letter: "ਭ", word: "ਭਾਲੂ", pronunciation: "Bhālū", letterPronunciation: "bha", image: Bear, translation: "Bear" },
    { letter: "ਮ", word: "ਮੱਛਲੀ", pronunciation: "Machlī", letterPronunciation: "ma", image: Fish, translation: "Fish" },
    { letter: "ਯ", word: "ਯਾਰ", pronunciation: "yār", letterPronunciation: "ya", image: Friend, translation: "Friend" },
    { letter: "ਰ", word: "ਰਾਜਾ", pronunciation: "raaja", letterPronunciation: "ra", image: King, translation: "King" },
    { letter: "ਲ", word: "ਲਾਲ", pronunciation: "lāl", letterPronunciation: "la", image: Red, translation: "Red" },
    { letter: "ਵ", word: "ਬੇਲਣਾ", pronunciation: "Belnaa", letterPronunciation: "va", image: RollingPin, translation: "Rolling Pin" },
    { letter: "ੜ", word: "ਘੜੀ", pronunciation: "ghaṛī", letterPronunciation: "ṛa", image: Watch, translation: "Watch" },
    { letter: "ਸ਼", word: "ਸ਼ੇਰ", pronunciation: "shēr", letterPronunciation: "sha", image: Lion, translation: "Lion" },
    { letter: "ਖ਼", word: "ਖਰਗੋਸ਼", pronunciation: "Kharagōśa", letterPronunciation: "kha", image: Rabbit, translation: "Rabbit" },
    { letter: "ਗ਼", word: "ਗ਼ੁਬਾਰਾ", pronunciation: "ġubārāa", letterPronunciation: "ga", image: Balloon, translation: "Balloon" },
    { letter: "ਜ਼", word: "ਜ਼ਮੀਨ", pronunciation: "Zamīn", letterPronunciation: "za", image: Land, translation: "Land" },
    { letter: "ਫ਼", word: "ਫ਼ਲ", pronunciation: "Phal", letterPronunciation: "fa", image: Fruit, translation: "Fruit" },
    { letter: "ਲ਼", word: "ਲੜਕਾ", pronunciation: "Laṛkā", letterPronunciation: "la", image: Boy, translation: "Boy" },
];

export const numberCards: FlashCardType[] = [
    { letter: "੦", word: "ਸਿਫ਼ਰ", letterPronunciation: "sifar", pronunciation: "SIFAR", image: Zero, translation: "Zero" },
    { letter: "੧", word: "ਇੱਕ", letterPronunciation: "ikk", pronunciation: "IKK", image: One, translation: "One" },
    { letter: "੨", word: "ਦੋ", letterPronunciation: "do", pronunciation: "DO", image: Two, translation: "Two" },
    { letter: "੩", word: "ਤਿੰਨ", letterPronunciation: "tinn", pronunciation: "TINN", image: Three, translation: "Three" },
    { letter: "੪", word: "ਚਾਰ", letterPronunciation: "chaar", pronunciation: "CHAAR", image: Four, translation: "Four" },
    { letter: "੫", word: "ਪੰਜ", letterPronunciation: "panj", pronunciation: "PANJ", image: Five, translation: "Five" },
    { letter: "੬", word: "ਛੇ", letterPronunciation: "chhe", pronunciation: "CHHE", image: Six, translation: "Six" },
    { letter: "੭", word: "ਸੱਤ", letterPronunciation: "satt", pronunciation: "SATT", image: Seven, translation: "Seven" },
    { letter: "੮", word: "ਅੱਠ", letterPronunciation: "ath", pronunciation: "ATH", image: Eight, translation: "Eight" },
    { letter: "੯", word: "ਨੌਂ", letterPronunciation: "nau", pronunciation: "NAU", image: Nine, translation: "Nine" },
];
