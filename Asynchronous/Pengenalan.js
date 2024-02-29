// Contoh kode pada baris pertama kita memanggil
// fungsi X dan baris kedua kita memanggil fungsi Y
// maka fungsi Y hanya akan dijalaankan setelah
// seluruh proses berhubungan dengan fungsi
// X selesai, begitu juga dengan baris kode selanjutnya
// Proses yang dijalankan berdasarkan sebuah urutan
// dan saling menunggu disebut dengan proses synchronous

// Dalam asynchronous process, kita bisa menjalankan
// proses yang berada di baris kedua tanpa harus
// menunggu kode pada baris pertama selesai dieksekusi



// import {isPrime, random} from "./utils";
// export function generatesPrimes(maximum){
    // const Max_Prime = 1000000;
    // const primes = [];

    // while(primes.length < maximum){
        // const candidate = random(Max_Prime);

        // if(isPrime(candidate)){
            // primes.push(candidate);
        //}
    //}
    // return primes;
//}

// Delay terjadi karena proses menjalankan fungsi
// generatePrimes() berjalan lambat dan bersifat dan 
// synchronous, hingga pengguna merasakan hal itu
// Pengalaman ini akan membuat pengguna risi, terlebih 
// ketika harus melakukan hal lain sembari menunggu
// proses itu selesai


// import {isPrime, random} from "./utils";
// export function generatesPrimes(maximum){
    // const Max_Prime = 1000000;
    // const primes = [];

    // while(primes.length < maximum){
        // const candidate = random(Max_Prime);

        // if(isPrime(candidate)){
            // primes.push(candidate);
        //}
    //}
    // return primes;
//}

