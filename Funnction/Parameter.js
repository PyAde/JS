// Function Parameter
// Parameter  merupakan variabel yang didefiniskan sebagai input
// dari sebuah fungsi. Contoh:

function multiply(a, b){
  return a* b;
}
// Argument merupakan nilai atau exoression yang dimasukan ke dalam fungsi
// Contohnya
multiply(3,4);
// Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number,
// objectm bahkan fungsi lain.

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan
// destructuring object untuk mendapatkan nilainya

// Contohnya seperti berikut;
const user = {
  id: 24,
  displayName: "Kren",
  fullName: "Kylo",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo 
*/

// Default Parameters 
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen
// yang dimasukan ke dalam parameter. Ini berarti kita bisa memasukan  argumen meskipun
// tidak sesuai dengan parameter yang telah di definisikan.

function exponetsFormula(baseNumber, exponet = 2){
  const result = baseNumber ** exponet;
  console.log(`${baseNumber}^${exponet} = ${result}`);
};

exponetsFormula(2);
/* output
2^undefined = NaN
*/

// Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari
// oarameternya, maka parameter yang tidak terdefinisi akan bernilai undefined.
// Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada
//  parameter, Nilai ini akan digunakan jika tidak memasukan parameter.

exponetsFormula(3);

// Rest Parameter
// Jika spread operator menyebarkan array menjadi beberapa elemen berbeda,
// rest parameter ini adalah kebalikan dari operator tersebut. Penasan?

// Rest paramater juga dituliskan menggunakan three consecutive dost(...). Dengan
// rest parameter, kita dapat menggabungkan beberapa eleemn menjadi satu array.
// Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan
// parameter yang tidak pasti.

// Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen
// seperti berikut:
function sum(...numbers){
  let result = 0;
  for(let number of numbers) {
    result += number;
  }
  return result;
};

console.log(sum(1,2,3,4,5,));

/* output
15
*/