// For lop
// cara melakukan proses loop pada JavaScript, "for"
// merupakan salah satu cara yang banyak digunakan.
// Struktur dasar dari for tamnpak seperti beriktu:

//for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
  // do something
//}

//contoh
for(let i = 0; i < 5; i++) {
  console.log(i);
}
// Pertama, variabel i sebagai index iterasi. 
//Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
//Kedua, operasi perbandingan. Pada bagian 
//ini, JavaScript akan melakukan pengecekan
// kondisi apakah perulangan masih perlu 
//dilakukan. Jika bernilai true, maka kode 
//di dalam blok for akan dijalankan.
//Ketiga, increment/decrement. Di sini kita melakukan penambahan atau 
//pengurangan variabel iterasi. Jadi, pada contoh di atas variabel i akan ditambah
// dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan dapat terus berjalan selama kondisinya terpenuhi.
//JIka diartikan, maka kode di atas bisa dimaknai dengan “Jika i kurang dari 5, 
//maka tampilkan nilai i.”

// For of loop
//Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir 
//pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding
// for loop biasa. Sintaks dasar dari for of loop adalah seperti ini:

//for (arrayItem of myArray) {
  // do something
//}
// contoh
let myArray = ["budi", "asep", "abdul"];

for(const arrayItem of myArray) {
  console.log(arrayItem);
}

// While and do-while
// Metode lain untuk melakukan looping adalah dengan statement while. 
//Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan 
//menjalankan kode di dalam blok while ketika bernilai true.

//Untuk menampilkan angka 1 sampai 100 dengan while kita bisa menulis 
//kode seperti berikut:
let i = 1;
while(i < 100){
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
}while(i <= 100);

// Infinite Loops 
// Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita
// hindari yaitu infinite loop. Infinite loop atau endless loop adalah kondisi di 
//mana program kita stucked di dalam perulangan. Ia akan berjalan terus hingga 
//menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal,
// seperti mematikan aplikasi.

//Kode berikut ini adalah contoh di mana kondisi infinite loop dapat terjadi:
// contoh while
let a = 1;
while (a <= 5) {
  console.log(a);
}
//contoh for
for(let b = 0; b < 5; b = a){
  console.log(b);
}

//Dapatkah Anda menemukan apa yang salah dari kode di atas sehingga terjadi 
//infinite loop?

//Jawabannya adalah karena variabel i selalu bernilai 1. Alhasil,
// kondisi i <= 5 akan selalu bernilai true yang mengakibatkan aplikasi akan terus
// mencetak 1 ke konsol sehingga mengalami crash.

