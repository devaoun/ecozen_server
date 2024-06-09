const prisma = require("../models/prisma-model")

const cartService = {}

cartService.createCartItem = (data) => prisma.cart.create({ data })
cartService.deleteCartItemByCartId = (cartId) => prisma.cart.delete({ where: { id: cartId } })
cartService.findCartItemByUserId = (userId) => prisma.cart.findMany({
    where: {userId : userId},
    include : {
        product : true
    }
})

module.exports = cartService