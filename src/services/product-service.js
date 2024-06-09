const prisma = require("../models/prisma-model")

const productService = {}

productService.getAllProduct = () => prisma.product.findMany({ where: { color: 'WHITE' } })
productService.getProductById = (productId) => prisma.product.findUnique({ where: { id: productId } })
productService.getProductByModel = (model) => prisma.product.findMany({ where: { model: model } })
productService.getProductByName = (productName) => prisma.product.findMany({ where: { name: productName } })
module.exports = productService