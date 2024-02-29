// Mengubah array menjadi string (.toString)

let mobil = ["Avanza", "Agya", "Ayla"];
console.log(mobil.toString());

// (.join)
console.log(mobil.join('*'));

// Men-"copot" data dari Array (.pop)

mobil.pop();
//Mencpopot "Ayla" dari array

let mobilku = mobil.pop();
// Mencopot Ayla dari array mobilku

// Me-"masukan" data dari Array (.push)

mobil.push("Fortuner");
// Memasukan "Fortuner" ke array mobil
let mobilBaru = mobil.push("Fortuner");
// Memasukan "Fortuner" dari array 
// mobil dan mengembalikan panjang dar array

//Menggabungkan dua Array (.concat)

let mobilMahal = ["Fortuner", "Lambo"];
let mobilMber = ["Avanza"  , "Agya", "Ayla"];
let mobill = mobilMber.concat(mobilMahal)
console.log(mobil)

//Menggabungkan tiga Array (.concat)
let motor = ["Beat", "Vario"];
let KendaranBaru = mobilMber.concat(mobilMahal, motor)
console.log(KendaranBaru)

// Menghitung menggunakan metode .reduce

let number = [1,2,3,4,5];
let totalNumber = number.reduce(function(total,number){
  return total + number;
}, 0);
console.log(totalNumber);
// Metode reduce() menggabungkan ke nilai tunggal.
// Metode reduce() mengeksekusi fungsi yang disediakan untuk
// setiap nilai array (dari kiri ke kanan)
// Metode reduce() tidak menjalankan fungsi untuk elemen
// array tanpa nilai

// Iterasi data dari array dengan for

//let teks, i;
//teks = "<ul>";

//for (i = 0; i < mobil.length; i++) {
  //teks += "<li>" + mobil[i] + "</li>";
//}
//teks += "<ul>";

//console.log(teks)

// Iterasi data dari array dengan .forEach
let teks, i;
teks = "<ul>";
mobil.forEach(fungsiMobil);
teks += "</ul>";

function fungsiMobil(value) {
  teks += "<li>" + value + "</li>";
}

// Iterasi menggunakan metode .map

let nomer1 = [45,4,9,16,25]
let nomer2 = nomer1.map(kalikanDenganDua);

function kalikanDenganDua(value, index, array) {
  return value * 2;
}
console.log(nomer2)
// Metode map( ) membuat array baru dengan melakukan fungsi pada setiap elemen array.
// Metode map() tidak menjalankan fungsi untuk elemen array tanpa nilai. Metode map() tidak mengubah
// array asli

// Iterasi menggunakan metode .filter
let umur = [32,33,16,40]
let tua = umur.filter(UmurYangTua);
function UmurYangTua(umur) {
  return umur => 18
}
console.log(tua)
console.log("hello")
// Metode filter() membuat array yang diisi dengan semua elemen array
// yang sesuai dengan kondisi yang dibuat (disediakan sebagai fungsi).
// Metode filter() tidak menjalankan fungsi elemen array tanpa nilai. 
// Metode flter() tidak mengubah array asli.
//