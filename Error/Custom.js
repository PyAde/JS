let json = '{"age": 30}';

try {
    let user =JSON.parse(json);

    if(user.name){
        throw new SyntaxError("'name' is required");
    }
    console.log(user.name);
    console.log(age);
}catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof SyntaxError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
}

// Awalnya JSON.parse akan mengonversi data String menjadi
// object. Apabila format String tidak sesuai, maka
// fungsi tersebut akan melemparkan SyntaxError
// Meskipun format atau sintaksis dari json string
// sudah sesuai, tetap ada kemungkinan data di dalamnya
// tidak lengkap. Saat ini kita masih menggunakan
// SyntaxError untuk menandai eror akibat data yang tidak
// lengkap, padahal secara sintaksis tidak ada masalah
// dari variabel json. Tentunya akan lebih baik jika kita
// Punya error yang lebih spesifik bukan?

// Untuk itu ita bisa membuat kelas Error kita sendiri
// dengan nama dan pesan yang lebih sesuai. Kelas ini
// merupakan turunan dari kelas Error yang sudah ada
// Sebagai, contoh, untuk mengecek validasi adata dari json
// kita bisa membuat kelas Error seperti ini

class Validation extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
// Kelas ValidationError memiliki parameter constructor
// berupa message yang berisi pesan detail terkait
// erornya. Mari kita lita penerapannya pada kode sebelumnya

const jsonn = '{"age":30}';

try{
    const user = JSON.parse(jsonn);
    if(!user.name){
        throw new ValidationError("'age' is required");
    }
    console.log(user.name);
    console.log(user.age)
}catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Syntax Error: ${error.message}`);
    }else if(error instanceof ValidationError){
        console.log(`Invalid data: ${error.message}`);
    }else{
        console.log(error.stack);
    }
}

/* output
Invalid data: 'name' is required.
*/

// Sekarang kode untuk menangani error menjadi lebih 
// baik bukan? Penggunaan instanceOf akan
// memberikan hasil eror yang lebih detail dan 
// sesuai dengan eror yang terjadi.