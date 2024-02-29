// Asynchronous Handling dengan Promise 

// Semenjak ECMAScript 2015 (ES6), pola callback bukan
// menjadi satu-satunya cara dalam menangani proses asynchronous di JavaScript. Pada era ES6 atau kita sebut era JavaScript modern, hadir Promise yang menjadi fitur dasar dalam menjalankan operasi asynchronous. Saat ini, banyak sekali fungsi-fungsi di Node.js atau Browser API yang memanfaatkan Promise dibandingkan dengan pola callback dalam menangani proses asynchronous-nya.

// Bagi Anda yang pertama kali mendengar Promise 
// mungkin heran dan bertanya, “mengapa fitur ini 
// dinamakan ‘Promise’ alias ‘Janji’?” 
// Ketahuilah bahwa penamaan ini sebenarnya cukup 
// akurat dan memang Promise bisa dianalogikan 
// sebagai sebuah janji.

// Jika kita pikir secara mendalam, sebenarnya proses
// yang dijalankan secara asynchronous merupakan
// sebuah janji karena hasil dari proses tersebut tidak bisa langsung kita dapatkan, tetapi perlu ditunggu beberapa saat. Sama halnya dengan janji di dunia nyata yang butuh waktu untuk terpenuhi.

// Selain sama-sama membutuhkan waktu, kesamaan
// lainnya terjadi pada hasil yang didapatkan. 
// Di dunia nyata, janji bisa terpenuhi atau gagal.
// Contoh, jika teman Anda berjanji akan mengajak lari
// pada sore hari, bisa saja janji tersebut gagal terpenuhi karena hujan atau alasan lainnya. Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

// Pending merupakan keadaan Promise sedang berjalan.
// Fulfilled merupakan keadaan Promise yang terpenuhi.
// Rejected merupakan keadaan Promise yang gagal 
// terpenuhi.
// Sudah paham mengapa fitur ini dinamakan Promise? 
// Jika sudah, pertanyaan selanjutnya adalah apa bentuk Promise ini di JavaScript? Bagaimana cara menggunakannya?

// Promise di JavaScript merupakan sebuah objek yang 
// merepresentasikan operasi asynchronous. Dengan
// memanfaatkan Promise, fungsi yang berjalan secara 
// asynchronous dapat ditangani dengan abstraksi yang
// lebih sederhana. Contohnya, alih-alih kita
// memanfaatkan callback yang dikirim via argumen
// fungsi, kita bisa mengembalikan objek Promise
// langsung pada fungsi yang berjalan secara 
// asynchronous.

// Jika penjelasannya masih membingungkan, mari kita
// ulas kembali fungsi getUsers() yang memanfaatkan 
// callback pada materi sebelumnya.

function getUsers(isOffline, callback){
    //simulate network delay
    setTimeout(() => {
        const user = ['John', 'jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return
        }
        callback(null, user);
    }, 3000);
}

// Anda pasti sudah familier dengan kode di atas. 
// Fungsi getUsers() berjalan secara asynchronous
// dan memanfaatkan argumen callback untuk mengirimkan
// nilainya.

// Jika kita ubah pendekatannya dengan menggunakan
// Promise, kita tidak membutuhkan lagi argumen
// callback. Namun, sebagai gantinya,
// fungsi getUsers() perlu mengembalikan
// objek Promise dengan cara seperti ini.

function getUsers(isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {
   
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
   
        resolve(users);
      }, 3000);
    
    });
  }

// Perhatikan kode di atas. Alih-alih fungsi
// getUsers() menerima callback sebagai argumen,
// dia mengembalikan objek Promise. Lalu,
// bagaimana dengan nilai yang belum dibawa oleh
// argumen callback? Nah, di sini Promise menawarkan
// penggantinya dengan memanfaatkan resolve dan reject. Dalam kasus yang menyebabkan proses asynchronous error, kita bisa bawa error tersebut menggunakan reject, sedangkan pada kasus proses asynchronous berjalan sukses, kita bisa bawa nilai tersebut dengan resolve. Sampai di sini, apakah Anda sudah paham?

// Catatan: Objek Promise dibuat dengan cara memanggil
// constructor Promise, yakni new Promise().
// Kemudian di dalam constructor, Anda wajib memberikan argumen berupa fungsi yang di dalamnya terdapat operasi asynchronous. Fungsi tersebut juga diberikan akses terhadap dua argumen, yaitu resolve dan reject. Kedua argumen ini bisa Anda manfaatkan dalam membawa hasil dari proses asynchronous berupa data ataupun error.

// Sekarang Anda sudah paham cara membuat Promise.
// Selanjutnya, Anda perlu tahu cara menggunakan
// Promise untuk mendapatkan nilai yang dibawa olehnya. Mari kita lihat cara memanggil dan mendapatkan hasil dari fungsi getUsers().

// Setelah fungsi getUsers() diubah dari callback
// menjadi Promise-based, cara penggunaan fungsinya
// pun akan berubah. Fungsi yang mengembalikan objek
// Promise akan memiliki fungsi .then dan .catch.
// Fungsi tersebut digunakan untuk mengambil nilai yang dibawa oleh resolve dan reject. Gambarannya seperti ini.

getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));

//  Nilai yang dibawa oleh resolve() dapat diambil 
// melalui fungsi .then() dan seketika status Promise
// akan berubah dari pending ke fulfilled. Di sisi lain, nilai yang dibawa oleh reject() dapat diambil melalui fungsi .catch() dan seketika status Promise akan berubah dari pending ke rejected.

// Perhatikan juga bahwa .then() dan .catch() selalu
// mengembalikan Promise, itulah yang menyebabkan
// pemanggilannya dapat berantai seperti .then().catch().

// Mari kita lihat kode lengkapnya agar dapat Anda
// coba dan jalankan.

function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {
  
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
  
        resolve(users);
      }, 3000);
    });
  }

// Jalankan kode di atas maka fungsi .then() akan terpanggil
// dan menampilkan data users pada console

// ['John', 'Jack', 'Abigail']

// Fungsi .catch() tidak akan terpanggil karena Promise
// tidak pernah berstatus 