// Suatu fungsi yang dapat mengakses variabel di dalam lexical scopenya disebut dengan 
// closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di
// dalam memiliki akses ke variabel di lingkup induknya

function init(){
  const name = "Obi wan"; // variabel lokal di dalam scop
  function greet() { // Inner function, merupakan contoh closure
    console.log(`Halo ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }
  return greet();
}
// init();
// output
// Halo, Obi Wan

// Fungsi init () memiliki variabel lokal name dan fungsi greet().
// Fungsi greet adalah inner function yang didefinisikan dalam init() dan hanya bisa 
// diakses dari dalam fungsi init().. Perhatikan bahwa fungsi greet() tidak 
// memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel
// di parent function-nya, sehingga greet() dapat mengakses variabel name. itulah yang
// dimaksud dengan lexical scope.

// Sekarang perhantikan contoh kode berikut:

const myFunction = init();
myFunction();
/* output
Halo, Obi Wan
 */

// Kode diatas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet()
// dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel
// name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus
// ketika fungsinya selesai di jalankan. Namun, pada kasus di atas fungsi greet() yang
// diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel
// name. Variabel pada mekanisme di atas telah tertutup (close covered) yang berarti 
// variabel tersebut berada di dalam closure

// Memang di awal cukup sulit untuk memahami closure. Jadi, mari kita lihat langsung
// untuk apa closure ini digunakan pada suatu program yang nyata.

// JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi
// private seperti bahasa Java. Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun.
// Kenapa kita membutuhkan private method? Salah satunya adalah untuk membatasi akses
// ke fungsi atau variabel.
// Perhatikan contoh berikut:

let counter = 0;

const add = () => {
  return ++counter;
}
console.log(add());
console.log(add());
counter = 23;
console.log(add());
/* output
1
2
24
 */
// Nilai counter akan bertambah ketika kita memanggil fungsi add(). Namun, kita juga
// bisa mengubah nilai counter secara langsung dengan assignment operator. Pada contoh
// program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada
// nilai counter bisa saja memunculkan bug

// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti
// inilah contoh program counter yang dibuat dengan closure

const Add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const addCounter = Add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());