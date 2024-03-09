/** @format */

// let namaGuru = [
//     'Jodi',
//     'Bunga',
//     'Rahman',
// ]
// namaGuru.push('Adam', 'Fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru); //Jodi

// let NamaGuru =[];
// NamaGuru[0] = "Adam";
// NamaGuru[1] = "Budi";
// alert(NamaGuru);

// let namaGuru = [
//     'Jodi',
//     'Bunga',
//     'Rahman',
// ]
// console.log(namaGuru)

// for(let i = 0; i < namaGuru.length; i++){
//     // i1 = 0;
//     // i2 = 1;
//     // i3 = 2;
//     // i4 => stop;
//     console.log(namaGuru[i])
// }

// for loop
// for (let i = 1; i <= 10; i++) {
//   console.log("Budi");
// }

// let i = 0;
// while (i < 10){
//     i++;
//     console.log('Budi')
// }
// let i = 0;
// do{
//     i++;
//     console.log('Budi');
// }while(i < 10)

// Tugas Kecil
// Prompt
// menentukan hari di pc komputer kalian

// 2;

// Prompt;
// let saldoAwal = parseInt(prompt('Masukan saldo awal'));
// let saldoAkhir = parseInt(prompt('Masukan saldo akhir'));
// let total = saldoAwal + saldoAkhir;
// alert(`Saldo akhir kamu adalah ${total}`)
// const total = alert(`Saldo total kamu adalah `)
let hari = new Date().getMonth();
let Bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
]
console.log(`bulan ini adalah bulan ${Bulan[hari]}`)