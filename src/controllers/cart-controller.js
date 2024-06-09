const cartService = require("../services/cart-service")

const cartController = {}

cartController.createCartItem = async (req, res, next) => {
    try {
        const data = req.body
        const result = await cartService.createCartItem(data);
        console.log(result)
        res.status(200).json({ message: 'added to cart' })
    } catch (error) {
        next(error)
    }
}

cartController.findCartItemByUserId = async (req,res,next) => {
    try {
        const userId = +req.params.userId
        const item = await cartService.findCartItemByUserId(userId);
        console.log(item)
        res.status(200).json(item)
    } catch (error) {
        next(error)
    }
}

cartController.deleteCartItemByCartId = async(req,res,next) => {
    try {
        await cartService.deleteCartItemByCartId(+req.params.cartId)
        res.status(200).json({message : 'Deleted cart item!'})
    } catch (error) {
        next(error)
    }
}

module.exports = cartController