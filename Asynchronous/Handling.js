// Asynchronous Handling dengan Callback

// Proses tersebut membuat JavaScript dapat mengeksekusi
// proses selanjutnya tanpa menunggu tahapan sebelumnya
// selesai. 

// Pola Callback
// merupakan salah satu cara menangani proses asynchronous
// Tidak hanya di JavaScript, pola ini juga digunakan
// pada bahasa pemrograman lainnya. Callback
// merupakan sebuah fungsi yang disisipkan pada
// argumen fungsi asynchronous dan akan dipanggil
// ketika proses dinyatakan selesai. Fungsi
// callback akan membawa nilai-nilai yang dihasilkan
// dari proses asnchronous sehingga kita bisa memanfaatkan
// nilai tersebut

// Jika masih belum terbayang, simak kode di bawah ini

function getUsers(callback){
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
    }, 3000);
}
// Anggaplah getUsers() merupakan fungsi yang
// digunakan untuk mendapatkan data nama pengguna
// yang diambil dari internet
// setTimeout() untuk menyimulasikan bahwa fungsi berjalan
// secara asynchronous. 

// Berikut adalah cara memakai fungsi tersebut untuk
// mendapatkan nilai users.

getUsers((users) =>{
    console.log(users);
});
// Ketika menggunakan fungsi getUser() kita perlu memanggil
// dengan memberikan argumen fungsi. Fungsi ini akan dipanggil
// ketika proses asynchronous selesai sekaligus membawa
// data users yang dihasilkan dari proses asynchronous
// inilah yang dimaksud dengan pola callback

// Catatan: Callback merupakan salah satu implementasi
// dari konsep High-Order Function yang sudah kita bahas
// pada modul Functional Programming

// Agar kode lebih mudah dibaca, Anda bisa mendeklarasikan
// fungsi callback di luar argumen seperti ini.

function getUser(callback){
    // simulate newtwork delay
    setTimeout(() =>{
        const user = ['John', 'Jack', 'Abigail'];

        callback(user);
    }, 3000)
}

function userCallback(user){
    console.log(user);
}

getUser(userCallback)

// Proses yang dijalankan secara asynchronous, biasanya
// berpotensi menghasilkan error. Misalnya sebah fungsi
// yang mengambil data dar internet akan menghasilkan
// error ketika jaringan kita bermasalah. Contoh lainnya
// ketika berkas tersebut tidak ditemukan, fungsi
// yang membacanya akan menghasilkan error

// Dengan alesan tersebut pada fungsi callback selain 
// membawa argumen data, Ia juga membawa argumen error.
// Argumen error hanya akan memiliki nilai ketika proses
// asynchronous gagal atau mengalami gangguan

// Untuk lebih jelasnya, mari kita ubah fungsi
// getUsers() menjadi seperti ini

function getUserr(isOffline, callback){
    // Simulate network delay
    setTimeout(() =>{
        const users = ['John', 'Jack', 'Abigail'];
        if(isOffline){
            callback(new Error('cannot, retrieve user due offline'), null);
            return;
        }
        callback(null,users);
    }, 3000);
}

// isOffline pada fungsi getUserr() untuk menentukan
// proses asynchronous berhasil atau gagal. Sebab prosesnya
// berpotensi gagal, nilai yang dibawa oleh fungsi callback
// harus disesuaikan 

// Fungsi callback yang digunakan di JavaScript secara
// standar (convention) memiliki struktur seperti kode
// dibawah ini

function callback(error, data){
    // logika ketika proses asynchronous selesai
}

// Argumen pertama dari fungsi callback merupakan
// error. Argumen ini hanya akan bernilai jika proses
// asynchronous gagal, sebaliknya biasanya bernilai
// null. Argumen kedua dari fungsi callback merupakan
// data yang dibawa ketika prosesnya berhasil 
// jika proses asynchronous gagal, dia akan bernilai null

// Catatan: Harap diingat convention tersebut ditetapkan
// karena banyak proses asynchronous yang terdapat pada
// Node.js API menggunakan struktur tersebut dalam
// penggunaan callback seperti fungsi
// https://nodejs.org/api/fs.html#fsreadfilepath-options-callback

// Dengan diubahnya fungsi getUsers() kita juga perlu
// menyusaikan struktur callback-nya. Untuk menangani
// proses asynchronous pada fungsi getUsers(), baik ketika
// prosesnya berhasil maupun gagal, maka fungsi userCallback()
// perlu diubah menjadi seperti ini.

function getUserss(isOffline, callback){
    // simulate network delay
    setTimeout(() =>{
        const users = ['John', 'Jack', 'Abigail'];
        if(isOffline){
            callback(new Error('cannot retrieve users due offline'))
            return;
        }
        callback(null, users);
    }, 3000);
}

function usersCallback(error, users){
    if(error){
        console.log('process failed', error.message);
        return;
    }
    console.log('process succes', users);
}
getUserss(false, userCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline 

// Callback Hell

// Sebagai developer pemula, kita sangat terbiasa
// yang saling proses synchronous. Jika anda coba
// baca kode dibawah ini tentu akan mudah memahami
// alurnya

function getUserWeather(userId){
    try{
        const user = getUser(userId);
        const weather = getWeather(user.location);
        return {...user, ...weather};
    }catch(error){
        console.log(error.message);
        return null;
    }
}

const userWeather = getUserWeather;
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

// Kode diatas menunjukan sebuah fungsi getUserWeather()
// yang bertujuan untuk mendapatkan cuaca berdasarkan 
// userId. Anda juga bisa melihat bahwa data cuaca
// didapatkan dengan cara mengagregasi dua fungsi
// yakni getUser() dan getWeather().

// Sekarang bayangkan jika fungsi getUser() dan
// getWeather() berjalan secara asinkron dan 
// memanfaatkan pola callback. Untuk menghasilkan
// output yang sama, kita perlu ubah kode menjadi 
// seperti ini 

// file index.js dan utils.js

