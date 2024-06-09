const express = require('express');
const cartController = require('../controllers/cart-controller');
const authenticate = require('../middlewares/authenticate');

const cartRouter = express.Router()

cartRouter.post('/item',cartController.createCartItem);

module.exports = cartRouter;