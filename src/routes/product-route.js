const express = require('express')
const productController = require('../controllers/product-controller')

const productRouter = express.Router()

productRouter.get('/allProduct',productController.getAllProduct);
productRouter.get('/:productId',productController.getProductById);
productRouter.get('/model/:productModel',productController.getProductByModel);
productRouter.get('/productName/:productName',productController.getProductByName);

module.exports = productRouter