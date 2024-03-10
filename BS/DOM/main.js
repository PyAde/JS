/** @format */

// // console.log(document.title)

// document.title = 'Budi';

// // console.log(document.title)

// // console.log(document.body)

// // document.body
// const body = document.body
// body.append("Hello World")

// const h1 = document.createElement('h1') // <h1></h1>
// h1.textContent = "INI H1 "; // <h1>INI H1</h1>
// body.append(h1)

// const namaSaya = document.createElement('p')
// namaSaya.innerText = 'Budi'
// body.append(namaSaya)

// const namaKamu = document.createElement('b')
// namaKamu.innerHTML = 'Asep'
// body.append(namaKamu)

const body = document.body
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const defaultTeks = 'Klik saya 1'
btn1.textContent = defaultTeks
btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "20px";

function clickButton() {
  // console.log('aman')
  btn1.style.background = "aqua";
  const newText= document.createElement('p')
  newText.textContent = 'halo bud'
  body.append(newText)
}

function ubahTeks() {
  btn1.textContent = "Hahaha";
}

function oriTeks() {
  btn1.textContent = defaultTeks
}
const defaultTekss = document.createElement('h1')
defaultTekss.textContent = 'BUDI'
function munculTeks(){
  body.append(defaultTekss)
}

const newColor = defaultTekss
newColor.style.color = "red"

function ubahColor(){
  newColor
}
