import { getFish } from './database.js';
import { FishList } from './FishList.js';


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}



const parentHTMLElement = document.querySelector(".fish__import")


parentHTMLElement.innerHTML = FishList()