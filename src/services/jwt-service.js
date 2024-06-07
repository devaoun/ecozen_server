const jwt = require('jsonwebtoken')

const jwtService = {}

jwtService.sign = payload => jwt.sign(payload, process.env.SECRET,{expiresIn: '7d'});

jwtService.verify = token => jwt.verify(token , process.env.SECRET);

module.exports = jwtService;