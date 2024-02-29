// Export
// Setiap berkas javascript yang berjalan pada Node, memiliki objek module
// lokal yang memiliki properti exports. Properti tersebut digunakan
// untuk mendefenisikan nilai apa yang akan diekspor dari berkas 
// tersebut

// di File state.js
const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
}
module.exports = coffeStock;
console.log(module)
// Kode module.exports = coffeStock membuat coffeStock ditetapkan sebagai
// nilai dari module.export. Nilai properti exports ini nantinya bisa
// di-import dan digunakan pada berkas JavaScript lain

// Jika anda menambahkan console.log(module) pada akhir berkas, maka kita
// akan melihat object coffeStock menjadi nilai dari properti export.

//Module {
    //id: '.',
    //path: '/home/dicoding/Playground/javascript/CoffeeMachine',
    //exports: { arabica: 100, robusta: 150, liberica: 200 },
    //parent: null,
    //filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
    //loaded: false,
    //children: [],
    //paths: [
      //'/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
      //'/home/dicoding/Playground/javascript/node_modules',
      //'/home/dicoding/Playground/node_modules',
      //'/home/dicoding/node_modules',
      //'/home/node_modules',
      //'/node_modules'
    //]
  //}

// Lalu bagaimana caranya untuk melakukan import atau menggunakan object
// yang sudah di export 
// Caranya adalah menggunakan method require()

// Index JS
const coffeStock = require('./state');

console.log(coffeStock)

// Dalam inisialisasi coffeStock(nama variabel bebas kita tentukan), kita
// gunakan method require() dengan memberikan parameter lokal berkas
// state.js. Dengan begitu variabel coffeStock akan memiliki nilai
// module exports yang sama pada berkas state.js. Setelah mendapatkan
// nilainya kita bebas menggunakan seperti variabel lokal pada umumnya

// Kita tidak bisa melakukan export dari kedua nilai
// di atas dengan cara seperti di bawah ini
module.exports = coffeeStock;
// module.exports = isCoffeMachineReady;

// Baris kedua berarti
// kita menginisialisasikan ulang nilai properti 
// module.exports sehingga nilai yang di export hanya
// variabel isCoffeMachineReady

// Solusinya adalah kita tetap mengeksport satu nilai
// tetapi kita akan memanfaatkan object literals ({})

// module.exports = {coffeStock, isCoffeMachineReady};

// Jika kita lihat nilai module pada console
// nilai dari properti exports merupakan sebuah objek
// yang menampung nilai dari objek coffeStock dan 
// variabel isCoffeMachineReady

//Module {
  //id: '.',
  //path: '/home/dicoding/Playground/javascript/CoffeeMachine',
  //exports: {
    //coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    //isCoffeeMachineReady: true
  //},
  //parent: null,
  //filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
  //loaded: false,
  //children: [],
  //paths: [
    //'/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
    //'/home/dicoding/Playground/javascript/node_modules',
    //'/home/dicoding/Playground/node_modules',
    //'/home/dicoding/node_modules',
    //'/home/node_modules',
    //'/node_modules'
  //]
//}

// Lallu bagaimana cara import kedua nilai tersebut
// Pada berkas index.js kita gunakan teknik destructuring
// object untuk mendapatkan nilai yang di-import 
// seperti ini

// Namun ingat, ketika menggunakan destructuring object
// pastikan penamaan variabel lokal sesuai dengan 
// properti objeknya. Jika tidak, maka variabel tersebut
// akan menghasilkan undefined