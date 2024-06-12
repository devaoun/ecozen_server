const express = require('express')
const userController = require('../controllers/user-controller')
const upload = require('../middlewares/upload')


const userRouter = express.Router()

userRouter.patch('/info/:userId',userController.updateUserInfoById)
userRouter.patch('/upload',upload.single('slip'),userController.uploadSlip)

module.exports = userRouter