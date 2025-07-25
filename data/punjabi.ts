// assets/data/consonants.ts

// Import all 41 local SVG files manually (based on English translation)
import Camel from "../assets/images/Camel.svg";
import Mango from "../assets/images/Mango.svg";
import Brick from "../assets/images/Brick.svg";
import Apple from "../assets/images/Apple.svg";
import Elephant from "../assets/images/kannada/Aane.svg";
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
import Drum from "../assets/images/nepali/Baan.svg";
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

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    { letter: "ੳ", word: "ਊਠ", pronunciation: "Ūṭha", image: Camel, translation: "Camel" },
    { letter: "ਅ", word: "ਅਬ", pronunciation: "Amb", image: Mango, translation: "Mango" },
    { letter: "ੲ", word: "ਇੱਟ", pronunciation: "īṭṭ", image: Brick, translation: "Brick" },
    { letter: "ਸ", word: "ਸੇਬ", pronunciation: "Sēba", image: Apple, translation: "Apple" },
    { letter: "ਹ", word: "ਹਾਥੀ", pronunciation: "Hāthī", image: Elephant, translation: "Elephant" },
    { letter: "ਕ", word: "ਕਲਮ", pronunciation: "Kalam", image: Pen, translation: "Pen" },
    { letter: "ਖ", word: "ਖੂਹ", pronunciation: "Kūā", image: Well, translation: "Well" },
    { letter: "ਗ", word: "ਗਾਂ", pronunciation: "Gā", image: Cow, translation: "Cow" },
    { letter: "ਘ", word: "ਘਰ", pronunciation: "Ghara", image: House, translation: "House" },
    { letter: "ਚ", word: "ਚੰਦ", pronunciation: "Chand", image: Moon, translation: "Moon" },
    { letter: "ਛ", word: "ਛੱਤਰੀ", pronunciation: "Chhatarī", image: Umbrella, translation: "Umbrella" },
    { letter: "ਜ", word: "ਜਹਾਜ਼", pronunciation: "Jahāz", image: Ship, translation: "Ship" },
    { letter: "ਝ", word: "ਝਾੜੂ", pronunciation: "jhāṛū", image: Broom, translation: "Broom" },
    { letter: "ਟ", word: "ਟਮਾਟਰ", pronunciation: "ṭa-mā-ṭar", image: Tomato, translation: "Tomato" },
    { letter: "ਠ", word: "ਠੇਲ੍ਹਾ", pronunciation: "ṭhea-lhā", image: Cart, translation: "Cart" },
    { letter: "ਡ", word: "ਡੱਡੂ", pronunciation: "Ḍaḍū", image: Frog, translation: "Frog" },
    { letter: "ਢ", word: "ਢੋਲ", pronunciation: "Ḍhōla", image: Drum, translation: "Drum" },
    { letter: "ਣ", word: "ਲਸਣ", pronunciation: "Lasaṇa", image: Garlic, translation: "Garlic" },
    { letter: "ਤ", word: "ਤੋਤਾ", pronunciation: "Tota", image: Parrot, translation: "Parrot" },
    { letter: "ਥ", word: "ਥੈਲੀ", pronunciation: "Thailī", image: Pouch, translation: "Pouch" },
    { letter: "ਦ", word: "ਦਰਵਾਜ਼ਾ", pronunciation: "Darwāja", image: Door, translation: "Door" },
    { letter: "ਧ", word: "ਧਨੁੱਖ", pronunciation: "Dhanukh", image: Bow, translation: "Bow" },
    { letter: "ਨ", word: "ਨਿੰਬੂ", pronunciation: "nimbū", image: Lemon, translation: "Lemon" },
    { letter: "ਪ", word: "ਪਤੰਗ", pronunciation: "patang", image: Kite, translation: "Kite" },
    { letter: "ਫ", word: "ਫੁੱਲ", pronunciation: "Phula", image: Flower, translation: "Flower" },
    { letter: "ਬ", word: "ਬਾਂਦਰ", pronunciation: "bāndar", image: Monkey, translation: "Monkey" },
    { letter: "ਭ", word: "ਭਾਲੂ", pronunciation: "Bhālū", image: Bear, translation: "Bear" },
    { letter: "ਮ", word: "ਮੱਛੀ", pronunciation: "Machī", image: Fish, translation: "Fish" },
    { letter: "ਯ", word: "ਯਾਰ", pronunciation: "yār", image: Friend, translation: "Friend" },
    { letter: "ਰ", word: "ਰਾਜਾ", pronunciation: "raaja", image: King, translation: "King" },
    { letter: "ਲ", word: "ਲਾਲ", pronunciation: "lāl", image: Red, translation: "Red" },
    { letter: "ਵ", word: "ਬੇਲਣ", pronunciation: "belan", image: RollingPin, translation: "Rolling Pin" },
    { letter: "ੜ", word: "ਘੜੀ", pronunciation: "ghaṛī", image: Watch, translation: "Watch" },
    { letter: "ਸ਼", word: "ਸ਼ੇਰ", pronunciation: "shēr", image: Lion, translation: "Lion" },
    { letter: "ਖ਼", word: "ਖਰਗੋਸ਼", pronunciation: "Kharagōśa", image: Rabbit, translation: "Rabbit" },
    { letter: "ਗ਼", word: "ਗ਼ੁਬਾਰਾ", pronunciation: "ġubārāa", image: Balloon, translation: "Balloon" },
    { letter: "ਜ਼", word: "ਜ਼ਮੀਨ", pronunciation: "Zamīn", image: Land, translation: "Land" },
    { letter: "ਫ਼", word: "ਫ਼ਲ", pronunciation: "Phal", image: Fruit, translation: "Fruit" },
    { letter: "ਲ਼", word: "ਲੜਕਾ", pronunciation: "laṛkā", image: Boy, translation: "Boy" },
];
