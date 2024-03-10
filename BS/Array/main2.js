/** @format */

const buahSaya = ["🍎", "🍑", "🍌", "🍇", "🍈"];

const banana = buahSaya.includes('🍌')
console.log(banana)

if(banana){
    const posisibanana = buahSaya.indexOf('🍌')
    const indexAfter = posisibanana  + 1
    const indexBefore = posisibanana - 1 
    const before = buahSaya[indexBefore]
    const after = buahSaya[indexAfter]
    console.log(`Posisi buah sebelum pisang adalah ${before}`)
    console.log(`Posisi buah setelah pisang adalah ${after}`)
    const buahAwal = buahSaya.shift() //awal
    const buahAkhir = buahSaya.pop() //akhir
    console.log(buahAwal)
    console.log(buahAkhir)
}else{
    console.log("Undefined")
}