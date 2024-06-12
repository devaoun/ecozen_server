const express = require('express')
const orderController = require('../controllers/order-controller')

const orderRouter = express.Router()

orderRouter.post('/newOrder',orderController.createOrder)
orderRouter.get('/myOrder/:userId',orderController.getUserOrder)

module.exports = orderRouter