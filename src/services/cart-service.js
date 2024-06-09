const prisma = require("../models/prisma-model")

const cartService = {}

cartService.createCartItem = (data) => prisma.cart.create({ data })
cartService.deleteCartItem = (itemId) => prisma.cart.delete({ where: { id: itemId } })

module.exports = cartService