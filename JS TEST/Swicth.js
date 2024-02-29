// swicth case memiliki fungsi yang sama dengan
// if-else

//switch (expression) {
  //case value1:
    // do something
    //break;
  //case value2:
    // do something
    //break;
  //...
  //...
  //default:
    // do something else
//}

// Berikut ini adalah contoh kode menggunakan swicth case 
let languange = "French";
let greeting = null;

switch(languange) {
  case "Enggilsh":
    gretting = "Good morning";
    break;
  case "French":
    gretting = "Bonjour";
    break;
  case "Japan":
    gretting = "Yo";
    break;
  default:
    gretting = "Selamat pagi";
}
console.log(gretting)
