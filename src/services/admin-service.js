const prisma = require("../models/prisma-model")

const adminService = {}

adminService.findAccount = (account) => prisma.admin.findFirst({ where: {account} })
adminService.getAccount = (accountId) => prisma.admin.findUnique({where : {accountId}}) 

module.exports = adminService