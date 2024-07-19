const adminService = require("../services/admin-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/create-error");

const adminAuthenticate = async (req,res,next) => {
    try {
        const authorization = req.headers.authorization;
        if(!authorization || !authorization.startsWith('Bearer ')){
            createError({
                message : 'Unauthenticated',
                statusCode : 401
            })
        }

        const adminToken = authorization.split(' ')[1]
        const payload = jwtService.verify(adminToken);

        const admin = await adminService.findAccount(payload.account)

        if(!admin) {
            createError({
                message : 'admin was not found',
                statusCode: 400
            })
        }
        delete admin.password
        req.admin = admin
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminAuthenticate