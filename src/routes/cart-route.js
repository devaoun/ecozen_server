const express = require('express');
const cartController = require('../controllers/cart-controller');

const cartRouter = express.Router()

cartRouter.post('/item',cartController.createCartItem);
cartRouter.get('/item/get/:userId',cartController.findCartItemByUserId)
cartRouter.delete('/item/delete/:cartId',cartController.deleteCartItemByCartId)

module.exports = cartRouter;