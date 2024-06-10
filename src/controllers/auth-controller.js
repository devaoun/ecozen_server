const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authController = {}

authController.isUser = async (req, res, next) => {
    try {
        const email = req.params.email
        const user = await userService.findUserByEmail(email)
        if (!user) {
            res.status(200).json({ message: 'not found' })
        }
        res.status(200).json({ message : 'found email' })
    } catch (error) {
        next(error)
    }
}

authController.register = async (req, res, next) => {
    try {
        const data = req.input;
        data.password = await hashService.hash(data.password)
        const result = await userService.register(data)
        res.status(200).json({message : 'register success'})
    } catch (error) {
        next(error)
    }
}

authController.login = async (req, res, next) => {
    try {
        const { email, password } = req.input;
        const user = await userService.findUserByEmail(email)
        const checkPassword = await hashService.compare(password, user.password)
        if (!checkPassword) {
            createError({
                message: 'invalid username or password',
                statusCode: 400
            })
        }
        delete user.password
        const token = await jwtService.sign(user)
        console.log(token)
        res.status(200).json({ message: 'login success', accessToken: token })
    } catch (error) {
        next(error)
    }
}

authController.getMe = async (req,res,next) => {
    res.status(200).json({user : req.user})
}

module.exports = authController