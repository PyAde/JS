// Spread merupakan sebuah fitur yang digunakan untuk menyebarkan nilai array
// atau lebih tepatnya iterable object menjadi beberapa elemen.
// Spread operator dituliskan dengan tiga titik (...)
// Contoh

const favorites = ["Seafood", "Salad", "Nugget"];
console.log(favorites) // ada tanda kurung siku

// Pada kode diatas hasil yang dicetak adalah sebuah array (ditunjukan dengan tanda []),
// karena memang kita mencetak nilai favorites itu sendiri.
// Dengan menggunakan spread operator kitca dapat menyebarkan nilai-nilai dalam array tersebut

console.log(...favorites) // menghilangkan tanda kurung siku
/* output
Seafood Salad Nugget Soup
*/

// persamaanya saat menggunakan spread adalah ketika kita memanggil favorites
// dengan menggunakan operator spread artinya sama hal-nya kita menuliskan kode 
// seperti ini console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
// Jika tidak menggunakan spread operator ini maka hasilnya seperti ini

const favorite = ["Seafod", "Salad", " Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorite = [ favorite, others];
console.log(allFavorite);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/
const allFavorites = [...favorite, ...others]; // Menggabungkan dua obejct kedalam
// satu object yang sama didalam sebuah variabel menggunakan spread
console.log(allFavorites);

// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini 
// memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas

const obj1 = {
  firstname : "Obi",
  age: 30,
};
const obj2 = {
  lastname: "Kenobi",
  gender: "M",
};

const newOBj = {...obj1, ...obj2};
console.log(newOBj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/