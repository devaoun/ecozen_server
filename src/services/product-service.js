const prisma = require("../models/prisma-model")

const productService = {}

productService.getAllProduct = () => prisma.product.findMany()
productService.getProductById = (productId) => prisma.product.findUnique({ where: { id: productId } })
productService.getProductByModel = (model) => prisma.product.findMany({ where: { model : model } })
module.exports = productService