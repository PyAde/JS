// const { coffeeStock, isCoffeeMachineReady } = require('./state.js');
//import coffeeStock from "./state.js"

import {coffeeStock, isCoffeeMachineReady} from './state.js';
//const displayStock = stock => {
  //for(const type in stock){
    //console.log(type);
  //}
//}

// displayStock(coffeeStock);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
//const makeCoffee = (type, miligrams) => {
    //if (coffeeStock[type] >= miligrams) {
      //console.log("Kopi berhasil dibuat!");
    //} else {
      //console.log("Biji kopi habis!");
    //}
  //}
   
  //makeCoffee("robusta", 80);

  /* output
  Kopi berhasil dibuat!
  */
//console.log(coffeeStock);
//console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

//Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan),
// pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan \
// state.js berada pada folder yang sama, maka kita cukup menuliskannya 
// dengan ./state.js.

