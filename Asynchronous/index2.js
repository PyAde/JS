const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
