// Variabel Scope

// Variabel yang dapat diakses dari seluruh script disebut dengan "globally scoped",
// Sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan
// "local scoped".

// Berikut ini merupakan contoh scoping dalam kode

// global variabel, dapat diakses dari pada parent() dan child()

const a = 'a';

function parent(){
  const b = "b";
  // local variabel, dapat diakses dari pada parent () dan child() tetapi tidak dapat
  // diakses di luar dari fungsi tersebut.

  function child() {
    //local variabel, dapat diakses hanya pada fungsi child()
    const c = "c";
  }
}

// kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Pasalnya, kita 
// bisa mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut:

function multiply(num){
  total = num * num;
  return total;
};

let total = 9;
let number = multiply(20)

console.log(total)

/* output
400
*/

// Mungkin kita berharap nilai total akan tetap 9, mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut.
// Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan
// variabel total sebagai cakupan lokal. Kita tidak menggunakan keyword const 
// atau let ketika mendeklarasikan variabel total pada fungsi multiply() sehingga 
// variabel total menjadi global.

// Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var
//  pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.

// Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel 
// global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak 
// variabel global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision)
// terjadi.

