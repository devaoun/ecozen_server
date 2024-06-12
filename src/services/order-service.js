const prisma = require("../models/prisma-model")

const orderService = {}

// orderService.createOrder = (data) => prisma.order.create({data})
// orderService.createOrderItem = (data) => prisma.orderItem.createMany({data})
// orderService.deleteAllCartItem = (userId) => prisma.cart.deleteMany({where:{userId}})

orderService.createTransactionOrder = async (orderData, orderItemData, userId) => {
    return await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({ data: { ...orderData } })
        const orderId = +order.id
        const data = orderItemData.map(item => {
            return { ...item, orderId: orderId }
        })
        await tx.orderItem.createMany({ data })
        await tx.cart.deleteMany({ where: { userId } })
        return
    })
}

module.exports = orderService