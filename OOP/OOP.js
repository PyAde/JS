// OOP
// Object-oriented programming atau disingkat OOP merupakan paradigma pemrograman
// yang banyak di terapkan ketika membangun aplikasi. Paradigma OOP kental dengan konsep
// objek yang mengandung dua hal, yaitu atribut dan method. Selain itu, OOP juga kental dengan
// konsep object blueprint yang akrab dikenal dengan sebutan class

// Meskipun JavaScript bukan bahasa pemrograman yang berbasi class seperti Java
// tetapi di JavaScript kita juga bisa menerapkan paradigma OOP

// Object-oriented programming (OOP) adalah salah satu paradigma dalam pemrograman
// yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek objek terseebut
// Di OOP, objek merupakan sebuah entitas yang terdiri daru dua hal, yakni
// properties dan methods

// Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek 
// tersebut

// Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut

// Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP
// bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil.
// Di dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa 
// properti seperti merek, warna, kecepatan masksimal, dan nomor rangka.
// Objek tersebut memiliki kemampuan atau method seperti maju, mundur, belok

//Objek = Mobil
// Properties => Merek
//            => Warna
//            => Kecepatan maksimal
//            => Nomor rangka
//Methods     => Maju
//            => Mundur
//            => Belok
// Lalu, seperti apa bentuk objek mobil dalam bentuk JavaScript?
// Sama seperti yang sudah anda ketahui di modul Struktur Data,
// objek mobil dibuat dengan menggunakan tanda kurung kurawal dan untuk mehtod-nya, 
// Anda cukup buat properti yang merupakan sebuah fungsi, contohnya seperti ini

const car ={
  // Properties
  brand: "Ford",
  color: "Red",
  maxSpeed: 200,
  chassiNumber: "f-1",
  // Method
  drive: () =>{
    console.log("driving");
  },
  reverse: () =>{
    console.log("reversing");
  },
  turn:() => {
    console.log("turning");
  },
}

console.log(car.brand); //Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

// Kode di atas merupakan contoh objek mobil
// car di JavaScript. Seperti yang Anda lihat, objek car memiliki properti brand,
// color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn
// Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut

// Namun, masalah yang dipecahkan oleh paradigma OOP tidak hanya sebatas membuat
// objek sederhana saja. Seiring berkembangnya aplikasi, pembuatan objek akan
// semakin banyak dan saling berinterkasi satu dengan yang lainnya. Sehingga, kita 
// harus mengetahui cara efektif mengelola objek termasuk cara membuatanya.

// Mari kita angkat sebuah masalah baru dari contoh kode di atas
// Bagaimana jika Anda ingin membuat objek dua mobil baru dengan nilai yang berbeda
// Haruskah andd mendefinisikan properti dan method yang sama secara berulang seperti
// contoh kode di bawah ini?

// Mobil kedua
const myCar =  {
  brand: 'Tesla',
  color: 'black',
  maxSpeed: 250,
  chassiNumber: 't-1',
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing')
  },
  turn: () => {
    console.log('turning')
  }
}

const yourCar = {
  brand: 'BMW',
  color: 'white',
  maxSpeed: 300,
  chassiNumber: 'b-1',
  drive: () => {
    console.log('driving')
  },
  reverse: () => {
    console.log('reversing')
  },
  turn: () => {
    console.log('turning')
  },
}

// Kami rasa kode di atas sungguh tidak efektif. Bagaimana jika ada banyak mobil yang harus
// Anda buat? Contoh, anda membangung aplikasi yang memiliki entitas pelanggan. Jika anda
// menggunakan cara di atas, mampukah anda membuat objek pelanggan jika aplikasi
// sudah digunakan oleh 100 pelangggan?

// Dalam memecahkan masalah ini, OOP menawarkan sebuah solusi yakni dengan membuat
// object blueprint. Melalui object blueprint, kita bisa membuat cetakan untuk
// membuat objek yang sudah terdefinsikan macam-macam properti dan methodnya. Sehingga
// kita cukup menggunakan cetakan tersebt untuk membuat objek yang serupa, tetapi
// kita bisa menentukan nilai-nilai properti yang berbeda.

// Contohnya, anda bisa membuat sebuah blueprint bernama Car. Di dalam blueprint tersebut
// Anda bisa definsikan properti-properti dan method yang ingin dimiliki objek mobil nantinya
// Anda bisa dengan mudah membuat banyak objek di mobil contohnya myCar, yourCar dan 
// dicodingCar dengan lebih mudah.

// Object Blueprint: Car => Instantiate => car
//                       => instantiate => myCar
//                       => Instantiate => yourCar