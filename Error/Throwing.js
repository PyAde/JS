// Kasus Umum

//const json = '{"name": "Yoda", "age":20}';

try {
    const user = JSON.parse(json);
    console.log(user.name);
    console.log(user.age);
} catch (error){
    console.log(error.name);
    console.log(error.age);
}
// Pada kode di atas, fungsi JSON.parse akan melakukan
// parsing atau koversi variabel json (String) menjadi
// sebuah object. Skenario seperti di atas akan banyak
// kita temui ketika melakukan request ke API

// Lalu, bagaimana jika json string tidak 
// sesuai dengan format object JavaScript

const jsonn = '{bad json}';

try {
    const user = JSON.parse(jsonn);
    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

/* output
SyntaxError
Unexpected token b in JSON at position 1
*/

// Apabila json tidak sesuai format, maka JSON.parse
// akan menimbulkan erro. Error tersebut akan
// ditangkap oleh blok catch dan kode di dalamnya
// yang akan dieksekusi 

// Lalu, bagaiman jika json yang di dapat 
// adalah seperti ini

const Json = '{"age": 20}';

try{
    const user= JSON.parse(Json);
    console.log(user.name); // undefined
    console.log(user.age); // 20
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

// Secara sintaksis, kode di atas tidak menimbulkan
// error sehingga blok catch akan diabaikan. Namun
// tidak adanya properti name pada json sebenarnya
// sama saja dengan error karena akan berdampak
// pada jalannya program kita

// Untuk mengatasinya, kita bisa menggunakan
// throw. Operator ini akan melemparkan error pada
// program, sehingga eksekusi kode akan masuk pada 
// blok catch. Berikut ini adalah contoh
// mengimplementasikan throw untuk menimbulkan
// eror kita sendiri

const JSON = '{"age": 20}';

try {
    const user = JSON.parse(JSON);
    if (!user.name){
        throw new SyntaxError('name is required');
    }
} catch(error) {
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: 'name' is required.
*/

// Ketika properti user.name tidak memiliki nilai,
// proghram akan menghasilkan SyntaxError. Di dalamnya
// kita bisa menetukan pesan yang dapat mebantu
// menjelaskan apa error yang terjadi

// Sekarang anggaplaah json sudah sesuai, tetapi
// ada error lain yang terjadi, misalnya karena
// variabel yang belum terdefinisi

const json = '{"name": Yuda, "age":20}';
try{
    const user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError('name is required');
    }
    errorCode;
    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
*/

// Error berhasil di tanganin, tetapi konsol tetap
// menampilkan pesan "JSON Error" lantas bagaimana
// kita bisa menampilkan pesan error sesuai error
// yang muncul

try{
    //..
} catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error ${error.message}`);
    } else if(error instanceof SyntaxError){
        console.log(error.message);
    } else{
        console.log(error.stack);
    }
}

// Dengan operator instanceOf, kita bisa mendapatkan 
//tipe dari eror yang terjadi. Dari sana kita bisa
// membuat percabangan bagaimana cara menangani
// erornya.