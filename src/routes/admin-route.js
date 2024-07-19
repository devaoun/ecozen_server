const express = require('express')
const adminController = require('../controllers/admin-controller')
const adminAuthenticate = require('../middlewares/adminAuthenticate')

const adminRouter = express.Router()

adminRouter.post('/login',adminController.login)
adminRouter.get('/account',adminAuthenticate,adminController.getAccount)
adminRouter.get('/allUserOrder',adminController.getAllUserOrder)
adminRouter.patch('/orderStatus/:orderId',adminAuthenticate,adminController.updateOrderStatus)

module.exports = adminRouter