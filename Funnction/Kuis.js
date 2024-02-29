/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

const minimal = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(minimal(1, 3));

const findIndex = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex([1, 2, 3, 4, 5], 6));

// Rangkuman Materi
// Untuk membuat kode yang bersih dan mudah dipahami, salah satu cara yang 
// bisa kita lakukan adalah dengan menggunakan function.

// Beberapa hal yang telah kita bahas pada modul ini, antara lain:

// Function/fungsi adalah blok atau kumpulan kode yang memungkinkan untuk
//  dipanggil berkali-kali.
// Penamaan fungsi harus mendeskripsikan fungsi dengan jelas. Penamaan yang bagus
//  akan langsung memberi kita pemahaman tentang apa yang dilakukan atau dikembalikan.
// Function dapat menerima masukan nilai melalui parameter.
// Fungsi dapat mengembalikan nilai. Jika tidak, maka hasilnya adalah undefined.
// Karena fungsi berupa nilai, fungsi dapat ditetapkan atau dideklarasikan di setiap
// tempat kode, termasuk variabel atau parameter dari fungsi lain.

function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (value of arrayOfNumbers) {
    if (value < currentMin) {
      currentMin = value;
    } else if (value > currentMax) {
      currentMax = value;
    }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);