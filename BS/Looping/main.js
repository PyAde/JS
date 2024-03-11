// /** @format */

// // for

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i < 10) {
//   //   console.log("data i ke - ", i);
//   i++;
// }

// let j = 1;
// do {
//     console.log("data j ke - ", j );
//     j++
// } while (j < 10);


const data = [3,5,12]

const panjang = data.length
let total = 0
// for(let i = 0; i < panjang; i++){
//     total += data[i]
// }

let i = 0
// while(i < panjang){
//     total += data[i]
//     i++
// }

do{
    total +=data[i]
    i++
}while(i < panjang)
console.log(total)