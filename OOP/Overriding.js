// Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass
// mendefiniskan implementasinya sendiri pada sebuah method yang sebenarnya
// sudah didefinisikan pada superclass-nya.
// Overriding diterapkana ketika kita ingin menetapkan implementasi yang 
// spesifik di subclass pada sebuah method yang berasal dari superclass
// Overriding juga biasa diterapkan ketika kita ingin menambah properti
// baru secara sepsifik pada sebuah subclass

// Constructor Overriding 
// Constructor merupakan method spesial pada class yang akan dipanggil pada saat
// pembuat instance, lebih tepatnya ketika menggunakan keyword new diikuti dengan
// nama class

const mailService = new MailService(); // akan memanggil method constructor pada
// class MailService

// Constructor akan mengembalikan objek yaang merupakan instance dari class
// tersebut. Perbedaan dengan method pada umumnya, pada constructor kita
// tidak perlu menulis return ketika hendak mengembalikan nilai karena sudah dilakukan secara implisit

// Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainnya. Contohnya
// pada superclass MailService, kita mendefinisikan properti sender yang nilainya diambil dari
// argumen method constructor

class MailService{
  constructor(sender){
    this.sender = sender;
  }
  //...Method lain disembunyikan
}

const mailServicee = new MailService('someReceiver');
console.log(mailServicee);

/* Output:
MailService { sender: 'someReceiver' }
*/

// Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik
// hanya pada subclass tertentu. Contoh pada WhatsAppServicee yang merupakan subclass dari MailService
// kita membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat properti
// baru bernama isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan
// constructor overriding.

class MailService{
  constructor(sender){
    this.sender = sender;
  }
}

class WhatAppService extends MailService{

  constructor(sender, isBusines){
    super(sender);
    this.isBusines = isBusines
  }
}

// Overriding constructor dilakukan sismpel kita mendefinisikan kembali method constructor() pada sebuah subclass.
// Selaian itu, method constructor didefinisikan dengan perubahan sesuai kebutuhan kita, misalnya menambahkan
// properti dan argumen isBuesiness. Satu hal yang penting dalam penerapan cpnstructor overriding
// adalah jangan sampai lupa untuk memanggil method super()

// Memanggil method super () artinya memanggil constructor superclass, yaitu MailService. Dengan begitu, kita tidak
// perlu mendefinisikan dan menetapkan nilai properti umum satu per satu. Meskipun dalam contoh kali ini properti
// yaang besifat umum hanya ada satu, yaitu sender, tetapi  jika jumlah propertinya bertambah, kita tidak perlu
// menulis kode yang berulang pada setiap subclass.

// Pada sintaks class, pemanggilan super() tidak boleh terlewatkan karena menyebabkan ReferenceError

class MailService{
  constructor(sender){
    this.sender = sender;
  }
}

class WhatAppService extends MailService{
  constructor(sender, isBusines){
    this.sender = sender; // harusnya menggunakan super() 
  }
}
const whatsapp = new WhatAppService('+6253628363', true);

/**
* Output:
* ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
*/

// Method Overriding 
// Konsep overriding juga bisa diterapkan pada method class. Method overriding biasanya dilakukan ketika kita
// ingin mengubah implementasi mehtod warisan supeprclass. Contohnya, pada class MailService terdapat
// method send() yang sudah didefinisikan implementasinya. Namun, jika pada subclass WhatsAppService kita
// membutuhkan implementasinya yang berada, kita bisa override method send()

// Cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil
// method super di dalamnya

class MailService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatAppService extends MailService{
  constructor(sender, isBusines){
    super(sender);
    this.isBusines = isBusines;
  }
  // Overriding method
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

const MaILService = new MailService('someSender');
const whatsappService = new WhatAppService('+62535363628', true);

MaILService.sendMessage('Hai apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+623674883');


/**
* Output:
* someSender sent Hai, apa kabar? to someReceiver
* +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
*/

// Jika dibutuhkan, kita juga bisa memanggil method sendMessage() dari superclass melalui keyword super.sendMessage()
class MailService{
  constructor(sender){
    this.sender = sender;
  }
  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
class WhatAppService extends MailService{
  constructor(sender, isBusines){
    super(sender);
    this.isBusines = isBusines;
  }
  // Overriding 
  sendMessage(message, receiver){
    super.sendMessage(message, receiver);
    console.log('message sent via WhatsApp');
  }
}

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

/**
* Output:
* someSender sent Hai, apa kabar? to someReceiver
* +6281234567890 sent Hai, apa kabar? to +6289876543210
* message sent via WhatsApp
*/
