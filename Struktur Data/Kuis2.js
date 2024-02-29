// Kuis Menampilkan Bilangan genap lalu dimasukan ke dalam array
let evenNumber = []
let GanjilNumber = []

for(let angka = 0; angka <= 100; angka++){
  if(angka % 2 === 0){
    evenNumber.push(angka);
  }else{  
    GanjilNumber.push(angka);
  }
}
console.log(evenNumber);
console.log(GanjilNumber)

