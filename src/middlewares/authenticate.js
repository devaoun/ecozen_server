const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authenticate = async (req,rex,next) => {
    try {
        console.log(req.headers)
        const authorization = req.headers.authorization;
        console.log(authorization)
        if(!authorization || !authorization.startsWith('Bearer ')){
            createError({
                message : 'Unauthenticated',
                statusCode : 401
            })
        }

        const accessToken = authorization.split(' ')[1]
        const payload = jwtService.verify(accessToken);

        const user = await userService.findUserByEmail(payload.email)

        if(!user) {
            createError({
                message : 'user was not found',
                statusCode: 400
            })
        }
        delete user.password
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authenticate