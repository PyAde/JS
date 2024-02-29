const {getUser, getWeather} = require('./utils');

function getUserWeahter(userId, callback){
    getUser(userId, (error, user)=> {
        if(error){
            callback(error, null);
        }
        getWeather(user.location, (error, weather)=>{
            if (error){
                callback(error, null);
            }
            callback(null, {...user, ...weather});
        });
    });
}

getUsersWeather(1,(error, userWeather)=>{
    if(error){
        console.log(error);
    }
    console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
})

// Ini merupakan contoh sederhana dalam penggambaran
// masalah yang sering dihadapi pada kasus nyata
// ketika bermain dengan proses asinkron. 

// Menurut kami, masalah yang berhubungan dengan
// readability code adalah masalah yang serius
// Saking seriusnya, masalahnya ini dikenal sebagai
// callback hel atau pyramid of doom. Anda bisa lihat 
// betapa menyeramkannya lengkungan kode ketika kita
// banyak menggunakan callback, hingga bisa tampak seperti
// seperti gambar di bawah ini.

// Pola callback dapat digunakan pada bahasa pemrograman
// apa pun, begitu juga masalah yang dihasilkan olehnya
// Berikut adalah gambaran kode yang memanfaatkan Promise
// dalam proses asynchronous-nya

function getUserWeather(userId){
    let user;

    return getUser(userId)
    .then((_user)=>{
        user = _user;
        return getWeather(user.location)
    })
    .then((weather)=> ({...user, ...weather}));
}
getUserWeather(1)
  .then(console.log)
  .catch(console.log);