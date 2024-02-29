// Arrow Function

// Arrow function expression atau lebih dikenal sebagai arrow function. Arrow function
// mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya
// Sesuai namanya, fungsi di definisikan menggunakan tanda panah atau fat arrow
// (=>). Tentunya penulisan arrow function ini akan lebih singkat 

// Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan
// regular function/ Regular function dapat berupa function declaration
// dan function  expression. Namun, arrow function hanya berupa
// expression function saja. Itu sebabnya arrow function memiliki nama lengka
// "arrow function expression" 

// Regular Function

// function declaration
function sayHello(greet) {
  console.log(`${greet}`);
};

// function expression
const sayName = function (name){
  console.log(`Nama saya ${name}`);
};

// Arrow function

// function expression

const sayHello = (greet) => {
  console.log(`${greet}`);
};

const sayname = (name) => {
  console.log(`Nama saya ${name}`);
};

// Pada arrow function kita tidak perlu menuliskan keyword function setiap
// membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu
// diikut dengan tanda panah(=>) sebelum kurung kurawal.

//const sayname = (name) => {
//  console.log(`Nama saya ${name}`);
//};

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda
// kurung seperti berikut

const sayNamee = name => {
  console.log(`Nama saya ${name}`);
};

sayNamee("Budi");

/* output
Nama saya Budi
 */

// Namun, jika kita sama sekali tidak membutuhkan paramater, maka kita tetap menuliskan
// tanda kurung namun kosong seperti ini:

const sayaHelloo = () => {
  console.log("Selamat pagi semuanya")
}

sayHello();
/* output
Selamat pagi semuanya!
 */

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan
// return (hanya berkeja untuk fungsi satu baris)

const multiply = (x, y) => x * y;
console.log(multiply(3,4));

/* output
12
 */