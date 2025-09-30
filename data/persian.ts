// 📦 Image Imports (renamed to English translations)
import water from "../assets/images/water.png";
import father from "../assets/images/Father.png";
import bird from "../assets/images/nepali/Cara.png";
import ball from "../assets/images/Ball.png";
import wealth from "../assets/images/Money.png";
import forest from "../assets/images/Forest.png";
import tea from "../assets/images/Tea.png";
import pond from "../assets/images/Pond.png";
import house from "../assets/images/nepali/Ghara.png";
import hand from "../assets/images/Hand.png";
import corn from "../assets/images/Corn.png";
import friend from "../assets/images/Friend.png";
import giraffe from "../assets/images/Girrafe.png";
import jacket from "../assets/images/Jacket.png";
import apple from "../assets/images/Apple.png";
import lion from "../assets/images/Lion.png";
import box from "../assets/images/kannada/Dabbi.png";
import weak from "../assets/images/Weak.png";
import rope from "../assets/images/Knot.png";
import plate from "../assets/images/Plate.png";
import honey from "../assets/images/Honey.png";
import food from "../assets/images/kannada/Oota.png";
import elephant from "../assets/images/Elephant.png";
import heart from "../assets/images/Heart.png";
import book from "../assets/images/nepali/Gyan.png";
import flower from "../assets/images/nepali/Fhul.png";
import lip from "../assets/images/Lip.png";
import mother from "../assets/images/Mother.png";
import bread from "../assets/images/Bread.png";
import exercise from "../assets/images/Exercise.png";
import gift from "../assets/images/Gift.png";
import cheetah from "../assets/images/Cheetah.png";

import Zero from "../assets/images/What.png"
import One from "../assets/images/numbers/1.png";
import Two from "../assets/images/numbers/2.png";
import Three from "../assets/images/numbers/3.png";
import Four from "../assets/images/numbers/4.png";
import Five from "../assets/images/numbers/5.png";
import Six from "../assets/images/numbers/6.png";
import Seven from "../assets/images/numbers/7.png";
import Eight from "../assets/images/numbers/8.png";
import Nine from "../assets/images/numbers/9.png";

import { FlashCardType } from "../containers/flashCardTypes";

// 🧠 Flashcard Array
export const consonantCards: FlashCardType[] = [
    { letter: 'ا', letterPronunciation: 'aa', pronunciation: 'Ab', word: 'آب', translation: 'Water', image: water },
    { letter: 'ب', letterPronunciation: 'be', pronunciation: 'Baba', word: 'بابا', translation: 'Father', image: father },
    { letter: 'پ', letterPronunciation: 'pe', pronunciation: 'Parande', word: 'پرنده', translation: 'Bird', image: bird },
    { letter: 'ت', letterPronunciation: 'te', pronunciation: 'Tup', word: 'توپ', translation: 'Ball', image: ball },
    { letter: 'ث', letterPronunciation: 'se', pronunciation: 'Servat', word: 'ثروت', translation: 'Wealth', image: wealth },
    { letter: 'ج', letterPronunciation: 'je', pronunciation: 'Jangal', word: 'جنگل', translation: 'Forest', image: forest },
    { letter: 'چ', letterPronunciation: 'che', pronunciation: 'Chay', word: 'چای', translation: 'Tea', image: tea },
    { letter: 'ح', letterPronunciation: 'he', pronunciation: 'Hoz', word: 'حوض', translation: 'Pond', image: pond },
    { letter: 'خ', letterPronunciation: 'khe', pronunciation: 'Khane', word: 'خانه', translation: 'House', image: house },
    { letter: 'د', letterPronunciation: 'de', pronunciation: 'Dast', word: 'دست', translation: 'Hand', image: hand },
    { letter: 'ذ', letterPronunciation: 'ze', pronunciation: 'Zorat', word: 'ذرت', translation: 'Corn', image: corn },
    { letter: 'د', letterPronunciation: 'de', pronunciation: 'Dust', word: 'دوست', translation: 'Friend', image: friend },
    { letter: 'ز', letterPronunciation: 'ze', pronunciation: 'Zarafe', word: 'زرافه', translation: 'Giraffe', image: giraffe },
    { letter: 'ژ', letterPronunciation: 'zhe', pronunciation: 'Zhakat', word: 'ژاکت', translation: 'Jacket', image: jacket },
    { letter: 'س', letterPronunciation: 'se', pronunciation: 'Sib', word: 'سیب', translation: 'Apple', image: apple },
    { letter: 'ش', letterPronunciation: 'she', pronunciation: 'Shir', word: 'شیر', translation: 'Lion', image: lion },
    { letter: 'ص', letterPronunciation: 'se', pronunciation: 'Sanduq', word: 'صندوق', translation: 'Box', image: box },
    { letter: 'ض', letterPronunciation: 'ze', pronunciation: 'Zaif', word: 'ضعیف', translation: 'Weak', image: weak },
    { letter: 'ط', letterPronunciation: 'te', pronunciation: 'Tanab', word: 'طناب', translation: 'Rope', image: rope },
    { letter: 'ظ', letterPronunciation: 'ze', pronunciation: 'Zarf', word: 'ظرف', translation: 'Plate', image: plate },
    { letter: 'ع', letterPronunciation: '‘ayn', pronunciation: 'Asal', word: 'عسل', translation: 'Honey', image: honey },
    { letter: 'غ', letterPronunciation: 'ghe', pronunciation: 'Ghazâ', word: 'غذا', translation: 'Food', image: food },
    { letter: 'ف', letterPronunciation: 'fe', pronunciation: 'Fil', word: 'فیل', translation: 'Elephant', image: elephant },
    { letter: 'ق', letterPronunciation: 'ghaf', pronunciation: 'Ghalb', word: 'قلب', translation: 'Heart', image: heart },
    { letter: 'ک', letterPronunciation: 'ke', pronunciation: 'Ketab', word: 'کتاب', translation: 'Book', image: book },
    { letter: 'گ', letterPronunciation: 'ge', pronunciation: 'Gol', word: 'گل', translation: 'Flower', image: flower },
    { letter: 'ل', letterPronunciation: 'le', pronunciation: 'Lab', word: 'لب', translation: 'Lip', image: lip },
    { letter: 'م', letterPronunciation: 'me', pronunciation: 'Madar', word: 'مادر', translation: 'Mother', image: mother },
    { letter: 'ن', letterPronunciation: 'ne', pronunciation: 'Nan', word: 'نان', translation: 'Bread', image: bread },
    { letter: 'و', letterPronunciation: 'vâv', pronunciation: 'Varzesh', word: 'ورزش', translation: 'Exercise', image: exercise },
    { letter: 'ه', letterPronunciation: 'he', pronunciation: 'Hedye', word: 'هدیه', translation: 'Gift', image: gift },
    { letter: 'ی', letterPronunciation: 'ye', pronunciation: 'Yuzpalang', word: 'یوزپلنگ', translation: 'Cheetah', image: cheetah },
];


export const numberCards: FlashCardType[] = [
    { letter: "۰", word: "صفر", letterPronunciation: "sefr", pronunciation: "SEFR", image: Zero, translation: "Zero" },
    { letter: "۱", word: "یک", letterPronunciation: "yek", pronunciation: "YEK", image: One, translation: "One" },
    { letter: "۲", word: "دو", letterPronunciation: "do", pronunciation: "DO", image: Two, translation: "Two" },
    { letter: "۳", word: "سه", letterPronunciation: "seh", pronunciation: "SEH", image: Three, translation: "Three" },
    { letter: "۴", word: "چهار", letterPronunciation: "chahar", pronunciation: "CHA-har", image: Four, translation: "Four" },
    { letter: "۵", word: "پنج", letterPronunciation: "panj", pronunciation: "PANJ", image: Five, translation: "Five" },
    { letter: "۶", word: "شش", letterPronunciation: "shesh", pronunciation: "SHESH", image: Six, translation: "Six" },
    { letter: "۷", word: "هفت", letterPronunciation: "haft", pronunciation: "HAFT", image: Seven, translation: "Seven" },
    { letter: "۸", word: "هشت", letterPronunciation: "hasht", pronunciation: "HASHT", image: Eight, translation: "Eight" },
    { letter: "۹", word: "نه", letterPronunciation: "noh", pronunciation: "NOH", image: Nine, translation: "Nine" },
];
