// Asynchronous Handling dengan Sintaks Async dan Await

// Sekarang mari kita bayangkan, bagaimana jika 
// kita bisa menangani proses asynchronous layaknya
// proses synchronous? Tentunya, ini akan membuat kode
// kita jauh lebih ringkas dan mudah dipahami karena
// itdak perlu menggunakan .then dan .catch() untuk
// mendapatkan nilainnya. Untunglah haparan tersebut
// kini sudah terealisasi dengan fitur async dan await
// di JavaScript versi  ECMAScript2017  

// Sintaks async dan await memungkinkan kita untuk menulis
// kode dalam menangani proses asynchronous Promimse-based
// dengan cara yang sama seperti kode synchronous. Dalam
// penanganan error-nya (rejection) pun kita bisa menggunakan try
// dan catch layaknya error yang dihasilkan oleh proses
// synchronous. Mari kita lihat contohnya dengan mengangkat
// kembali kasus menonton film bioskop secara asynchronous

function WacthMovie(){
    withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goIsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
}

WacthMovie();

// Kami yakin Anda sudah paham dengan penanganan Promise
// berantai seperti di atas. Sekarang bagaimana jika 
// kita memanfaatkan async dan await dalam menangani proses
// asynchronous-nya?

async function wacthMovie(){
    try{
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket)
    }catch(error){
        console.log(error.message)
    }
}

// Untuk menggunakan fitur async dan await, kita perlu 
// mengubah sebuah fungsi agar berjalan secara asynchronous
// dengan menambahkan kata kunci async pada awal fungsi.
// Setelah itu, di dalam fungsi tersebut, kita bisa mengambil
// data yang dihasilkan oleh Promise dengan menggunakan
// sintaks await. Sintkas await akan memberi tahu JavaScript
/// untuk menunggu proses Promise selesai sebelum
// mengeksekusi kode baris selanjutnya. Jadi kita bisa
// melakukan Promise berantai tanpa perlu menggunakan
// .then(). Kita sudah tidak lagi menggunakan catch() tetapi
// try dan catch layaknya proses synchronous

// Ketahuilah bahwa setiap funsgi yang
// di definisikan dengan kata async akan 
// selalu mengembalikan sebuah Promise. Contoh pada
// kode di atas, kita bisa menggunakan fungsi .then()
// setelah pemanggilan fungsi WacthMovie() seperti ini

async function watchMovice(){
    try{
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        console.log(result);
    } catch(error){
        console.log(error.message)
    }
}

watchMovice().then(() => console.log('done'));

// Jika fungsi yang diberikan "async" mengembalikan
// Promise, bagaimana caranya mengontrol status Promise
// tersebut agar bernilai fulfilled atau rejected?
// Kata async secara implist menggunakan return untuk
// mengubah status Promise menjadi fulfilled dan menggunakan
// throw untuk mengubah status menjadi rejected


// Sintaks async dan await memiliki beberapa keuntungan 
// dibandingikan dengan penggunaan callback dan Promise
// secara langsung

// Lebih mudah dipahami dan ditulis.
// Sintaks async dan await memungkinkan kita untuk 
// menulis kode yang menangani asynchronous dengan cara 
// yang sama seperti synchronous. Tentu ini membuat 
// kode lebih mudah dipahami dan ditulis.
// Terhindar dari callback.
// Penggunaan Promise secara langsung pun tidak terlepas 
// dari callback, seperti .then() dan .catch(). Namun, 
// dengan async dan await, kita bisa terlepas dari pola 
// callback.
// Lebih mudah dalam mengelola error.
// Async dan await benar-benar membuat pengalaman 
// asynchronous layaknya synchronous, hingga dalam 
// penanganan error-nya pun menggunakan beberapa hal 
// yang sudah ada, seperti try, catch, dan throw.