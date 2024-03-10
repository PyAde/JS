// const buahSaya = [
//     // 'alpukat',
// ]

// buahSaya['alpukat'] = '🥑'
// buahSaya['jerut'] = '🍑'

// console.log(buahSaya['alpukat'])

const buahSaya = ["🍎", "🍑", "🍌", "🍇", "🍈"] // original
// const newArraySaya = buahSaya // bisa merubah
const newArraySaya = {...buahSaya}

newArraySaya[0] = '❌'
// deepCoppy
// swallowCoppy
console.log({buahSaya})
console.log({newArraySaya})