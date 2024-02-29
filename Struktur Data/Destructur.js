// Destructuring Object & Array
// Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data
// data di JavaScript. JSON(JavaScript Object Notation) merupakan format data paling 
// populer yang digunakan dalam transaksi data saat ini.

[
  {
    id: 14,
    title: "Belajar Fundamental Aplikasi Android",
    author: "Google ATP",
  },
  {
    id: 51,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    author: "Google ATP",
  },
  {
    id: 123,
    title: "Belajar Dasar Pemrograman Web",
    author: "Dicoding Indonesia",
  },
  {
    id: 163,
    title: "Belajar Fundamental Front-End Web Development",
    author: "Dicoding Indonesia",
  },
];

// Pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangung dari array dan object.
// Karena kedua hal ini banyak digunakan untuk mengelola data pada Javascript untuk 
// memudahkan developer, ES6 menambahkan fitur untuk  destructuring object dan array.

// Destructuring merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties
// dari sebuah object ke dalam satuan yang lebih kecil

// Secara tidak sadar mungkin kita pernah melakukan destructuring. Namun, sebelum ES6
// tersebut dilakukan dengan cara sepeerti ini:

const profile = {
  firstname: "John",
  lastname: "Doe",
  age: 18,

};

//const firstName = profile.firstname
//const lastname = profile.lastname
//const age = profile.age
//console.log(firstName, lastname, age);

// Kode diatas, merupakan kode mengekstraksi nilai yang berada di dalam objek, kemudian
// menyimpannya pada variabel lokal dengan nama yang sama dengan properti didalam object profile.

// Destructuring Object
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({})
// di sisi kiri dari operator assignment.
// Contoh
const profilee = {
  firstname: "John",
  lastname: "Doe",
  age: 18,
};

//const{firstname, lastname, age} = profilee; // versi singkat
//console.log(firstname, lastname, age); 

// Pada tanda kurung kurawal di atas, merepresentasikan object yang akan didestrukturisasi
// Di dalamnya terdapat firstname, lastname dan age yang merupakan variabel untuk menyimpan
// nilai properti dari object profile. Kita juuga perlu memperhatikan penamaan variabelnya

// Pastikan penamaannya sama seperti properti objectnya. Melalui nama variabel inilah
// nilai nilai properti object akan dimasukan secara otomatis. Sehingga variabel firstName
// akan berisikan nilai profile firstname. lastname akan berisikan nilai profile.lastname
// begitu juga dengan variabel age akan berisikan nilai profile age.

//Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita
// desktrukturisasikan. Sehinga kita tidak perlu membuat variabel sebanyak properti yang dimiliki
// objeknya, contohnya:
// const {lastname} = profilee;

// Destructuring Assignment 
// Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi 
// variabel. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel
// yang sudah dideklarasikan

//const profile = {
  //firsname: "John",
  //  lastname: "Doe",
  // age: 18,
//}

//et firstname = "Dimas";
//let age = 20;
// menginisialisasi nilai baru melalui destructuring object

//({firstname,age}=profile);

//console.log(firstname)
//console.log(age);

// Saat melakukan destructuring assignmetn, kita perlu menuliskan destructuring object
// di dalam tanda kurung. Jjika tidak menuliskan tanda kurung, tanda kurung kurawal akan
// membuat JavaScript mengirakita membuat block statement, sementara block
// statement tidak bisa berada paada sisi kiri assignment

//{firstname, age} = profilee; block statement tidak bisa berada di kiri
// maka, pada umumnya akan di tulis seperti ini
// profile = {firstname, age};

// Nah, inilah fungsinya tanda kurung. Ia akan memberi tahu JavaScript bahwa tanda 
// kurawal di dalamnya bukan sebuah block statement melakukan sebuah expression
// sehingga assignment dapat dilakukan

//({firstname, age} = profile); //expression

// Default Values
// ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan
// merupakan properti dari objek, maka nilai dari variabel tersebut menjadi
// undefined. Contohnya

//const {firstname, age, isMale} = profile;
//console.log(firstname, age, isMale);
/* output:
John
18
undefined
*/

// Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu
// jika tidak ditemukan. Untuk melakukannya, tambahkan tanda assignment (=) setelah nama 
// variabel dan tentukan nilai default-nya seperti ini:
const { firstName, age, isMale = false } = profile; //cpntohnya

console.log(firstName);
console.log(age);
console.log(isMale);

// Assigning to Different Local Variabel Names
// Namum, sebenarnya dalam proses desktrukturisasi object kita
// bisa menggunakan penamaan variabel lokal yang berbeda. ES6 menyediakan sintaksis
// tambahan yang membuat kita dapat melakukan hal tersebut.
// Penulisannya mirip seperti ketika kita membuat properti beserta nilainya
// pada object.

//Contohnya seperti ini:
const {
  firstname: localFirstName,
  lastname: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
