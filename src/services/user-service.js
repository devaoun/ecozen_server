const prisma = require("../models/prisma-model")

const userService = {}

userService.register = (data) => prisma.user.create({data})
userService.findUserByEmail = (email) => prisma.user.findUnique({where : {email}})

module.exports = userService