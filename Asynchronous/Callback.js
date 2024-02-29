// Mengubah Callback Menjadi Promise dengan Promisify
// Pada materi sebelumnya, kita sudah belajar cara 
// mengubah callback menjadi Promise. Sekarang kita 
// akan coba mengubah callback menjadi Promise dengan 
// pendekatan yang berbeda. Di Node.js, terdapat sebuah fungsi dari core module util yang dapat mengubah fungsi asynchronous callback-based menjadi Promise-based dengan mudah, ia bernama promisify.

// Mari kita angkat kembali kode dari fungsi
// getUsers() callback-based berikut.

function getUsers(isOffline, callback){
    // simulate network delay
    setTimeout(() =>{
        const users = ['John', 'Jack', 'Abigail'];
        if(isOffline){
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }
        callback(null, users);
    }, 3000);
}

// Pada materi sebelumnya, kita sudah mengubahnya
// menjadi Promise-based dengan me-refactor kode fungsi
// tersebut. Namun, dalam skenario nyata, sering kali
// kita tidak memiliki akses untuk me-refactor sebuah
// fungsi. Contohnya ketika menggunakan library pihak
// ketiga. Ketika menghadapi kasus tersebut, bagaimana
// cara termudah dalam mengubah fungsi tersebut menjadi Promise-based?

// Node.js menawarkan solusi, yaitu menggunakan fungsi
// promisify dari core module util. Dengannya, kita
// bisa secara mudah membuat fungsi baru yang
// mengimplementasikan Promise berdasarkan fungsi
// callback-based, contohnya seperti ini.

const {promisify} = require('util');

function getUsers(isOffline, callback){
    // simulate network delay
    setTimeout(() =>{
        const users = ['John', 'Jack', 'Abigail'];
        if(isOffline){
            callback(new Error('cannot retrieve users due offline'), null)
            return;
        }
        callback(null, users);

    }, 3000);
}

const getUsersPromise = promisify(getUsers);
// Sekarang, kita memiliki fungsi getUsers(), tetapi
// dapat menerapkan Promise tanpa perlu mengubahnya
// secara manual.

getUsersPromise(false)
  .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message)); // cannot retrieve users due offline

// Sangat mudah, bukan? Namun, terdapat beberapa
// catatan ketika Anda hendak mengubah fungsi
// asynchronous callback-based menjadi Promise-based
// menggunakan util.promisify().

// Promisify selalu menganggap callback berada pada
// argumen paling akhir sebuah fungsi asynchronous.
// Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
// Promisify akan bekerja dengan baik jika callback
// memiliki struktur argumen callback(error, data).
// Jika callback memiliki struktur argumen di luar
// aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.

// Catatan: Singkatnya, promisify hanya dapat digunakan
// pada fungsi yang mengikuti aturan Node.js callback.
// Inilah salah satu alasan perlunya mengikuti aturan
// yang standar.

// Dalam kasus nyata, Anda bisa gunakan promisify
// dalam mengubah berbagai fungsi yang disediakan
// Node.js menjadi Promise-based, contohnya fungsi
// fs.readFile() yang digunakan untuk membaca berkas
// secara asynchronous.