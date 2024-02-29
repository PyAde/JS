//Node.js
//Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun,
// tidak hanya terbatas pada lingkungan browser.

// Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.

// Node.js juga menyediakan banyak library/module JavaScript yang membantu menyederhanakan pengembangan aplikasi web. Berikut ini adalah beberapa fitur penting dari Node.js yang 
//menjadikannya pilihan utama dalam pengembangan aplikasi:

// Asynchronous & Event-driven
// Semua API dari Node.js bersifat asynchronous, artinya tidak memblokir proses lain sembari menunggu satu proses selesai. Server Node.js akan melanjutkan ke pemanggilan API berikutnya
// lalu memanfaatkan mekanisme event notification untuk mendapatkan respon dari panggilan API sebelumnya.

// Very Fast
// Eksekusi kode dengan Node.js sangat cepat karena berjalan pada V8 JavaScript Engine dari Google Chrome.

// Single Threaded but Highly Scalable
// Node.js menggunakan model single thread dengan event looping. Mekanisme ini membantu server untuk merespon secara asynchronous dan menjadikan server lebih /
// scalable dibandingkan server tradisional yang menggunakan banyak thread untuk menangani permintaan.
// Node.js dirancang untuk aplikasi dengan proses I/O yang intensif seperti network server atau backend API. Pemrograman dengan multithreading relatif 
// lebih berat dan sulit untuk dilakukan. Jika kita ingin membuat web server yang bisa menangani ratusan request bersamaan, menggunakan ratusan thread akan membutuhkan memori yang besar. Oleh karena itu, karakteristik Node yang asynchronous dan single thread dirancang untuk memungkinkan implementasi server yang dapat menangani banyak request pada waktu yang sama.

// Bagaimana jika langsung mencoba Node.js pada perangkat kita? Kita akan mulai dengan langkah instalasi Node.js pada materi berikutnya.

