import {getFish} from './database.js'









const allTheFish = getFish()



export const mostHolyFish = () => {
    
    const holyFish = []

    for (const eachFish of allTheFish) {
        if (eachFish.length % 3 === 0 ) {
            holyFish.push(eachFish)
        }

    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const eachFish of allTheFish) {
        if (eachFish.length % 5 === 0 ) {
            soldiers.push(eachFish)
        }

    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []

    for (const eachFish of allTheFish) {
        if ( eachFish.length % 3 !== 0 && eachFish.length % 5 !== 0 ) {
           
            return regularFish.push(eachFish)
        }

    }
    
    
    return regularFish
}
