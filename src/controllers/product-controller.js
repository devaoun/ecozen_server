const productService = require("../services/product-service")

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

module.exports = productController