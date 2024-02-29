// ES6
// untuk melakukan export dan import module JavaScript
// ada dua cara yang bisa kita gunakan. Sebelumnya
// salah satunya yaitu format CommonJS yang berjalan
// di lingkungan Node.js. Pada Node.js sebelumnya
// tidak ada perbedaan antara export satu atau
// beberapa nilai. Semua nilai yang akan diesksport
// dijadikan nilai dari properti module.exports.
// Pada ES6 module, jika kita hanya mengekspor satu
// nilai pada sebuah berkas JavaScript baik itu 
// primtive value, function, array, object, atau class
// kita gunakan keyword export.default

// Contohnya seperti ini;

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
};

export default coffeeStock;

// Lalu, untuk mengimpor nilainya kita dapat menggunakan
// keyword import....from seperti berikut:

// import cofffeStock from "./state.js"

// Berbeda dengan gaya Node.js, kita gunakan keyword
// import ketika mendeklarasikan variabel yang di-import
// Kita juga menggunakan keyword from untuk
// menentukan lokasi berkas JavaScript-nya

// Ketika menggunakan export default, kita dapat
// menggunakan penamaan apa saja saat mendeklarasikan
// variabel untuk menyimpan nilai yang diimpor

// import stock from "./state.js";

// Hal tersebut aman dilakukan karena dengan menggunakan
// export default dapat dipastikan hanya satu nilai yang 
// dieksport pada satu berkas JavaScript.

// Di File index.js dan state.js


const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
};

//export default coffeStock; // ERROR

// terjadi error, disebabkan oleh berkas JavaScript
// yang kita buat tidak dianggap sebagai module. Saat
// ini fitur ES 6 module tidak secara default 
// diaktifkan. Pesan error yang ada di terminal
// menyebutkan dua cara bagaimana mengaktifkan
// ES6 module. Dua cara tersebut
// adalah menambahkan properti package.json
// atau dengan mengubah ekstensi js menjadi mjs
// Liat package JSON

// Tambahkan properti type dengan nilai module
// pada berkas package.json. Lalu jalankan kembali program 
// Anda. Seharusnya Node.js sudah berjalan dengan biak
// dan menampilkan output seperti berikut

// arabica
// robusta
// liberica

// Named Export digunakan untuk mengeksport banyak nilai
// dalam berkas JavaScript. Cara kerjanya mirip seperti
// pada Node.js. Nilai yang akan di eksport dituliskan di 
// dalam object literals, seperti ini:

// Folder state.js
//const coffeeStock = {
    //arabica: 100,
    //robusta: 150,
    //liberica: 200
  //};
   
  //const isCoffeeMachineReady = true;
   
  //export { coffeeStock, isCoffeeMachineReady };


// Lalu untuk medapatkan nilai yang dieksport melalui named
// export, kita gunakan destructuring object

// File Index.js
// import {coffeStock, isCoffeMachineReady} from './state.js';

// console.log(coffeStock);
// console.log(isCoffeMachineReady);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/

// Karena named import menggunakan teknik destructuring
// object untuk mendapatkan nilai, maka pastikan
// penamaan variabel sesuai dengan nama yang 
// variabel yang diekspor

// import {stock, isCoffeeMachineReady} from './state';

/* output
SyntaxError: The requested module './state.js' does not provide an export named 'stock'
*/

// Namun, jita kita tetap ingin mengubah penamaan
// variabel dari named import kita bisa melakukannya
// dengan menambahkan keyword as setelah penamaan
// variabelnyya


// import{coffeeStock as stock, isCoffeeMachineRead} from './state';

// console.log(stock);
// console.log(isCoffeeMachineRead);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/