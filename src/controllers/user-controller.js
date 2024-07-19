const uploadService = require("../services/upload-service");
const userService = require("../services/user-service");
const fs = require('fs/promises')

const userController = {};

userController.updateUserInfoById = async (req, res, next) => {
    try {
        await userService.updateUserInfoById(+req.params.userId, req.body)
        res.status(200).json({ message: 'update success' })
    } catch (error) {
        next(error)
    }
}

userController.uploadSlip = async (req, res, next) => {
    try {
        const result = await uploadService.upload(req.file.path)
        res.status(201).json({slip:result})
    } catch (error) {
        next(error)
    } finally {
        await fs.unlink(req.file.path)
    }
}

module.exports = userController