import {getFish} from './database.js'

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    for (const fish of fishes) {
        htmlString += `<section class="fish__card">
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
    </section>
`
}
htmlString += `</article>`

return htmlString
}
// call the holyfish functions in the fishlist function instead of get fish.
//you will need to call each function indiviually