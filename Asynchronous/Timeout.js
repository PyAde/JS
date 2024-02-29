// setTimeout Function

// JavaScript merupakan bahasa pemrograman yang
// menerapkan pola event-driven, baik pada Node.js
// maupun browser. Seluruh proses yang berjalan
// dipicu oleh sebuah event atau kejadian, contohnya
// DOMContentLoaded dalam browser atau process exit
// pada Node.js. Dengan pola event-driven itu, artinya
// kode yang ditulis dengan JavaScript tidak harus dijalankan
// secara berurutan, tetapi kode dapat dijalanka
// berdasarkan event atau bahkan dijadwalkan

// Ada satu fungsi dalam JavaScript yang digunakan
// untuk menjadwalkan pemanggilan sebuah kode
// membuatnya berjalan secar asynchronous, yakni
// setTimeout(). Fungsi tersebut menerima dua argumen
// dengan penjelasan berikut.

// 1. Argumen pertama merupakan sebuah fungsi yang akan 
// dipanggil secara terjadwal dan asynchronous
// 2. Argumen kedua merupakan delay waktu dalam satuan
// millisecond yang menentukan delay dari pemanggilan
// fungsi pada argumen pertama

// Inilah contoh dari penggunaan fungsi setTimeout()

console.log('Selamat Datang');

setTimeout(() => {
    console.log('Terimakasih sudah mampir, silahkan datang kembali');

}, 3000)

console.log('Ada yang bisa dibantu?');

// Jika kita terbiasa dengan pola synchronous, wajar
// bila kita menganggap output pada console memiliki
// urutan sebagai berikut

// 1. Mencetak -> Selamat datang!
// 2. Menunggu selama tiga detik
// 3. Mencetak -> Terimakasih sudah mampir datang kembali
// 4. Mencetak -> Ada yang bisa dibantu

// Namun, nyatanya setTimeout() tidak akan menghentikan
// javaScript untuk mengeksekusi kode pada baris berikutnya
// Jadi, urutannya seperti ini

// 1. Mencetak -> Selamat datang!
// 2. Mencetak -> Ada yang bisa dibantu?
// 3. Menunggu selama tiga detik.
// 4. Mencetak -> Terima kasih sudah mampir, silahkan
// datang kembali

// Fungsi setTimeout() merupakan cara paling dasar 
// untuk membuat baris kode berjalan secara 
// asynchronous. Kita akan gunakan setTimeout() 
// dalam pembelajaran ini untuk menyimulasikan 
// cara mendapatkan nilai dari sebuah proses yang 
// membutuhkan waktu.

// Catatan: Ketahuilah bahwa ada beberapa operasi 
// yang berjalan secara asynchronous di berbagai 
// environment JavaScript, contohnya fungsi fetch() 
// di browser dan proses input/output pada Node.js.
// Namun, kita tidak akan menggunakan fungsi-fungsi
// tersebut pada pembelajaran ini. Seluruh proses 
// asynchronous akan kami simulasikan dengan 
// menggunakan fungsi setTimeout().