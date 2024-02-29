// Array merupakan struktur datra yang digunakan untuk menyimpan sekumpulan data dalam satu tempat.
// Setiap data dalam Array memiliki indeks
// Pada JS, array terdiri dari index dan value(variabel)

//cara inisialisasi array
let mobil = ["Avanza", "Agya", "Ayla"];
//let mobill = new Array("Avanza", "Agya", "Ayla");
//mobill[0] = "BMW"; // mengubah data array
//console.log(mobill[0]);
let jumlah = mobil.length; // cara menghitung jumlah data didalam array
console.log(jumlah)
let mobilpertama = mobil[0];
let mobilterakhir = mobil[mobil.length - 1];
console.log(mobilterakhir)


// Perbedaan Array dan Object
// Object dan array pada js pada dsaarnya hanpir sama, hanya saja Array 
// mempunyai fitur tambahan

let params = ["Halo", true, 7]
let other = [1,2,...params] // 1,2,"Halo", true, 7
console.log(other)