// Destructuring Array 
// serupa dengan destructuring objec. Object menggunakan tanda kurung kurawal {} sedangkan
// array menggunakan tanda kurung [] siku. Perbedaan lainnya adalah destructuring array
// berkeja berdasarkan posisi dari pada penamaan propertinya. Berikut contoh dari destructuring
// array pada ES 6

const favorite = ["Seafod", "Salad", "Nugget", "Soup"];

const[firstFood, secondFood, thirdFood, fourthFood ] = favorite // satu satu

console.log(firstFood, secondFood, thirdFood, fourthFood);

// Kode diatas merupakan sebuah contoh proses destructuring array. Di dalam array
// favorites terdapat 4 nilai string yang masing masing nilainya dimasukan ke variabel
// lokal firstFood, secondFood, thirdFood, fourthFood.
// Nilai dari array yang  dimasukan ke variabel lokal dipilih berdasarkan posisi dimana
// ia dideklarasikan pada array

//const [firstFood, secondFood, thirdFood, fourthFood] = favorite;

// Sebenarnya kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting
// adalah urutan ketika deklarasi variabelnya saja.

// Untuk mengambil nilai dari array, kita tidak perlu menyiapkan variabel lokal untuk 
// menampung nilai array pertama, kedua, ketiga maupun keemapt. Kita bisa melakukannya
// dengan membeiarkan index array yang tidak kita inginkan tetap kososng. Lebih lanjut,
// tanda koma (,) tetap diperlukan untuk menunjukan posisi index-nya

//seperti ini
const favorites = ["Ayam Goreng", "Nasi goreng", "Nasi kuning"];

const [,,triFood] = favorites; // -> tanda (,) berfungsi untuk meloncatin index dalam array
console.log(triFood)

// Destructuring Assignment
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object
// kita tidak perlu membungkus dengan tanda kurung.

//Contoh

let myFood = "Ice";
let herFood = "Noodles";


[myFood, herFood] = favorites;
console.log(myFood);
console.log(herFood)

// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara
// dua variabel. Sebelum ES6, untuk melakukan hal ini kita menggunakan cara
// manual menggunakan algoritma sorting seperti ini

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// Untuk melakukan pertukaran nilai, kita membutuhkan variabel penengah. Pada contoh
// kode di atas menggunakan variabel temp. Variabel penengah dibutuhkan untuk menyimpan
// data sementara pada variabel yang akan ditukar. Hal ini menjadi kurang efektif karena
// kita harus membuat variabel baru yang sebenarnya hanya bersifat sementara

// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah
// tanpa membuat variabel tambbahan.

let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// Default values
// ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak 
// dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined
// Contohnya

const favoritee = ["Seafod"];
//const [myfood, herfood] = favoritee;

//console.log(myfood);
//console.log(herfood);
/* output:
Seafood
undefined
*/

// Sama seperi object, pada destructuring array kita juga dapat memberikan nilai default
// pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada
// variabel tidak akan menjadi undefined

const [myfood, herfood = "Salad"] = favoritee;
/* output:
Seafood
Salad
*/