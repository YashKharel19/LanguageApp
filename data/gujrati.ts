// assets/data/consonants.ts

// Import all local SVG files
// import Mango from "../assets/images/nepali/Baan.svg";o.svg";
// import Sky from "../assets/images/nepali/Baan.svg";svg";
// import Brick from "../assets/images/nepali/Baan.svg";k.svg";
// import Swim from "../assets/images/nepali/Baan.svg";.svg";
// import Basket from "../assets/images/nepali/Baan.svg";et.svg";
// import Sand from "../assets/images/nepali/Baan.svg";.svg";
// import Sage from "../assets/images/nepali/Baan.svg";.svg";
// import Debt from "../assets/images/nepali/Baan.svg";.svg";
// import Om from "../assets/images/nepali/Baan.svg";vg";
// import Condition from "../assets/images/nepali/Baan.svg";ition.svg";
// import Medicine from "../assets/images/nepali/Baan.svg";cine.svg";

import Lotus from "../assets/images/Lotus.svg";
import Telescope from "../assets/images/Telescope.svg";
import Knot from "../assets/images/Knot.svg";
import Horse from "../assets/images/Horse.svg";
import What from "../assets/images/What.svg"
import Picture from "../assets/images/Picture.svg";
import Umbrella from "../assets/images/nepali/Chata.svg";
import Water from "../assets/images/water.svg";
import Coconut from "../assets/images/Coconut.svg";
import Waterfall from "../assets/images/nepali/Jharna.svg";
import Tomato from "../assets/images/Tomato.svg";
import Cold from "../assets/images/nepali/Baan.svg";
import Bucket from "../assets/images/Bucket.svg";
import Devotee from "../assets/images/Devotee.svg";
import Sword from "../assets/images/kannada/Khadga.svg";
import Plate from "../assets/images/Plate.svg";
import Milk from "../assets/images/Milk.svg";
import Wealth from "../assets/images/Money.svg";
import Bird from "../assets/images/nepali/Cara.svg";
import Flower from "../assets/images/nepali/Fhul.svg";
import Child from "../assets/images/nepali/Bachha.svg";
import Drum from "../assets/images/Drum.svg";
import House from "../assets/images/nepali/Ghara.svg";
import Journey from "../assets/images/Journey.svg";
import Bear from "../assets/images/nepali/Bhalu.svg";
import Garlic from "../assets/images/nepali/Lasun.svg";
import Occupation from "../assets/images/Occupation.svg"
import Shame from "../assets/images/nepali/Baan.svg";
import Hexagon from "../assets/images/nepali/Satkon.svg";
import Sun from "../assets/images/Sun.svg";
import Damage from "../assets/images/Damage.svg";
import Elephant from "../assets/images/kannada/Aane.svg";
import Wise from "../assets/images/Wise.svg";

import { FlashCardType } from "../containers/flashCardTypes";

export const consonantCards: FlashCardType[] = [
    //   { letter: "અ", word: "અદધો", pronunciation: "Adhō", image: Mango, translation: "Mango" },
    //   { letter: "આ", word: "આકાશ", pronunciation: "Akash", image: Sky, translation: "Sky" },
    //   { letter: "ઇ", word: "ઇંટ", pronunciation: "Iṇṭa", image: Brick, translation: "Brick" },
    //   { letter: "ઈ", word: "ઈજું", pronunciation: "Īju", image: Swim, translation: "Swim" },
    //   { letter: "ઉ", word: "ઉંડી", pronunciation: "Uṇḍī", image: Basket, translation: "Basket" },
    //   { letter: "ઊ", word: "ઊંબ્રો", pronunciation: "Ūṁbrō", image: Sand, translation: "Sand" },
    //   { letter: "ઋ", word: "ઋષિ", pronunciation: "rushi", image: Sage, translation: "Sage" },
    //   { letter: "ૠ", word: "ઋણ", pronunciation: "rin", image: Debt, translation: "Debt" },
    //   { letter: "ૐ", word: "ૐ", pronunciation: "Om", image: Om, translation: "Om" },
    //   { letter: "ઐ", word: "ઐથું", pronunciation: "Aithu", image: Condition, translation: "Condition" },
    //   { letter: "ઑ", word: "ઔષધિ", pronunciation: "Auṣadhi", image: Medicine, translation: "Medicine" },
    //   { letter: "ઔ", word: "ઔષધિ", pronunciation: "Aushadhi", image: Medicine, translation: "Medicine" },

    { letter: "ક", word: "કમલ", pronunciation: "Kamal", image: Lotus, translation: "Lotus flower" },
    { letter: "ખ", word: "ખગોળ", pronunciation: "Khagol", image: Telescope, translation: "Telescope" },
    { letter: "ગ", word: "ગાંઠ", pronunciation: "Gaanth", image: Knot, translation: "Knot" },
    { letter: "ઘ", word: "ઘોડો", pronunciation: "Horse", image: Horse, translation: "Horse" },
    { letter: "ઙ", word: "ઙણ", pronunciation: "Ṅa", image: What, translation: "" },
    { letter: "ચ", word: "ચિત્ર", pronunciation: "Chitra", image: Picture, translation: "Picture" },
    { letter: "છ", word: "છત્રી", pronunciation: "Chhatrī", image: Umbrella, translation: "Umbrella" },
    { letter: "જ", word: "જલ", pronunciation: "Jala", image: Water, translation: "Water" },
    { letter: "ઝ", word: "ઝરણા", pronunciation: "jhar-naa", image: Waterfall, translation: "Waterfall" },
    { letter: "ઞ", word: "", pronunciation: "", image: What, translation: "" },
    { letter: "ટ", word: "ટમેટા", pronunciation: "Tameta", image: Tomato, translation: "Tomato" },
    { letter: "ઠ", word: "ઠંડી", pronunciation: "Thandi", image: Cold, translation: "Cold" },
    { letter: "ડ", word: "ડોલ", pronunciation: "Dol", image: Bucket, translation: "Bucket" },
    { letter: "ઢ", word: "ઢોંકો", pronunciation: "Dhol", image: Drum, translation: "Drum" },
    { letter: "ણ", word: "ણવ", pronunciation: "Shramann", image: What, translation: "" },
    { letter: "ત", word: "તલવાર", pronunciation: "Talvar", image: Sword, translation: "Sword" },
    { letter: "થ", word: "થાળી", pronunciation: "Thali", image: Plate, translation: "Plate" },
    { letter: "દ", word: "દૂધ", pronunciation: "Dudh", image: Milk, translation: "Milk" },
    { letter: "ધ", word: "ધન", pronunciation: "Dhan", image: Wealth, translation: "Wealth" },
    { letter: "ન", word: "નારીયળ", pronunciation: "Naa-ree-yal", image: Coconut, translation: "Coconut" },
    { letter: "પ", word: "પંખી", pronunciation: "Pankhi", image: Bird, translation: "Bird" },
    { letter: "ફ", word: "ફૂલ", pronunciation: "Phul", image: Flower, translation: "Flower" },
    { letter: "બ", word: "બાળક", pronunciation: "Baa-dak", image: Child, translation: "Child" },
    { letter: "ભ", word: "ભક્ત", pronunciation: "Bhakta", image: Devotee, translation: "Devotee" },
    { letter: "મ", word: "મકાન", pronunciation: "Makan", image: House, translation: "House" },
    { letter: "ય", word: "યાત્રા", pronunciation: "Yatra", image: Journey, translation: "Journey" },
    { letter: "ર", word: "રીંછ", pronunciation: "Reenchh", image: Bear, translation: "Bear" },
    { letter: "લ", word: "લસણ", pronunciation: "Lasan", image: Garlic, translation: "Garlic" },
    { letter: "વ", word: "વૃત્તિ", pronunciation: "Vruti", image: Occupation, translation: "Occupation" },
    { letter: "શ", word: "શરમ", pronunciation: "Sharam", image: Shame, translation: "Shame" },
    { letter: "ષ", word: "ષટક", pronunciation: "Shatak", image: Hexagon, translation: "Hexagon" },
    { letter: "સ", word: "સૂર્ય", pronunciation: "Surya", image: Sun, translation: "Sun" },
    { letter: "હ", word: "હાથી", pronunciation: "Haathi", image: Elephant, translation: "Elephant" },
    { letter: "ળ", word: "ળણ", pronunciation: "", image: What, translation: "" },
    { letter: "ક્ષ", word: "ક્ષતિ", pronunciation: "Kshati", image: Damage, translation: "Damage" },
    { letter: "જ્ઞ", word: "જ્ઞાની", pronunciation: "Gyaani", image: Wise, translation: "Wise person" },
];
