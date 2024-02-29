// Try and Catch 
// untuk menangani error pada JavaScript, gunakan try
// dan catch

try {
    //kode
} catch(error){
    // error handling
}
// Taruh kode yang berpeluang menimbulkan error di dalam
// blok try. Apabila terjadi error di dalam blok kode try
// maka iaa akan ditangkap dan di tanganin di blok kode
// catch. Sementara, jika tidak terjadi error pada kode
// maka block cacth akan diabaikan

try {
    console.log('Awal blok try');
    console.log('Akhir blok try');
} catch(error) {
    console.log('Tidak terjadi error, maka blok ini diabaikan');

}

/* output
Awal blok try
Akhir blok try
*/

// Kode di dalam blok try di atas tidak akan menghasilkan 
// eror, sehingga kode di dalam blok catch akan diabaikan
// dan tidak dijalankan. Berikut ini adalah contoh
// kode yang menghasilkan error

try {
    console.log('Awal blok try'); // (1)
    errorCode;
    console.log('Akhir blok try'); // (2)
} catch(error){
    console.log('Terjadi error');
}

/* output
Awal blok try
Terjadi error!
*/

// Baris kode (2) akan menghasilkan error. Eksekusi
// kode di dalam blok try akan dihentikan, sehingga
// dari baris kode (3) tidak akan tereksekusi. Kemudian
// kode akan dilanjutkan ke baris (4) atau blok catch

// Object error memiliki beberapa properti
// utama di dalamnya yaitu:

// name: Nama eror yang terjadi.
// message: Pesan tentang detail error
// stack: informasi urutan kejadian yang menyebabkan error
// Umumnya digunakan untuk debugging karena terdapat
// informasi baris mana yang menyebabkan error

// Sekarang mari kita coba untuk mengubah kode
// dan menampilkan properti error di atas

try {
    console.log('Awal blok try');
    errorCode;
    console.log('Akhir blok try');
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

// Dari informasi di atas, kita bisa tahu bahwa error
// yang muncul adalah ReferenceError karena errorCode
// dianggap sebagai sebuah variabel atau nilai yang
// tidak terdefinisi

// try-catch-finally
// Ada satu block lagi yang ada dalam mekanisme error
// handling pada JavaScript yaitu finally. Blok finally
// akan tetap dijalankan tanpa peduli apa pun hasil
// yang terjadi pada blok try-catch

try{
    console.log('Awal blok try');
    console.log('Akhir blok try');
} catch(error){
    console.log('Baris ini diabaikan');
} finally{
    console.log('Akan tetap dieksekusi');
}

/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/