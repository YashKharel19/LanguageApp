// 📦 Image Imports (renamed to English translations)
import friend from "../assets/images/Friend.svg";
import boat from "../assets/images/Ship.svg";
import house from "../assets/images/nepali/Ghara.svg";
import tooth from "../assets/images/Tooth.svg";
import school from "../assets/images/School.svg";
import flower from "../assets/images/nepali/Fhul.svg";
import cat from "../assets/images/Cat.svg";
import hand from "../assets/images/Hand.svg";
import icecream from "../assets/images/Icecream.svg";
import picture from "../assets/images/Picture.svg";
import giraffe from "../assets/images/Girrafe.svg";
import kiwi from "../assets/images/Kiwi.svg";
import book from "../assets/images/nepali/Gyan.svg";
import baby from "../assets/images/nepali/Bachha.svg";
import nest from "../assets/images/Nest.svg";
import bear from "../assets/images/nepali/Bhalu.svg";
import dog from "../assets/images/Dog.svg";
import cheese from "../assets/images/Cheese.svg";
import mouse from "../assets/images/Mouse.svg";
import wise from "../assets/images/Wise.svg";
import earth from "../assets/images/Earth.svg";
import grapes from "../assets/images/Grapes.svg";
import cow from "../assets/images/Cow.svg";
import waffle from "../assets/images/Waffle.svg";
import xylophone from "../assets/images/Xylophone.svg";
import yatch from "../assets/images/Ferry.svg";
import shoes from "../assets/images/Shoes.svg";

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

// 🧠 Flashcard Array
export const consonantCards: FlashCardType[] = [
    { letter: 'A', pronunciation: 'ah-MEE-goh', letterPronunciation: 'a', word: 'Amigo', translation: 'Friend', image: friend },
    { letter: 'B', pronunciation: 'BAR-koh', letterPronunciation: 'be', word: 'Barco', translation: 'Boat', image: boat },
    { letter: 'C', pronunciation: 'KAH-sah', letterPronunciation: 'se', word: 'Casa', translation: 'House', image: house },
    { letter: 'D', pronunciation: 'DYEN-teh', letterPronunciation: 'de', word: 'Diente', translation: 'Tooth', image: tooth },
    { letter: 'E', pronunciation: 'es-KWEH-lah', letterPronunciation: 'e', word: 'Escuela', translation: 'School', image: school },
    { letter: 'F', pronunciation: 'flor', letterPronunciation: 'efe', word: 'Flor', translation: 'Flower', image: flower },
    { letter: 'G', pronunciation: 'GAH-toh', letterPronunciation: 'ge', word: 'Gato', translation: 'Cat', image: cat },
    { letter: 'H', pronunciation: 'eh-LAH-doh', letterPronunciation: 'hache', word: 'Helado', translation: 'Ice cream', image: icecream },
    { letter: 'I', pronunciation: 'ee-MAH-hen', letterPronunciation: 'i', word: 'Imagen', translation: 'Picture', image: picture },
    { letter: 'J', pronunciation: 'hee-RAH-fah', letterPronunciation: 'jota', word: 'Jirafa', translation: 'Giraffe', image: giraffe },
    { letter: 'K', pronunciation: 'KEE-wee', letterPronunciation: 'ka', word: 'Kiwi', translation: 'Kiwi', image: kiwi },
    { letter: 'L', pronunciation: 'LEE-broh', letterPronunciation: 'ele', word: 'Libro', translation: 'Book', image: book },
    { letter: 'M', pronunciation: 'MAH-noh', letterPronunciation: 'eme', word: 'Mano', translation: 'Hand', image: hand },
    { letter: 'N', pronunciation: 'NEE-doh', letterPronunciation: 'ene', word: 'Nido', translation: 'Nest', image: nest },
    { letter: 'Ñ', pronunciation: 'NEE-nyoh', letterPronunciation: 'eñe', word: 'Niño', translation: 'Child', image: baby },
    { letter: 'O', pronunciation: 'OH-soh', letterPronunciation: 'o', word: 'Oso', translation: 'Bear', image: bear },
    { letter: 'P', pronunciation: 'PEH-rroh', letterPronunciation: 'pe', word: 'Perro', translation: 'Dog', image: dog },
    { letter: 'Q', pronunciation: 'KEH-soh', letterPronunciation: 'cu', word: 'Queso', translation: 'Cheese', image: cheese },
    { letter: 'R', pronunciation: 'rah-TOHN', letterPronunciation: 'ere', word: 'Ratón', translation: 'Mouse', image: mouse },
    { letter: 'S', pronunciation: 'SAH-byoh', letterPronunciation: 'ese', word: 'Sabio', translation: 'Wise', image: wise },
    { letter: 'T', pronunciation: 'TYEHR-rah', letterPronunciation: 'te', word: 'Tierra', translation: 'Earth', image: earth },
    { letter: 'U', pronunciation: 'OO-vah', letterPronunciation: 'u', word: 'Uva', translation: 'Grape', image: grapes },
    { letter: 'V', pronunciation: 'BAH-kah', letterPronunciation: 'uve', word: 'Vaca', translation: 'Cow', image: cow },
    { letter: 'W', pronunciation: 'WAF-leh', letterPronunciation: 'uve doble', word: 'Wafle', translation: 'Waffle', image: waffle },
    { letter: 'X', pronunciation: 'ksee-LOH-foh-noh', letterPronunciation: 'equis', word: 'Xilófono', translation: 'Xylophone', image: xylophone },
    { letter: 'Y', pronunciation: 'YAH-teh', letterPronunciation: 'i griega', word: 'Yate', translation: 'Yacht', image: yatch },
    { letter: 'Z', pronunciation: 'sah-PAH-toh', letterPronunciation: 'zeta', word: 'Zapato', translation: 'Shoes', image: shoes },
];

export const numberCards: FlashCardType[] = [
    { letter: "0", word: "cero", letterPronunciation: "SEH-ro", pronunciation: "SEH-ro", image: Zero, translation: "Zero" },
    { letter: "1", word: "uno", letterPronunciation: "OO-no", pronunciation: "OO-no", image: One, translation: "One" },
    { letter: "2", word: "dos", letterPronunciation: "dos", pronunciation: "dos", image: Two, translation: "Two" },
    { letter: "3", word: "tres", letterPronunciation: "tres", pronunciation: "tres", image: Three, translation: "Three" },
    { letter: "4", word: "cuatro", letterPronunciation: "KWA-tro", pronunciation: "KWA-tro", image: Four, translation: "Four" },
    { letter: "5", word: "cinco", letterPronunciation: "SEEN-ko", pronunciation: "SEEN-ko", image: Five, translation: "Five" },
    { letter: "6", word: "seis", letterPronunciation: "says", pronunciation: "says", image: Six, translation: "Six" },
    { letter: "7", word: "siete", letterPronunciation: "SYE-te", pronunciation: "SYE-te", image: Seven, translation: "Seven" },
    { letter: "8", word: "ocho", letterPronunciation: "OH-cho", pronunciation: "OH-cho", image: Eight, translation: "Eight" },
    { letter: "9", word: "nueve", letterPronunciation: "NWE-ve", pronunciation: "NWE-ve", image: Nine, translation: "Nine" },
];