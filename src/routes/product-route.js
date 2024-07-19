const express = require('express')
const productController = require('../controllers/product-controller');
const upload = require('../middlewares/upload');
const adminAuthenticate = require('../middlewares/adminAuthenticate');

const productRouter = express.Router()

productRouter.get('/allProduct',productController.getAllProduct);
productRouter.get('/:productId',productController.getProductById);
productRouter.get('/model/:productModel',productController.getProductByModel);
productRouter.get('/productName/:productName',productController.getProductByName);
productRouter.patch('/upload',upload.single('image'),productController.uploadProduct);

//admin
productRouter.post('/create',adminAuthenticate,productController.createProduct)

module.exports = productRouter