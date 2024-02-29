//Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang
// terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class
// Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil
// seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda
// membuat class Mail, secara umum propertinya adalah sender, receiver,
// subject, dan body.

class Car {
  constructor(brand, color, maxspeed, chassisnumber) {
    this.brand = brand;
    this.color = color;
    this.maxspeed = maxspeed;
    this.chassisnumber = chassisnumber;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

// Nilai dari properti biasanya diambil dari dari argumen constructor agar
// nilainya dapat bervariasi setiap kali membuat instance

const car1 = new Car("Bmw", "red", 200, "b-1");
const car2 = new Car("Audi", "blue", 220, "a-1");
const car3 = new Car("BWM", "black", 250, "b-2");

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/
// Contohnya , kita tidak ingin pengguna menetukan nomor rangka mobil secara
// mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam
// fungsi constructor.
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/

// Properti Getter dan Setter
// secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat
// diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem
// nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat

// pakek class baris ke 46
const car = new Car("BMW", "red", 200);
car.chassisNumber = "BMW-1";

console.log(car);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
*/

// Cara meproteksi agar nilai dari properti chassisNumber tidak dapat diubah
// ada dua tipe properti, yaitu data property dan accessor property.

// Data property merupakan properti yang sejauh ini kita lihat, properti
// yang langsung menampung sebuah nilai di dalam sebuah objek

// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah
// getter dan setter. Nilai yang didapatkan dari properti tersebut di kontrol oleh
// method get dan cara menetapkan nilai tersebut di kontrol oleh mehtod set

// Berikut contoh dari accessor property

// Caraa Aman
class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname() {
    retrun(`${this.firstname} ${this.lastname}`);
  }
  set fullname(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Motor {
  constructor(name, speed, color) {
    this.name = name;
    this.speed = speed;
    this.color = color;
  }
  // kontrol get
  get Motor() {
    return `${this.name} ${this.speed} ${this.color}`;
  }
  // Kontrol set untuk menetapkan nilai
  set Motor(Motor) {
    const [name, speed, color] = Motor.split(" ");
    this.name = name;
    this.speed = speed;
    this.color = color;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

// Di dalam class user, Anda bisa melihat bahwa terdapat data property
// firstname dan lastname. Nilai dari properti tersebut ditetapkan via argumen
// constructor. Selain itu, anda juga bisa melihat sebuah method get fullName
// dan set fullname. Method tersebut merupakan accessor property yang mengatur
// cara akses dari property fullname.

// Sebab kita menetapkan getter dan setter untuk properti fullname, maka kita
// maka kita bisa mengakses properti tersebut melalui instance User. Ketika
// kita coba mendapatkan nilai properti fullName dengan cara user.fullname
// method getter akan dijalankan dan nilai yang dikembalikan akan menjadi nilai dari
// properti tersebut. Begitu juga ketika kita coba menetapkan nilai properti
// fullname dengan cara user.fullname = 'Fulan Fulanah' kode di dalam method
// setter akan dijalankan.

// Penting
// Method getter harus mengembalikan sebuah nilai dan nilai tersebut menjadi nilai properti
// method setter harus menerima satu argumen yang nilainya diambil dari operand
// ke dua ketika melakukan assignment operator

// Cara memproteksi perubahan chassisNumber, kita bisa memanfaatkan
// getter dan setter sebagai wrapper dari properti aslinya. Tujuan agar
// getter dan setter bisa mengontrol akses seperti mendapatkan dan menetapkan
// nilai properti

// Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber
// misalnya, dengan menambaahkan tanda garis bawah di depannya menjadi _chassisNumber

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

// Lalu, kita tetapkan getter dan setter untuk properti chassisNumber. Untuk
// getter, kita kembalikan dengan nilai properti _chassisNumber

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
}

// Kita tidak ingin nilai chassisNumber, cetak saja teks peringatan
// menggunakan console,log() seperti ini

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car = new Car("BMW", "red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);

/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/

// Catatan
// Sebenarnya nilai chassisNumber masih bisa diubah jika kita mengubah langsung melalui
// properti _chassisNumber. Kita tidak direkomendasikan untuk mengubah atau mendapatkna
// nilai properti objek diawali dengan underscore. Karena dengan kita memberi tanda
// score pada sebuah properti, tanda underscore bukan untuk diakses alias bersifat privat

// JavaScript versi ES20 dengan fiture private indetifier. Dengan adanya fiture tsb
// kita bisa membuat private property

// Method
// merupakan sebuah fungsi yang berada di dalam class dan dapat diakses melalui
// instance Class tsb. Method biasanya mengindikasikan hal yang dpt dilakukan
// oleh sebuah class.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
  // Method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
  // Method
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }
  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);
    setTimeout(() => {
      this.send();
    }, delay);
  }
  saveAsDraft() {
    console.log("Saving mail as draft");
  }
}
// Sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya
// pada method turn() di class Car dan sendLater di class Mail, kami memanfaatkan
// argumen direction dan delay untuk menetapkan arah dan waktu delay dalam menjalankan
// methodnya

// Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya
// melalui keyword this.

// Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut

const car = new Car("BMW", "red", 200);

car.drive();
car.turn("left");
car.reverse();

/* Output:
BMW red is driving
BMW red is turning left
BMW red is reversing
*/

// Agar kode di dalam constructor lebih rapi, kita bisa membuat method
// yang digunakan internal yang menampung kode random tersebut. Biasanya
// Method yang hanya digunakan secara internal disebut dengan private dan
// namannya diawaili dengan tanda underscore

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change chassis number");
  }
  // Method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    console.log(`${this.brand} ${this.color}`);
  }
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

// Member Visibility
// disebut juga sebagai hak akses pada sebuah properti dan method di dalam class
// Secara default, seluruh properti dan method yang dibuat di dalam class bersifat
// public, alias dapat diakses dl luar dari kode class via instance. Selain public
// kita juga bisa membuat properti dan method bersifat private, terutrama ketika kita
// ingin properti atau method  tersebut hanya digunakan dalam cakupan kode di
// dalam class saja (penggunaan internal)

// Contoh pada class Car, kita sudah membuat properti _chassisNumber dan
// _generatreChassisNumber() dengan tanda underscore. Namun kedua member tersebut
// tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah
// nilainya

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
  set chassisNumber(chasissNumber) {
    console.log("you are not allowerd to change the  chassis number");
  }
  // method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const car = new Car("Nissan", "Silver", 200);
console.log(car._chassisNumber);
car._chassisNumber = "BMW-1";
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());

/* Output:
BMW-85
BMW-1
BMW-667
*/

// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi
// mengenalkan cara dalam menetapkan hak akses private pada
// properti dan method objek, yakni dengan menambahkan tanda #
// di awal penemaan properti atau method

class Car {
  #chassisNumber = null;
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }
  get chasissNumber() {
    return this.#chassisNumber;
  }
  set chasissNumber(chasissNumber) {
    console.log("you are not allowed to change the chassis number");
  }
  // Method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

class Car {
  #chassisNumber = null; // enclosing class

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }
  get chasissNumber() {
    return this.#chassisNumber;
  }
  set chasissNumber(chasissNumber) {
    console.log("you are not allowed to change the chassis number");
  }
  // Method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }

}

const car = new Car('S15', 'Red', 200)
car.#generateChassisNumber();
console.log(car.#chassisNumber);