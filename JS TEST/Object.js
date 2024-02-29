// Object merupakan "abstraksi" dari benda yang ada di dunia nyata. Object
// dapat digunakan untuk menyimpan data
// Pada Js, obejct terdiri dari name dan value(variabel) atau method(fungsi).
// Kedua di sebut sebagai property

// Analogi Object Mobil

let Mobil = {
  nama: "Toyota", //string
  tipe: "Agya", // string
  berat: 600, // number
  warna: "Putih", //string
// Inisialisasi Method
  maju : function() { 
    return "Mobil maju";
  },
  mundur : function() {
    return "Mobil mundur";
  }
}; 
// Js