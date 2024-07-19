const adminService = require("../services/admin-service")
const jwtService = require("../services/jwt-service")
const orderService = require("../services/order-service")
const createError = require("../utils/create-error")

const adminController = {}

adminController.login = async (req, res, next) => {
    try {
        const { account, password } = req.body
        const result = await adminService.findAccount(account)
        if (result.password !== password) {
            createError({
                message: 'password invalid',
                statusCode: 400
            })
        }
        delete result.password
        const token = jwtService.sign(result)
        res.status(200).json({ message: 'login success', adminToken : token })
    } catch (error) {
        next(error)
    }
}

adminController.getAccount = async(req,res,next) =>{
    try {
        const {account} = req.admin
        res.status(200).json({message : account , role : 'admin'})
    } catch (error) {
        next(error)
    }
}

adminController.getAllUserOrder = async(req,res,next) => {
    try {
        const result = await orderService.getAllOrder()
        res.status(200).json({order : result})
    } catch (error) {
        next(error)
    }
}

adminController.updateOrderStatus = async(req,res,next) => {
    try {
        const orderId = +req.params.orderId
        const {status} = req.body
        await orderService.updateOrderStatus(orderId,status)
        res.status(201).json({message : 'status update success'})
    } catch (error) {
        next(error)
    }
}

module.exports = adminController