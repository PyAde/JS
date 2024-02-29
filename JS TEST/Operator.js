let x = 10;
let y = 5 ;

x += y; // shortcut dari x = x + y
console.log(x) 
x -= y; //artinya -> x = x - y
x *= y; // artinya -> x = x * y
x /=y; // artinya -> x = x / y
x %= y; // artinya -> x = x % y
// Comparison Operator
// Operator == -> Membandingkan kedua nilai apakah sama (tidak identik).
// Operator != -> Membandingkan kedua nilai apakah tidak sama (tidak identik).
// Operator === -> Membandingkan kedua nilai apakah identik.
// Operator > -> Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// Operator >= Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// Operator < -> Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// Operator <= -> Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

//Contoh 
let a = 10;
let b = 12;
console.log(a < b);
console.log(a > b);
console.log(a==b)

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); //true, karena nilainya sama
console.log(aString === aNumber); // false, karena walaupun nilainya sama tapi tipe datanya berbeda

// output
//  true
// false

//Logical Operator
// && -> Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// || -> Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// /! -> Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
let c = 10;
let d= 12;

/* AND operator */
console.log(c < 15 && d > 10); // (true && true) -> true
console.log(c > 15 && d > 10); // (false && true) -> false

/* OR operator */
console.log(c < 15 || d > 10); // (true || true) -> true
console.log(c > 15 || d > 10); // (false || true) -> true

/* NOT operator */
console.log(!(c < 15)); // !(true) -> false
console.log(!(c < 15 && d > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/