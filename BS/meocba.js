const angkaRandom = [10,11,6,5,3,4,1,19,1,1,3,3,3,3]

const panjangAngka = angkaRandom.length

for(let i = 0; i < panjangAngka; i++){
    // console.log(i)
    for(let j = 0; j < panjangAngka - 1 ; j++){
        // console.log(j)
        if(angkaRandom[j] < angkaRandom[j + 1]){
            // console.log(angkaRandom[j])
            let hasil = angkaRandom[j]
            angkaRandom[j] = angkaRandom[j + 1]
            angkaRandom[j + 1] = hasil
            // console.log(hasil)
        }
    }
}
// 
// const urutanKeBesar = angkaRandom
// console.log(urutanKeBesar)

let Maks = [0]
for(let i = 0; i < panjangAngka; i++){
    if(angkaRandom[i] > Maks){
        Maks = angkaRandom[i]
    }
}

// console.log(Maks)

let ganjil  = []
for(let i = 0; i < panjangAngka; i++){
    if(angkaRandom[i]% 2 != 0){
        ganjil.push(angkaRandom[i])
    }
}
// console.log(ganjil)

let total = 0
for(let i = 0; i < panjangAngka; i++){
    total += angkaRandom[i]
}

// console.log(total)
// let Mean = total / panjangAngka

// console.log(Mean)

for(let i = 0; i < panjangAngka; i++){
    for(let j = 0; j < panjangAngka - 1; j++){
        if(angkaRandom[j] > angkaRandom[j + 1]){
            // console.log(angkaRandom[j])
            let hasil = angkaRandom[j]
            angkaRandom[j] = angkaRandom[j + 1]
            angkaRandom[j + 1]= hasil
        }
    }
}
const urutanNormal = angkaRandom

let frekuensi = {}
for(let i = 0; i < panjangAngka; i++){
    if(frekuensi[urutanNormal[i]] == undefined){
        frekuensi[urutanNormal[i]] = 1
    }else{
        frekuensi[urutanNormal[i]]++
    }
}
console.log(frekuensi)

let frekuensiTerbanyak = 0
let Median
for(const angka in frekuensi){
    if(frekuensi[angka] > frekuensiTerbanyak){
        Median = angka
        frekuensiTerbanyak = frekuensi[angka]
    }
}

console.log(Median)