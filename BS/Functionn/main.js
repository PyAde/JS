// function addName (firstname, lastname){
//     // return 'Budi'
//     // return firstname, lastname
//     console.log(firstname, lastname)
// }


// addName('Budi','Yuzo')

// function addName (){
//     for(let i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// addName('Budi', 'Yuzo')

// const fullName = function addName(firstname, lastname){
//     console.log(firstname, lastname)
// }

const fullName = new Function("firstname", "console.log(firstname)")

fullName('Budi')

const sum3 = (x,y)=>{
    console.log(x+y)
}
// Pasing JS
sum3(4,6)

// Tugas 1
const luasLingkaran = (r) =>{
    console.log("Luas total lingkaran = ", 3.14 * (r * r))
}
const luasSegetiga = (a, t) =>{
    console.log("Luas total segetiga", (a * t)*0.5)
}
const luasPersegiPanjang = (p, l) =>{
    console.log("Luas total persegi panjang", p * l)
}
const luasJajarGenang = (a, t) =>{
    console.log("Luas total jajar genang", a * t)
}
luasLingkaran(3)
luasSegetiga(3,4)
luasPersegiPanjang(4,5)
luasJajarGenang(3,4)

const totalGajiKaryawan = (nama, gaji_perhari, jumlah_hari)=>{
    console.log(`Total gaji perbulan ${nama} adalah ${gaji_perhari * jumlah_hari}`)
}

totalGajiKaryawan('Budi',2000,20)