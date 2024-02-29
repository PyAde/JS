// Reusable Function

// Array Map
// merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan
//. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah
// callback function

['Harry', 'Ron', 'jeff', 'Thomas'].map(() =>{

});

// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan 
// akan memiliki akses pada index array sesuai dengan iterasinya

['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) =>{

})

// fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan
// dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses
// item array, biasanya developer menggunakannya untuk menghasilkan nilai baru


const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas']
.map((name) => {
  return `${name}`;
})

console.log(newArray);

// Array Filter
// merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Fungsi ini bergunaa
// untuk melakukan proses penyaringan(filtering) terhadap nilai array yang
// ada.
// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function
// dari fungsi ini harus mengembaalikan boolean

// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false
// pada array

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */

// Contoh lain, penggunaan filter untuk menyaring array dari objek
// siswa yang layak mendapatkan beasiswa berdasarkan nilai skor
// yang di dapat

const student = [
  {
    name : 'Harry',
    score : 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Bethy',
    score: 75,
  },
  {
    name: 'Ron',
    score: 90,
  },
]
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

// Array reduce
// sama seperti array.map(), array reduce() adalah fungsi bawaan dari data yang
// bertipe array yang digunakan untuk mengeksekusi fungsi reduce pada setiap 
// elemen array dan hanya mengembalikan output satu nilai saja

arr.reduce(callback(accmulator, currentValue, [currentIndex],[array], ), [initialValue]);

// [...] adalah opsional parameter

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 * 
 */

// Array some
// merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan
// menghasilkan nilai boolean

arr.some(callback(element, [index], [array]), [thisArg])
 
// [...] adalah opsional parameter
// Nilai yang dihasilakn didasarkan pada pernyataan apakah ada setidaknya satu dari
// deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan
// dalam callback function

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam
// deretan angka terdapat angka genap

const array = [1,2,3,4,5];
const even = array.some(element => element % 2 === 0);

console.log(even);
/** 
output true
**/

// Array find 
//digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai
// yang sesuai dengan kriteria yang kita definisikan pada callback
// function

// yang membedakan array.find() dengan array.some(), find akan 
// menghasilkan satu dari elemen yang pertama kali ditemukan berdasarkan
// kriteria yang terpenuhi pada item array...

arr.find(callback(element, [index], [array]), [thisArg]);
// [...] adalah opsional parameter

const studentss = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const findJames = studentss.find(student => student.name === 'James');
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/

// Array sort 
// merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan
// nilai dari sebuah deretan nilai. Secara default, fungsi sort akan 
// mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya
// secara ascending

arr.sort([compareFunction])
// [...] adalah opsional parameter

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// contoh pengurutan di atas didasarkan pada pengurutan  bentupe tipe data
// string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan 
// kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa)
// maka kita perlu membuat compare function sendiri

const array3 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan 
// menghasilkan 3 result yaitu negatif(-) dan positif(+);

// jika negatif maka 'a' akan diletakan sebelum 'b'
// jika positive maka 'b' akan diletakkan sebelum 'a'
// jika, 0 maka tidak ada perubahan posisi

// Array every 
// merupakan sebuah fungsi bawaan dari array yang digunakan untuk mengecheck
// apakah semua niali dari sebuah array sesuai dengan kriteria yang didefinisikan

arr.every(callback(element, [index], [array]))

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

// Array ForEach
// merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya
// berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */

//Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for).
// Hal ini juga berlaku ketika pada fungsi map dan filter.

const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  if(namess[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
 
names.forEach((namess) => {
  //if(names === 'Jeff') continue; // Tidak Bisa!
  //console.log(`Hello, ${name}`);
});