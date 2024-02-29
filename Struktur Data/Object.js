//  Sebuah tipe data yang sangat berguna dalam
// pengembangan aplikasi dengan JavaScript.
// Object mampu menyimpan nilai dari beragam tipe 
// data dan membentuk data yang lebih kompleks.

// Untuk menetapkan objek pada sebuah variabel kita gunakan 
// tanda kurung kurawal {}

// const user = {};
// let object = {key1: "value1", key2: "value2", key3: "value3",};
// Key harus berupa string dan dituliskan sebelum titik dua (:), lalu
// diikuti dengan value-nya. Meskipun key merupakan string, kita tidak perlu
// menuliskan tandapetik kecuali ada karakter khusus seperti spasi

// Contoh
const character = {
  name: "Luek Skywalker",
  age : 19,
  species: "Human",
  Hair_color : "Blond",
};

// Tanda koma pada properti terakhir bersifat opsional. Namun, jika tanda koma tersebut
// ditulis akan lebih memudahkan ketika kita ingin memindah, mengubah atau menghapus properti

// Satu object dapat memiliki beberapa pasang key-value yang dipisahkan dengan  tandah koma (,)
const user = {firstname: "Luke", lastname: "Skywalker", age: 19, isJedi: true};
// Versi untuk memudahkan membaca kode

const user2 = {
  firstname : "Luke",
  lastname : "Skywalker",
  age: 19,
  isJedi: true,
};
// Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object
// lalu tanda titik dan diikuti nama propertinya
// Contoh 
console.log(`Halo, nama saya ${user.firstname} ${user.lastname}`);
console.log(`Umur saya ${user.age} tahun`);

// Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket
// atau tanda kurung siku
// userr = ["home world"]

const userr = {
  firstname: "Luke",
  lastname : "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log(`Halo, nama saya ${user.firstname} ${user.lastname}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${userr["home world"]}`);

// Selanjutnya kita akan memdofikasi sebuah object. Untuk mengubah nilai properti di dalam
// object kita gunakan assignment operator (=).

const spaceship = {
  name: "Budi",
  manufacturer : "Engineering Corporation",
  maxSpeed : 1200,
  color: "Light gray",
}
spaceship.color = "Glossy red";
spaceship.maxSpeed = 1300;
//spaceship = { name: "New Millenium Falcon" }; error
console.log(spaceship)
// Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa 
//kita bisa mengubah nilainya?

//Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi 
//ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di
// dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita 
//menginisialisasi ulang variabel dari object.

// Ketika kita mengubah object menggunakan assignment operator dan 
//property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan
// nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan 
//tidak ditemukan, maka property baru akan ditambahkan ke object.

spaceship.class = "Light freigther"; // akan ditambahkan ke dalam object
console.log(spaceship)

// kita juga dapat mengapus property pada object menggunakan keyword delete seperti berikut:
delete spaceship.manufacturer;
console.log(spaceship);
/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */