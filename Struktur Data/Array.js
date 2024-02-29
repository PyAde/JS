// Array merupakan tipe data yang dapat 
// mengelompokan lebih dari satu nilai dan 
// menempatkannya dalam satu variabel. Contoh;
let myArray = ["cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

//Perbedaan array dengan object adalah data pada array disusun secara 
//berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, 
//kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan 
//posisi nilai yang ingin diakses.

console.log(myArray[1]);
// output 42.5

// Lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya?
// jika kita mengakses nilai array lebih dari indexnya, maka hasilnya akan (undefined).
// index terakhir array selalu jumlah nilai array -1

let array = ["Pisang", 90, 22.3, false, "Web"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log("Panjang array adalah" + array.length);

// kita dapat menambahkan data ke dalam array, menggunakan metode push().
// Fungsi push ini akan menambahkan data di akhir array.

array.push("JS");
console.log(array);

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa 
// gunakan metode pop()
array.pop();
console.log(array);

// Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift();
// dan unshift. Metode shift() digunakan untuk mengeluarkan elemen pertama dari array,
// sementara unshift() digunakan untuk menambahkan elemen di awal array
array.shift();
array.unshift("Banana");

console.log(array);

// Sama seperti object kita bisa menggunakan keyword delete untuk menghapus data dari array

delete array[1];
console.log(array);

// Perlu di perhatikan bahwa keyword delete hanya menghapus data pada index yang sudah 
// ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan 
// metode splice()

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

//Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan
// elemen pada array tersebut. Caranya dengan memberikan argumen ke-3(atau selanjutnya, bersifat variadic) 
//sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama.

const month = ["Januari","Maret" ,"April"];
console.log("before splice: ", month);
month.splice(1, 0, "Februari"); // menambahkan bulan februari setelah januari
console.log("after splice: ", month);