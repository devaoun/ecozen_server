const userService = require("../services/user-service");

const userController = {};

userController.updateUserInfoById = async(req,res,next) => {
    try {
        await userService.updateUserInfoById(+req.params.userId,req.body)
        res.status(200).json({message : 'update success'})
    } catch (error) {
        next(error)
    }
}

module.exports = userController