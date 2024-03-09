/** @format */

// let usia = 30;
// usia = 35;
// console.log('Usia kamu adalah' + usia)

// alert('usia kamu adalah'+usia)

// let usia = prompt('berapa usia kamu')
// alert('usia anda adalah' + usia)

let nama = "Deo"; // tipe string
let usia = 20; //tipe integer number
let tinggiBadan = 173.4; //tipe double float
let beratBadan; //undefined
let hewan = "ayam"; //tidak bernilai
beratBadan = 60;

if(hewan == null){
    hewan = "Belum punya hewan";
}else{
    hewan = 'Sudah punya hewan';
}

// switch(hewan){
//     case "ayam":
//         hewan = " adalah ayam";
//     break
//     case "kambing":
//         hewan = " aku adalah kambing";
//     break
//     default:
//         hewan = "belum punya hewan";
// }
let saldoAwal = 50000;
let saldoTambahan = 30000;

const hutang = 30000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;



alert(`nama saya ${nama} usia saya ${usia} tinggi badan sya ${tinggiBadan} berat badan 
${beratBadan} hewan saya ${hewan}`);
alert(`Saldo awal saya ${saldoAwal} dan saldo tambahan ${saldoTambahan} Jadi total saldo
${saldoAkhir}`);

