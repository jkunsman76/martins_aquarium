const database = {
    fish: [ 
        {
            name: "Bart",
            species: "Octopuse",
            length: 3,
            food: "Crustaceans",
            location: "Atlantic Ocean"
            
        },
        { 
            name: "George",
            species: "Shark",
            length: 14,
            food: "Fish",
            location: "Bahamas"
        },
        { 
            name: "Twill",
            species: "Star Fish",
            length: 6,
            food: "Crustaceans",
            location: "Jamacia",
        },
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}