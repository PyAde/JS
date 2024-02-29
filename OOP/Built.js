// Di JavaScript terdapat built-in class atau class bawaan seperti Date
// Object, Array, Math, dan String. 
// Class bawaan dapat kita manfaatkan untuk berbagai hal,
// mulai dari manipulasi data-data terkait dengan array, operasi matematika,
// manipulasi karakter, ataupun manipulasi objek.

//Mari kita ambil contoh class Date.

//Date merupakan class bawaan JavaScript yang digunakan untuk utilitas terkait
// tanggal dan waktu. Class ini sangat membantu ketika program yang kita buat 
//terdapat penggunaan dan manipulasi tanggal dan waktu. Kita bisa mudah untuk 
//mendapatkan waktu dalam bentuk instance Date atau mengonversinya ke dalam 
//berbagai format yang kita inginkan.

//Berikut contoh dalam penggunaan class bawaan Date.

const date = new Date();
 
const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});
 
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});
 
const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});
 
console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);
 
/**
* Output:
* 22/12/2022 10.37.14
* 2022/12/22 12:37:14
* 22/12/2022 11.37.14
*/

//Mari kita berbicara tentang class bawaan lain, yang menjadi
// salah satu favorite kami adalah Array.

//Dengan class Array, kita bisa membuat struktur data dalam bentuk array.

const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray); // ['a', 'b', 'c', 'a', 'b', 'c']
// Sekilas, tidak ada spesial dari class ini karena sebenarnya kita bisa
// membuat array seperti itu dengan menggunakan array literals (tanda []). 
//Namun, dengan class Array, kita bisa menerapkan konsep pewarisan untuk 
// membuat subclass baru yang dapat kita modifikasi sesuai kebutuhan. 

// Contohnya, kita ingin membuat sebuah struktur data mirip array, tetapi
//  nilai tiap elemennya unik, maka kita bisa membuat subclass UniqueArray 
// yang mewarisi class Array. Di dalam subclass UniqueArray, implementasinya
//  tampak seperti ini.

class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
 
    super(...uniqueValue);
  }
 
  push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}
 
const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']