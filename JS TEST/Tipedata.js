// ES6 => Merupakan sebuah singkatan dari ECMAScript versi 6. ECMAScript merupakan
// sebuah standarisasi scripting languange (javascript) yang dibuat oleh European Computer 
// Manufactures Association (ECMA)


// Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. 
// Undefined
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya,
//  ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.
let x;
console.log(typeof(x))
console.log("\n")

// Numbers
// Nilai dari tipe data number adalah angka. 
let y = 10;
console.log(typeof(y))
console.log("\n")

// Operator js
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log("\n")
/* output:
21
3
108
1.3333333333333333
3
*/

// BigInt
// Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). 

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
// String, Number, Array, Boolean,  Function, Object
