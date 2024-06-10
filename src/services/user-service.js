const prisma = require("../models/prisma-model")

const userService = {}

userService.register = (data) => prisma.user.create({ data })
userService.findUserByEmail = (email) => prisma.user.findUnique({ where: { email } })
userService.updateUserInfoById = (userId,data) => prisma.user.update({
    data,
    where: { id : userId }
})


module.exports = userService