const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";
let variabel_str = document.querySelector("p");
variabel_str.textContent = "my name bob";
function tambah(){
  let angka1 = parseInt(document.getElementById("plus1").value);
  let angka2 = parseInt(document.getElementById("plus2").value);
  let tambah = angka1 + angka2;
  document.getElementById("hasil").innerHTML = tambah;
}
function kurang(){
    let angka1 = parseInt(document.getElementById("plus1").value);
    let angka2 = parseInt(document.getElementById("plus2").value);
    let kurang = angka1 - angka2;
    document.getElementById("hasil").innerHTML = kurang;
}

function kali() {
  let angka1 = parseInt(document.getElementById("plus1").value);
  let angka2 = parseInt(document.getElementById("plus2").value);
  let kali = angka1 * angka2;
  document.getElementById("hasil").innerHTML = kali;
}
function bagi() {
  let angka1 = parseFloat(document.getElementById("plus1").value);
  let angka2 = parseFloat(document.getElementById("plus2").value);
  let bagi = angka1 / angka2;
  document.getElementById("hasil").innerHTML = bagi;
}