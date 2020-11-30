import { randomArray } from './helpers.js'

const newArray = new Array(100)

const storage = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(storage.sort())

const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]

function compareName(x, y) {
    if (x.name > y.name)
    return 1
    else if (x.name === y.name)
    return 0
    else 
    return -1
}

kids.sort(compareName)

console.log(kids.sort(compareName))



function compareAge(x, y) {
    if (x.age > y.age)
    return 1
    else if (x.age === y.age)
    return 0
    else 
    return -1
}

kids.sort(compareAge)

console.log(kids.sort(compareAge))



function compareNaughtyScore(x, y) {
    if (x.naughtyScore > y.naughtyScore)
    return 1
    else if (x.naughtyScore === y.naughtyScore)
    return 0
    else 
    return -1
}

kids.sort(compareNaughtyScore)

console.log(kids.sort(compareNaughtyScore))