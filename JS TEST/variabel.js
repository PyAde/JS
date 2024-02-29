// Ada tiga jenis variabel dalam bahasa pemrograman js, yaitu:
// let, var, const
// Var(fuction scope)
// hanya dapat dgunakan dalam fungsi dimana variabel itu didefinisikan. Ini merupakan cara lama mendifinisikan variabel.
// contoh penggunaan let

// let(block scope) adalah salah satu jenis variabel di JavaScript yang diperkenalkan dalam versi 
// ECMAScript 6 atau ES6 (juga dikenal sebagai ECMAScript 2015). 
// let dapat digunakan dalam cakupan block. Block ditandai dengan {...}
let name;
name = "Asep";
console.log(name)
// Atau
let lastname = "ASEP";
console.log(lastname)

// let fullName = let lasttName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
// let fullName = (lasttName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
// let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

// Berikut beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:
// Harus dimulai dengan huruf atau underscore (_).
// Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
// Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
// Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)

//Const merupakan kependekan dari constant.
//  Artinya, kita akan mendeklarasikan sebuah variabel dengan const 
// ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya.

//  Variabel const tidak dapat bisa diubah nilainya, dan apabila di ubah akan terjadi error

// Contoh penggunaan const
const z = 100;
console.log(z);
z = 200; // nilai dari variabel z dirubah, sedangkan variabel merupaka const
//  yang artinya nilai dari variabel tida dapat dirubah
console.log(z)

/* TypeError: Assignment to constant variable. */
//PERINGATAN\\
// Gunakan let untuk membuat variabel dan hindari var
// Gunakan const untuk variabel yang nilainya statis atau tidak berubah

const nama = "Dicoding";
const language = "JavaScript";

console.log(`Hello ${nama}. Welcome to ${language}!`);
