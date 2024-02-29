// Paradigma Functional Programming 
// Merupakan sebuah paradigma pemrograman di mana proses komputasi
// berdasarkan pada fungsi matematika murni. 
// Functional Programming (FP) ditulis dengan gaya deklaratif yang berfokus
// pada "what to solve" dibanding "how to solve" yang dianut gaya imperatif

const names = ['Hary', 'Ron', 'Jeff', 'Thomas'];


const newNameWithExcMark = [];

for (let i = 0; i<name.length; i++){
  newNameWithExcMark.push(`${name[i]}!`);
}

console.log(newNameWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// Contoh kode di atas merupakan salah satu gaya penulisan kode imperatif. Di
// mana proses pengisian nilai array(baru newNames) berdasarkan array lama
// (names) dilakukan secara manual. Inilah maksud dari "how to solve" di mana
// klta perlu memikirkan bagaimana cara melakukan perulangana (for:) kapan perulangannya
// harus berhenti (i<name.length); bagaimana cara memasukan nilai baru ke dalam 
// array (newNamesWithExcMarh.push).


// Ketika menggunakan gaya deklaratif

const newNameWithExcMarkk = name.map((name) => `${name}`);

console.log(newNameWithExcMarkk);