/** @format */

// const buahSaya = [
//     // 'alpukat',
// ]

// buahSaya['alpukat'] = '🥑'
// buahSaya['jerut'] = '🍑'

// console.log(buahSaya['alpukat'])

// const buahSaya = ["🍎", "🍑", "🍌", "🍇", "🍈"] // original
// const newArraySaya = buahSaya // bisa merubah
// const newArraySaya = {...buahSaya}

// newArraySaya[0] = '❌'
// // deepCoppy
// // shallow Coppy
// console.log({buahSaya})
// console.log({newArraySaya})

// const buahSaya = ["🍌", 10, { tomat: function(){
//     console.log('ini adalah tomat')
// } }, ["eat", 'pisang']];

// console.log(buahSaya[])
// array multidimensi
// console.log(buahSaya[3][1])

// memunculkan teks tomat
// buahSaya[2].tomat()// memanggil tulisan ini adalah tomat
// const buahSaya = ["🍌", "🍇", "🍎"];
// const buahKamu = ["😁", "👌", "❌"];

// const kombinasi = buahSaya.concat(buahKamu);
// console.log(kombinasi)
// for(list in kombinasi){
//     console.log(list)
// }
// kombinasi.map((value, index) => console.group(value, index));

const data = [
  {
    name: "Budi",
    age: 10,
  },
  {
    name: "Anton",
    age: 11,
  },
];

data.map((value, index) => {
  // return value.name
  // console.log(value.name)
  console.log(value.name);
});
// usia
// data.sort((a, b) => b.age - a.age).map((values) => console.log(values));
data.filter((x) => x.age > 10).map((values) => console.log(values))
