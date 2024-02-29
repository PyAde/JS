// Sama hal pada objek pada pemrograman, kita sering sekali mendapati kasus
// membuat sebuah objek dengan spesifikasi yang serupa, tetapi memiliki beberapa
// perbedaan kecil. Contoh, objek EmailService dengan WhatsApp Service.
// Kedua objek tersebut sama sama layanan perpesanan, mereka dapat mengirim
// pesan dan membutuhkan properti sender. Namun, terdapat beberapa perbedaan
// contohnya WhatsApp bisa mengirim pesan secara broadcast, sedangkan 
// email bisa mengirim pesan secara delay

// Cara membuat class WhatsApp DAN EmailService
// Pewarisan OOP
class WhatsAppService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
  sendBroadcastMessage(message, receivers){
    for(const receiver of receivers){
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`)
  }
  sendDelayedMessage(message, receiver){
    setTimeout(() => {
      this.sendMessage(message, receiver);
    },delay);
  }
}

// Namun, jika kita lihat kode di atas, terdapat duplikasi kode untuk
// bagian yang sama antarkedua objek tersebut. Walau terlihat sederhana, 
// tetapi tidak menutup kemungkinan kesamaan antar objek tersebut terus berkembang
// dan kita perlu melakukan duplikasi kode diantara keduanya

// Oke, masalahnya ada di duplikasi kode, bagaimana cara  menghindari duplikasi
// kode pada kasusu ini? Sebenarnya kita bisa membuat satu class yang mencakup
// kemampuan kedua objek tersebut. Sehinggga kita bisa membuat instance WhatsAppService
// dan EmailService menggunakan satu class saja

class MailService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
  sendDelayedMessage(message){
    setTimeout(() => {
      this.sendMessage(message, receiver)
    }, delay);
  }
  sendBroadcastMessage(message, receivers){
    for(const receiver of receivers){
      this.sendMessage(message, receiver);
    }
  }
}

const whatsapp = new MailService('+6281234567890');
const email = new MailService('asep@dicoding.com');

// Namun, cara ini membuat objek whatsapp dan email tidak memiliki perbedaan
// Masalah yang dapat ditumbulkan terdapat kemampuan yang tidak dibutuhkan
// antara kedua objek tersebut seperti sendDelayedMessage() di whatsApp dan
// sendBroadcastMessage() yang di email.

whatsapp.sendDelayedMessage(); // ??
email.sendBroadcastMessage(); //??

// Paradiigma OOP menawarkan solusi dalam memecahkan masalah ini dengan
// konsep pewarisan atau lebih dikenal dengan istilah inheritance

// Dengan konsep inheritance, kita bisa mewariskan sifat-sifat yang berada
// di dalam sebuah class ke class lain. Konsep inheritance cocok ketika 
// kita ingin membuat objek yang mirip dan memiliki sedikit perbedaan 
// seperti kasus yang kita hadapi

//Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class
// induk (superclass) dan sifat tersebut nantinya diwarisi kepada class di
// bawahnya (subclass). Kemudian pada subclass, kita bisa menambahkan 
//kemampuan lain yang lebih spesifik.

// Contohnya, kita buat superclass bernama MailService yang mengandung seluruh
// sifat yang sama pada WhatsAppService dan EmailService.

// Superclass
class MailService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
  sendBroadcastMessage(message, receivers){
    for(const receiver of receivers){
      this.sendMessage(message, receiver);
    }
  }
}
// Kemudian kita warisi sifat MailService ke subclass WhatsApp Service dan
// EmailService dengan menggunakan extends seperti ini

// subclass 
class WhatsAppService extends MailService{

}
// Subclass
class EmailService extends MailService{
  sendDelayedMessage(message,receiver){
    setTimeout(() =>{
      this.sendMessage(message, receiver);
    }, delay)
  }
}
// Di dalam masing-masing subclass, kita bisa mendefinisikan method yang spesifik
// seperto sendBroadCastMessage() untuk WhatsApp Service dan sendDelayedMessage()
// untuk EmailService

//sendBroadcastMessage(message, receiver){
  //for(const receiver of receivers){
    // this.sendMessage(message, receiver);
  //}
//}

// Subclass
// class EmailService extends MailService{
  //sendDelayedMessage(message, receiver, delay){
    // setTimeout(() =>{
      // this,sendMessage(message, receiver);
    //}, delay);
  //}
//}

// Pada kelas WhatsApp Service dan EmailService kita tetap memiliki akses
// terhadap method dari superclass melalui keyword this karena subclass 
// mewarisi sifat dari superclass

// Dengan teknik pewarisan seperti ini, akhirnya kita bisa membuat dua objek
// serupa dengan cara yang jauh lebih efektif

const whatsApp = new WhatsAppService('+621234567890');
const Email = new EmailService('asep.dicodin.com');

whatsApp.sendMessage('Hello', '+621234567890');
whatsApp.sendBroadcastMessage('Hello',['+620987654321', '+6282212802']);
whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error

// Pewarisan tanpa ES6 class

// Bagimana cara jika pewarisan tersebut dilakukan tanpa atau sebelum hadirnya
// sintaks class ES6?

// caranya adalah dengan teknik prototype inheritance seperti ini
function MailService(sender){
  this.sender = sender;
}
MailService.prototype.sendMessage = function(message, receiver){
  console.log(`${this.sender} sent ${message} to ${receiver}`);
}
function WhatsAppService(sender){
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

const wwhatsapp = new WhatsAppService("+6281234567890");
const eemail = new EmailService("dimas@dicoding.com");
wwhatsapp.sendMessage("Hello", "+6289876543210");
wwhatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
eemail.sendMessage("Hello", "john@doe.com");
eemail.sendDelayedMessage("Hello", "john@doe.com", 3000);

// Pewarisan dengan menggunakan keyword function memang lebih sulit untuk
// dibaca, alasan inilah yang membuat sintaks class hadir pada ES6.
// Ingat class hanyalah cara lain dalam membuat constructor function

// Operator instanceof
// Salah satu mengetahui jenis objek adalah dengan mengecek rantai prototype
// nya. Kita bisa menggunakan operator instanceof

operand1 instanceof operand2 

// Penjelasannya:

// operand1: merupakan objek yang ingin dites prototype-nya
// operand2 : merupakan constructor function atau class

// Berikut contoh penggunaan dari operator instanceof dalam 
// mengecek objek whatsapp yang merupakan instance dari class
// WhatAppService

const WhatApp = new WhatsAppService('+6281234567890')

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false

// Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan 
// nilai true jika objek yang di tes (operand pertama) memiliki prototype 
// yang merupakan operand kedua, operasinya akan menghasilkan nilai false

//Operator instanceof juga akan mengecek prototype secara berantai.
// Artinya instanceof juga mengecek hingga prototype yang diwarisi oleh objek
// tersebut

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true