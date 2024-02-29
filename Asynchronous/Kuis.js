/**
 * @TODO 
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based
 * 
 * Catatan:
 * Anda boleh menggunakan util.promisifiy untuk mengubah fungsi callback based menjadi Promise-based
 * Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir
 */

const util = require('util')
function getProvinces(countryId, callback){
    setTimeout(() =>{
        if(countryId === 'id'){
            callback(null, [
                {id: 'id-jk', name: 'Jakarta'},
                {id: 'id-bt', name: 'Banten'},
                {id: 'id-jr', name: 'Jawa Barat'},
            ]);
            return;
        }
        callback(new Error('Country not found'), null);
    }, 1000);
}

const getProvincesPromise = util.promisify(getProvinces);

getProvincesPromise('id')
  .then(provinces => console.log(provinces))
  .catch(error => console.log(error.message));

module.exports = { getProvinces: getProvincesPromise };
