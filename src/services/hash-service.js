const bcrypt = require('bcryptjs')

const hashService = {}

hashService.hash = (plainText) => bcrypt.hash(plainText,12);
hashService.compare = (input,hashValue) => bcrypt.compare(input ,hashValue);

module.exports = hashService;