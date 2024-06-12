const orderService = require("../services/order-service")


const orderController = {}


orderController.createOrder = async (req, res, next) => {
    try {
        const data = req.body

        const orderData = { slip: data.slip, userId: +data.userId }
        const orderItemData = req.body.product
        const userId = +data.userId

        await orderService.createTransactionOrder(orderData, orderItemData, userId)

        res.status(201).json({ message: 'Create order success' })

    } catch (error) {
        next(error)
    }
}

orderController.getUserOrder = async(req,res,next) => {
    try {
        const userId = +req.params.userId
        const result = await orderService.getUserOrder(userId)
        console.log(result)
        res.status(200).json({message : result})
    } catch (error) {
        next(error)   
    }
}

module.exports = orderController