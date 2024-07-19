const productService = require("../services/product-service")
const uploadService = require("../services/upload-service")
const fs = require('fs/promises')

const productController = {}

productController.getAllProduct = async (req, res, next) => {
    try {
        const data = await productService.getAllProduct()
        res.status(200).json({ allProduct: data })
    } catch (error) {
        next(error)
    }
}

productController.getProductById = async (req, res, next) => {
    try {
        const data = await productService.getProductById(+req.params.productId)
        res.status(200).json({ selectedProduct: data })
    } catch (error) {
        next(error)
    }
}

productController.getProductByModel = async (req, res, next) => {
    try {
        const data = await productService.getProductByModel(req.params.productModel)
        res.status(200).json({ modelProduct: data })
    } catch (error) {
        next(error)
    }
}

productController.getProductByName = async (req, res, next) => {
    try {

        const data = await productService.getProductByName(req.params.productName)
        res.status(200).json({ productName: data })
    } catch (error) {
        next(error)
    }
}

productController.uploadProduct = async (req, res, next) => {
    try {
        const url = await uploadService.upload(req.file.path)
        res.status(200).json({ url: url })
    } catch (error) {
        next(error)
    } finally {
        await fs.unlink(req.file.path)
    }
}

productController.createProduct = async (req, res, next) => {
    try {
        console.log(req.body)
        await productService.createProduct(req.body)
        res.status(200).json({ message: 'product create success' })
    } catch (error) {
        next(error)
    }
}

module.exports = productController