import Aso from "../assets/images/Dog.svg";
import Bata from "../assets/images/nepali/Bachha.svg";
import Cocina from "../assets/images/Kitchen.svg";
import Dagat from "../assets/images/Sea.svg";
import Eskuwela from "../assets/images/School.svg";
import Ferye from "../assets/images/Ferry.svg";
import Gatas from "../assets/images/Milk.svg";
import Halaman from "../assets/images/Plant.svg";
import Isda from "../assets/images/Fish.svg";
import Jacket from "../assets/images/Jacket.svg";
import Kalabaw from "../assets/images/WaterBuffalo.svg";
import Lapis from "../assets/images/Pencil.svg";
import Mata from "../assets/images/Eye.svg";
import Ñanay from "../assets/images/Mother.svg";
import Ngiti from "../assets/images/Smile.svg";
import Oras from "../assets/images/Clock.svg";
import Puno from "../assets/images/Tree.svg";
import Queso from "../assets/images/Cheese.svg";
import Rosas from "../assets/images/Rose.svg";
import Saging from "../assets/images/Banana.svg";
import Tulog from "../assets/images/Child.svg";
import Ulan from "../assets/images/Rain.svg";
import Vitamin from "../assets/images/Vitamin.svg";
import Walis from "../assets/images/Broom.svg";
import XRay from "../assets/images/Xray.svg";
import Yelo from "../assets/images/Ice.svg";
import Zebra from "../assets/images/Zebra.svg";

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
    { letter: 'A', letterPronunciation: 'a', pronunciation: 'AH-soh', word: 'Aso', translation: 'Dog', image: Aso },
    { letter: 'B', letterPronunciation: 'b', pronunciation: 'BAH-tah', word: 'Bata', translation: 'Child', image: Bata },
    { letter: 'C', letterPronunciation: 'c', pronunciation: 'ko-SEE-nah', word: 'Cocina', translation: 'Kitchen', image: Cocina },
    { letter: 'D', letterPronunciation: 'd', pronunciation: 'DAH-gaht', word: 'Dagat', translation: 'Sea', image: Dagat },
    { letter: 'E', letterPronunciation: 'e', pronunciation: 'es-KWEH-lah', word: 'Eskuwela', translation: 'School', image: Eskuwela },
    { letter: 'F', letterPronunciation: 'f', pronunciation: 'FEH-reyh', word: 'Ferye', translation: 'Ferry', image: Ferye },
    { letter: 'G', letterPronunciation: 'g', pronunciation: 'gah-tahs', word: 'Gatas', translation: 'Milk', image: Gatas },
    { letter: 'H', letterPronunciation: 'h', pronunciation: 'ha-LAH-mahn', word: 'Halaman', translation: 'Plant', image: Halaman },
    { letter: 'I', letterPronunciation: 'i', pronunciation: 'ees-DAH', word: 'Isda', translation: 'Fish', image: Isda },
    { letter: 'J', letterPronunciation: 'j', pronunciation: 'ja-ket', word: 'Jacket', translation: 'Jacket', image: Jacket },
    { letter: 'K', letterPronunciation: 'k', pronunciation: 'kah-lah-baw', word: 'Kalabaw', translation: 'Water Buffalo', image: Kalabaw },
    { letter: 'L', letterPronunciation: 'l', pronunciation: 'LAH-pees', word: 'Lapis', translation: 'Pencil', image: Lapis },
    { letter: 'M', letterPronunciation: 'm', pronunciation: 'mah-TAH', word: 'Mata', translation: 'Eye', image: Mata },
    { letter: 'Ñ', letterPronunciation: 'n', pronunciation: 'nah-nai', word: 'Ñanay', translation: 'Mother', image: Ñanay },
    { letter: 'NG', letterPronunciation: 'ng', pronunciation: 'ngee-TEE', word: 'Ngiti', translation: 'Smile', image: Ngiti },
    { letter: 'O', letterPronunciation: 'o', pronunciation: 'OH-rahs', word: 'Oras', translation: 'Time', image: Oras },
    { letter: 'P', letterPronunciation: 'p', pronunciation: 'POO-noh', word: 'Puno', translation: 'Tree', image: Puno },
    { letter: 'Q', letterPronunciation: 'q', pronunciation: 'KEH-so', word: 'Queso', translation: 'Cheese', image: Queso },
    { letter: 'R', letterPronunciation: 'r', pronunciation: 'roh-sahs', word: 'Rosas', translation: 'Rose', image: Rosas },
    { letter: 'S', letterPronunciation: 's', pronunciation: 'SAH-ging', word: 'Saging', translation: 'Banana', image: Saging },
    { letter: 'T', letterPronunciation: 't', pronunciation: 'TOO-log', word: 'Tulog', translation: 'Child', image: Tulog },
    { letter: 'U', letterPronunciation: 'u', pronunciation: 'oo-LAHN', word: 'Ulan', translation: 'Rain', image: Ulan },
    { letter: 'V', letterPronunciation: 'v', pronunciation: 'vai-tah-meens', word: 'Vitamin', translation: 'Vitamin', image: Vitamin },
    { letter: 'W', letterPronunciation: 'w', pronunciation: 'wah-LEES', word: 'Walis', translation: 'Broom', image: Walis },
    { letter: 'X', letterPronunciation: 'x', pronunciation: 'eks-ray', word: 'X-Ray', translation: 'X-Ray', image: XRay },
    { letter: 'Y', letterPronunciation: 'y', pronunciation: 'YEH-loh', word: 'Yelo', translation: 'Ice', image: Yelo },
    { letter: 'Z', letterPronunciation: 'z', pronunciation: 'ZEE-brah', word: 'Zebra', translation: 'Zebra', image: Zebra },
];

export const numberCards: FlashCardType[] = [
    { letter: "0", word: "sero", letterPronunciation: "seh-ro", pronunciation: "SEH-ro", image: Zero, translation: "Zero" },
    { letter: "1", word: "isa", letterPronunciation: "ee-sa", pronunciation: "EE-sa", image: One, translation: "One" },
    { letter: "2", word: "dalawa", letterPronunciation: "da-la-wa", pronunciation: "DA-la-wa", image: Two, translation: "Two" },
    { letter: "3", word: "tatlo", letterPronunciation: "tat-lo", pronunciation: "TAT-lo", image: Three, translation: "Three" },
    { letter: "4", word: "apat", letterPronunciation: "a-pat", pronunciation: "A-pat", image: Four, translation: "Four" },
    { letter: "5", word: "lima", letterPronunciation: "lee-ma", pronunciation: "LEE-ma", image: Five, translation: "Five" },
    { letter: "6", word: "anim", letterPronunciation: "a-neem", pronunciation: "A-neem", image: Six, translation: "Six" },
    { letter: "7", word: "pito", letterPronunciation: "pee-to", pronunciation: "PEE-to", image: Seven, translation: "Seven" },
    { letter: "8", word: "walo", letterPronunciation: "wa-lo", pronunciation: "WA-lo", image: Eight, translation: "Eight" },
    { letter: "9", word: "siyam", letterPronunciation: "see-yam", pronunciation: "SEE-yam", image: Nine, translation: "Nine" },
];