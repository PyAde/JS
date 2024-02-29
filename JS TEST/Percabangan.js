// penggunaan if

const raining = true;

console.log("Persiapan sebelum berangkat kerja");
if (raining) {
  console.log("Hari ini hujan, jadi sediakaan payung");
}
console.log("Berangkat kegiatan");

// penggunaan if dan else
let x = 40;
if (x > 50) {
  console.log(x);

}else {
  console.log("Nilai kurang dari 50");
}

let languange = "French";
let greeting = "Selamat pagi";

if(languange == "Engglish") {
  greeting = "Good morning";
}else if(languange == "French") {
  greeting = "Bonjour";
}else if (languange == "Japan") {
  greeting = "Ohayou Gozaimasu";
}

console.log(greeting)

// penggunaan if dan else dalam satu baris

// condition ? true expression : false expression

const Member = false;
const discount = Member ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);
// Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. 
//Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda 
//titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah. 
//Karena merupakan conditional expression, maka operand kedua dan ketiga harus 
//mengembalikan nilai.

// Truthy & Falsy
//Di dalam if statement kita perlu memasukkan expression yang akan dievaluasi. Umumnya, expression tersebut mengembalikan nilai
// boolean untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? Jawabannya bisa.
//Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. 
//Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk
// truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:
//Number 0, BigInt 0n, String kosong seperti “” atau ‘’, null, undefined, NaN, atau Not a Number
//Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true. Berikut ini contohnya dalam kode:

let angka = "";
if (angka) {
  console.log(`Angka, ${angka}`);
}else {
  console.log("angka masih kosong")
}

if ((true || false) && (true || true)) {
  console.log("It's true");
} else {
  console.log("It's false");
}

