// JavaScript bukanlah class-based languange, melainkan prototype based languange

// Cara membuat object blueprint menggunakan constructor function

function Car(brand, color, maxSpeed, chassisNumber){
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

// Kode di atas merupakan contoh membuat  object blueprint dari sebuah mobil
// Anda bisa membuat objek mobil yang merupakan instance dari Car dengan memanfaatkan
// constructor function Car

// Mmebuat objek mobil dengan constructor function Car

const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', ' Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 200, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

// Fungsi diatas bukanlah fungsi biasa, melainkan constructor function. Berikut beberapa
// perbedaan yang harus Anda perhatikan

// Penamaan fungsi yang merupakan constructor function, secara kovensi harus 
// ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut
// Car, bukan car. Hal ini penting untuk anda ikuti guna membedakan fungsi biasa dengan 
// constructor function karena penggunaannya berbeda.

// Constructir function dapat memanfaatkan keyword this yang bernilai objek 
// (instance) dirinya sendiri. Keyword this dapat dimanfaatkan untuk mengakses
// nilai properti atau method dari objek tersebut. Contoh, kami menggunakan 
// keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain
// itu, di dalam method drive, kaami juga menggunakan this untuk mendapatkan nilai 
// properti brand dan color

// Constructor function memiliki internal property bernama prototype. Properti
// ini digunakan untuk mendefinisikan method-method yang akan dimilki oleh objek
// yang dibuat. Alesan method perlu didefinisikan  di dalam prototype agar mudah
// untuk diwarisi ketika melakukan pewarisan

// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya
// dengan menambahkan keyword new. Contoh, pada kode di atas perhatikan cara kami
// memanggil fungsi Car untuk membuat objek car1, car2, dan car3

// Constructor function hanya dapat dibuat dengan reguler function. Anda tidak 
// dapat membuat constructor function dengan arrow function. Arrow function tidak
// dapat dipanggil dengan keyword new.

// Contoh jika anda barbar menggunakan arrow function

const Carr = (brand) => this.brand = brand;

const caar1 = new Car('Toyota');

/* Output
TypeError: Car is not a constructor
*/

// Sitanks Class Die ES 6
// Sintaks JavaScrpt modern (ES6) menawarkan cara membuat constructor function dengan
// menggunakan keywrod class. Hal ini membuat penerapan OOP di JavaScript mirip 
// seperti bahasa pemrograman berbasis class. Kita bisa menulis constructor
// function Car dengan gaya class seperti ini

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
 
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}
 
// Membuat objek mobil dengan constructor function Car
const car4 = new Car('Toyota', 'Silver', 200, 'to-1');
const car5 = new Car('Honda', 'Black', 180, 'ho-1');
const car6 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car4);
console.log(car5);
console.log(car6);
 
car1.drive();
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

// Walaupun di JavaScript sudah hadir sintaks class, hal itu tidak membuat JS
// mejadi class-based languange. Untuk membuktikan hal tersebut, kita bisa 
// mengecek tipe class melalui operator typeof

class Car {};
console.log(typeof Car);
 
/* Output
function
*/