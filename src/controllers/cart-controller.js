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

module.exports = cartController