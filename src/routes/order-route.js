const express = require('express')
const orderController = require('../controllers/order-controller')
const upload = require('../middlewares/upload')

const orderRouter = express.Router()

orderRouter.post('/newOrder',orderController.createOrder)

module.exports = orderRouter