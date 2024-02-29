// Pure Function
// Merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi tidak
// bergantung pada terhadap nilai yang berada di luar fungsi atau parameternya

// contoh kode

let PI = 3.14;

const hitungLuasLingkaran = (jarijari) => {
  return PI * (jarijari * jarijari);
};

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // niali PI tidak sengaja di rubah

console.log(hitungLuasLingkaran(4)); // 80

// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang
// berada di luar fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan
// fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama

// Penggunaan pure

const hitungluaslingkaran = (jarijari) => {
  return 3.14 * (jarijari * jarijari);
};

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Dengan memindahkan PI secara konstan di dalam fungsi, maka dapat
// dipastikan nilai tersebut tidak akan berubah atau tak sengaja dirubah

// Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang
// keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak
// sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika
// digunakan

const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

// Fungsi createPersonWithAge bertujuan membuat objek person baru dengan tambahan
// properti age dari objek person yang ada. Nah, hal inilah yang menyebabkan fungsi
// creaPersonWithAge bukanlah pure function

// Pure Function

// Immutability
// Berarti  sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras
// dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat

// Konsep immutability sangat kental pada paradigma FP. Sebelumnya pada contoh
// penggunaan array.map. Ketika menggunakan array.map(), alih-alih mengubah nilai
// dari array itu sendiri, malah ia membuat atau menghasilkan array baru

const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNameWithExcMark = names.map((name) => `${name}!`);

console.log({
  names,
  newNameWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

// Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek?

// Contohnya
const user  = {
  firstname: 'Harry',
  lastname: 'Protter', 
}

const renameLastNameUser = (newlastname, user) => {
  user.lastname = newlastname;
}

renameLastNameUser('Potter', user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Jika ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana
// caranya?
// Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung
// terapkan perubahan tersebut pada nilai return dalam objek baru

const userr = {
  firstname: 'Harry',
  lastname: 'Protter' //
}
const createUserWithLastname = (newlastname, user) => {
  return{...user, lastname:newlastname};
}

const newUser = createUserWithLastname("Potter", user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */


// Rekursif
// Merupakan teknik pada sebuah function yang memanggil dirinya sendiri
// Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan
// sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi
// bentuk rekursif


// Hitung mundur
const countDown = start => {
  do{
    console.log(start);
    start -= 1;
  }
  while(start > 0);
};

countDown(10);
// Maka, bentuk rekursinya adalah sebagai berikut:
const countDown2 = start => {
  console.log(start);
  if(start > 0) countDown2(start-1);
};
countDown2(10);

// Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi
// dengan rekursi. Dengan rekursi kita dapat membuat dan mengolah data structure
// seperti Tree dan Array...

// Higher-Order Function

// JS memiliki kemampuan First Class Functions, karena pada itu fungsi pada JavaScript
// dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel
// memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan 
// function di dalam function

const hello = () => {
  console.log('Hello!');
};
const say = (someFunction) => {
  someFunction();
}
const sayHello = () => {
  return () => {
    console.log('Hello!');
  }
}
hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

// Karena dengan kemampuan First Class Functions-nya itu, ktia dapat membuat 
// Higher-Order Function menjadi bagian konsep paradigma FP.
// Higher-Order Function menjadi bagian konsep paradigma FP. Higher Order Function
// merupakan fungsi yang dapat menerima fungsi lainnya pada argumen;
// mengembalikan sebuah fungsi atau bahkan keduannya... 

// Teknik Higher-Order Function biasanya digunakan untuk:

// Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous
// menggunakan callback, promise dan lainnya

// Membuat utilities yang dapat digunakan di berbagai tipe data

// Membuat teknik curying atau function composition

// Array map() merupakan salh satu contoh Higher-Order Function yang ada di JavaScript
// Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function

// Dengan mengetahui adanya Higher Order Function, anda bisa membuat fungsi map()
// versi anda sendiri

const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) =>{
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr [index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);

  }
  return loopTrough(arr, action);
}

const newNamess = arrayMap(names, (name) => `${names}!`)

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */