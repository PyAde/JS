// Rangkuman Asynchronous Process


// Pengenalan Asynchronous
// Dalam asynchronous process, kita bisa menjalankan proses yang berada di baris kedua tanpa harus menunggu kode pada baris pertama selesai dieksekusi. Dalam arti lain, kita bisa melakukan lebih dari satu proses sekaligus dalam waktu yang bersamaan.

// Umumnya, kita memanfaatkan asynchronous pada proses yang besar dan membutuhkan waktu lama, seperti mengambil data dari internet, menyimpan data ke database, dan membaca data dari sebuah berkas.



// setTimeout Function
// JavaScript merupakan bahasa pemrograman yang menerapkan pola event-driven, baik pada environment Node.js maupun browser. Seluruh proses yang berjalan dipicu oleh sebuah event atau kejadian, contohnya DOMContentLoaded pada browser atau process exit pada Node.js. Dengan pola event-driven itu, artinya kode yang ditulis dengan JavaScript tidak harus dijalankan secara berurutan, tetapi kode dapat dijalankan berdasarkan event atau bahkan dijadwalkan.

// Ada satu fungsi dalam JavaScript yang digunakan untuk menjadwalkan pemanggilan sebuah kode sekaligus membuatnya berjalan secara asynchronous, yakni setTimeout(). Fungsi tersebut menerima dua argumen dengan penjelasan berikut.

// Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
// Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.


// Asynchronous Handling dengan Callback
// Pola callback merupakan salah satu cara menangani proses asynchronous. Tidak hanya di JavaScript, pola ini juga digunakan pada bahasa pemrograman lainnya. Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai. Fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkannya.

// Berikut adalah contoh dari penerapan callback.

// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
 
//     callback(users);
//   }, 3000);
// }
 
// function usersCallback(users) {
//   console.log(users);
// }
 
// getUsers(usersCallback);


// Callback Hell
// Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan secara asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah proses asynchronous lainnya selesai.

// Berikut adalah contoh kode proses asynchronous dengan callback yang saling tergantung satu sama lainnya.

// function getUserWeather(userId, callback) {
//   getUser(userId, (error, user) => {
//     if (error) {
//       callback(error, null);
//     }
 
//     getWeather(user.location, (error, weather) => {
//       if (error) {
//         callback(error, null);
//       }
 
//       callback(null, { ...user, ...weather });
//     });
//   });
// }
 
// getUserWeather(1, (error, userWeather) => {
//   if (error) {
//     console.log(error.message);
//   }
 
//   console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
// });
// Ini merupakan contoh sederhana dalam penggambaran masalah yang sering dihadapi pada kasus nyata ketika bermain dengan proses asinkron. Menurut kami, masalah yang berhubungan dengan readability code adalah masalah yang serius. Saking seriusnya, masalah ini dikenal sebagai callback hell atau pyramid of doom.

// Pola callback dapat digunakan pada bahasa pemrograman apa pun, begitu juga masalah yang dihasilkan olehnya. Beruntunglah di JavaScript terdapat cara lain dalam menangani proses asynchronous lebih baik lagi dengan menggunakan Promise. Ia dapat membuat kode kita lebih mudah dibaca dibanding callback. Berikut adalah gambaran kode yang memanfaatkan Promise dalam proses asynchronous-nya.

// const { getUser, getWeather } = require('./utils');
 
// function getUserWeather(userId) {
//   let user;
  
//   return getUser(userId)
//     .then((_user) => { 
//       user = _user;
//       return getWeather(user.location)
//     })
//     .then((weather) => ({ ...user, ...weather }))
// }
 
// getUserWeather(1)
//   .then(console.log)
//   .catch(console.log);


// Asynchronous Handling dengan Promise
// Semenjak ECMAScript 2015 (ES6), pola callback bukan menjadi satu-satunya cara dalam menangani proses asynchronous di JavaScript. Pada era ES6 atau kita sebut era JavaScript modern, hadir Promise yang menjadi fitur dasar dalam menjalankan operasi asynchronous. Saat ini, banyak sekali fungsi-fungsi di Node.js atau Browser API yang memanfaatkan Promise dibandingkan dengan pola callback dalam menangani proses asynchronous-nya.

// Bagi Anda yang pertama kali mendengar Promise mungkin heran dan bertanya mengapa fitur ini dinamakan “Promise” alias “Janji”? Ketahuilah bahwa penamaan ini sebenarnya cukup akurat dan memang Promise bisa dianalogikan sebagai sebuah janji.

// Jika kita pikir secara mendalam, sebenarnya proses yang dijalankan secara asynchronous merupakan sebuah janji karena hasil dari proses tersebut tidak bisa langsung kita dapatkan, tetapi kita perlu menunggu beberapa saat. Sama halnya dengan janji di dunia nyata yang butuh waktu untuk terpenuhi.

// Selain sama-sama membutuhkan waktu, kesamaan lainnya terjadi pada hasil yang didapatkan. Di dunia nyata, janji bisa terpenuhi atau gagal. Contoh, jika teman Anda berjanji akan mengajak lari pada sore hari, bisa saja janji tersebut gagal terpenuhi karena hujan atau alasan lainnya. Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

// Pending merupakan keadaan Promise sedang berjalan.
// Fulfilled merupakan keadaan Promise yang terpenuhi.
// Rejected merupakan keadaan Promise yang gagal terpenuhi.
// Berikut adalah contoh fungsi asynchronous yang memanfaatkan Promise.



// function getUsers(isOffline) {
//   // return a Promise object
//   return new Promise((resolve, reject) => {
 
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
    
//       if (isOffline) {
//         reject(new Error('cannot retrieve users due offline'));
//         return;
//       }
 
//       resolve(users);
//     }, 3000);
  
//   });
// }
// Fungsi yang mengembalikan objek Promise akan memiliki fungsi .then dan .catch yang digunakan untuk mengambil nilai yang dibawa oleh resolve dan reject. Gambarannya seperti ini.

// getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));


// Mengubah Callback menjadi Promise dengan Promisify
// Node.js menawarkan solusi mudah dalam mengubah fungsi asynchronous callback-based menjadi Promise-based, yaitu menggunakan fungsi promisify dari core module util. Dengannya kita bisa secara mudah membuat fungsi baru yang mengimplementasikan Promise berdasarkan fungsi callback-based, contohnya seperti ini.

// const { promisify } = require('util');
 
// function getUsers(isOffline, callback) {
//  // simulate network delay
//  setTimeout(() => {
//    const users = ['John', 'Jack', 'Abigail'];
//     if (isOffline) {
//      callback(new Error('cannot retrieve users due offline'), null);
//      return;
//    }
 
//    callback(null, users);
//  }, 3000);
// }
 
// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);
// Sekarang, kita memiliki fungsi getUsers(), tetapi menerapkan Promise tanpa perlu mengubahnya secara manual.

// getUsersPromise(false)
//   .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
//   .catch(err => console.log(err.message));
 
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message)); // cannot retrieve users due offline
// Sangat mudah, bukan? Namun, terdapat beberapa catatan ketika Anda hendak mengubah fungsi asynchronous callback-based menjadi Promise-based menggunakan util.promisify().

// Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
// Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.


// Promise Berantai
// Promise didesain untuk dapat dijalankan secara berantai dengan Promise lain. Contohnya, jika Anda memiliki dua fungsi Promise, Anda bisa menjalankan kedua fungsi tersebut secara berurut, alias berantai. Contohnya bisa Anda lihat pada kode di bawah ini.

// function withDrawMoney(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 100) {
//         reject(new Error('Not enough money to withdraw'))
//       }
 
//       resolve(amount)
//     }, 1000);
//   });
// }
 
// function buyCinemaTicket(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 10) {
//         reject(new Error('not enough money to buy ticket'))
//       }
 
//       resolve('ticket-1')
//     }, 1000);
//   });
// }
 
// function goInsideCinema(ticket) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!ticket) {
//         reject(new Error('no ticket'))
//       }
 
//       resolve('enjoy the movie')
//     }, 1000);
//   });
// }
 
// function watchMovie() {
//   withDrawMoney(10)
//     .then((money) => {
//       return buyCinemaTicket(money)
//     })
//     .then((ticket) => {
//       return goInsideCinema(ticket)
//     })
//     .then((result) => {
//       console.log(result)
//     })
//     .catch((error) => {
//       console.log(error.message)
//     });
// }
 
// watchMovie();
// Ketika kita memanggil fungsi watchMovie(), Promise chaining akan dijalankan. Dengan teknik tersebut, kita bisa menentukan urutan pemanggilan tiap-tiap fungsi Promise berdasarkan tahapan yang harus dilakukan. 

// Pada kode di atas, kita bisa melihat bahwa tahapan pertama adalah memanggil fungsi withDrawMoney(), kemudian buyCinemaTicket(), dan terakhir goInsideCinema(). Setelah tahapan tersebut selesai, nilai akhir dari Promise akan ditampilkan dalam console dengan fungsi console.log(). Jika ada Promise yang di-reject pada salah satu tahapan, ia akan langsung ditangkap oleh catch dan menampilkan error ke console dengan fungsi console.log().

// Dalam chaining Promise seperti yang ditunjukkan oleh kode di atas, penting untuk diingat bahwa setiap fungsi .then() harus mengembalikan Promise baru untuk melanjutkan proses chaining karena nilai yang dikembalikan tersebut akan dibawa ke dalam fungsi .then() selanjutnya.



// Promise Static Method
// Promise memiliki beberapa static method yang dapat digunakan untuk mempermudah penggunaan dalam berbagai kasus. Pada materi kali ini, kami akan membahas empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.

// Promise.all
// Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen. Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen.

// Promise.race
// Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(), tetapi hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.

// Promise.allSettled
// Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.

// {
//   status: 'fulfilled' | 'rejected',
//   value: 'value of the Promise' | 'error of the Promise',
// }
// Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa Promise.allSettled() akan mengembalikan seluruh nilai Promise yang dijalankan, baik yang statusnya fulfilled maupun rejected.

// Promise.any
// Method Promise yang terakhir akan kami bahas adalah Promise.any(). Method ini bekerja mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.



// Asynchronous Handling dengan Async dan Await
// Sintaks async dan await memungkinkan kita untuk menulis kode dalam menangani proses asynchronous Promise-based dengan cara yang sama seperti synchronous. Dalam penanganan error-nya (rejection) pun kita bisa menggunakan try dan catch layaknya error yang dihasilkan oleh proses synchronous.

// async function watchMovie() {
//   try {
//     const money = await withDrawMoney(10);
//     const ticket = await buyCinemaTicket(money);
//     const result = await goInsideCinema(ticket);
 
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
 
// watchMovie();
// Untuk menggunakan fitur async dan await, kita perlu mengubah sebuah fungsi agar berjalan secara asynchronous dengan menambahkan kata kunci async pada awal fungsi. Setelah itu, di dalam fungsi tersebut, kita bisa mengambil data yang dihasilkan oleh Promise dengan menggunakan sintaks await. Sintaks await akan memberi tahu JavaScript untuk menunggu proses Promise selesai sebelum mengeksekusi kode baris selanjutnya. Jadi, kita bisa melakukan Promise berantai tanpa perlu menggunakan .then(). Simak juga cara penanganan error-nya. Kita sudah tidak lagi menggunakan .catch(), tetapi try dan catch layaknya proses synchronous.

