// Set
// Set merupakan sebuah kumpulan nilai (set of values). Hal yang membedakan set dengan struktur data yang
// lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data 
// di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh
// deklarasi Set di bawah ini;

const numberSet = new Set([1, 4, 6 ,4 ,1]);
console.log(numberSet)
/* output
Set(3) { 1, 4, 6 }
*/

// Kode di atas terdapat beberapa angka yang di duplikat, yaitu angka 1 dan 4. Secara
// otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6};

//Untuk menambahkan data ke dlam Set kita bisa memanfaatkan fungsi add()

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

// Fungsi add( ) hanya menerima satu argumen, Jika anda memasukan array, maka array 
// tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan di abaikan

numberSet.delete(4);

console.log(numberSet);
/* output
Set(4) { 1, 6, 5, 10 }
*/

// Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukan ke dalam
// fungsi delete adalah nilai yang ingin dihapus, bukan index-nya