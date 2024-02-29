// Declaring Function 
// merupakan bagian penting dalam bahasa pemrograman. Tanpa sadar, sebenarnya kita sudah
// menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. log() pada console.log()
// merupakan sebuah function yang berguna untuk menampilkan data pada konsol.
// Tapi sebenarnya apa itu function?
// Mirip dengan fungsi pada matematika, fungsi dalam pemrograman juga digunakan
// untuk menghasilkan output berdasarkan input tertentu.

// Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang
// Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variabe; yang berisi
// blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya di panggil.

// Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword function
// dan nama fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi
// lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut

//multiply(){ nama fungsi 
  //return 5*5; kode yang akan dieksekusi
//};

// Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan
// yang disebut dengan parameter. Parameter merupakan data yang digunakan
// pada fungsi untuk di proses di dalamnya. Sebagai contoh, fungsi console.log()
// dapat menerima argument berupa string atau data lain untuk ditampilkan
// ke konsol

// Berikut contohnya

// multiply(a,b){ // nama fungsi -> a,b parameter
//  return a*b; // kode yang akan di eksekusi
//}

// Parameter & Argument

// Perbedaan mendasar antara keduanya antara lain:

// Parameter merupakan sebuah variabel yang di definisikan sebaga input
// dari sebuah fungsi. Contoh

function multiply(a,b){
  return a *b;
}

// Argument merupakan sebuah nilai atau expression yang dimasukan ke dalam fungsi
// Contohnya:
multiply(3,4);
// Setelah membuat fungsi kita dapa memanggilnya dengan menuliskan nama
// fungsi diikut tanda kurung dan memasukan argumen di dalamnya(jika ada);

//function greeting() {
  //console.log("Good morning");
//}

//greeting();

// Kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter
// untuk mengubah perilaku dari fungsinya.

// Untu menambahkan parameter pad fungsi, tambahkan variabel di dalam
// tanda kurung fungsi. Namun, variabel tersebut tidak memerlukan keyword
// var, let ataupun const. Kita juga bisa menambahkan lebih dari satu parameter
// dengan memberikaan tanda koma antar variabel parameternya. Contohnya fungsi
// greeting akan kita tambahkan parameter name dan languange seperti ini:

function Greeting(name, languange){
  if(languange === "English") {
    console.log(`Good morning ${name}`);
  }else if(languange === "French"){
    console.log(`Bonjour ${name}`);
  }else{
    console.log(`Selamat Pagi ${name}`);
  }
}

Greeting("Harry", "French");

/* output
Bonjour Harry!
*/

// Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai.
// Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan
// perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel
// Contohnya seperti ini:

function multiplyy (a,b){
  return a *b;
}

let result = multiplyy(10,2);
console.log(result);
/* output
20
*/

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikut dengan nilai 
// yang akan dikembalikan . Nilai kembalian tidak hanya number, bisa juga berupa string
// boolean, object, array, atau tipe yang lain.  Seperti inilah fungsi greeting() jika kita
// ubah agar mengembalikan nilai string

let greetingMessage = Greeting("Hary","French");
console.log(greetingMessage);

// Yang perlu kita perhatikan lagi, ketika statenebt return tereksekusi, maka fungsi akan
// langsung terheneti dan mengembalikan nilai.

// Expression Function 
// Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function.
// Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, 
// sehingga expression functio bisa disimpan dalam sebuah varaibel.

// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang 
// tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan
// contoh penulisan expression function:


const greeting = function(name, languange){
  if(languange === "English"){
    return "Good Morning" + name ;
  }else if(languange === "French"){
    return "Bonjour" + name;
  }else{
    return "Selamat Pagi" + name;
  }
}

console.log(greeting('Ron', 'English'));