const { registerValidate, loginValidate } = require("../validators/joi-validate")


exports.registerValidator = (req,res,next) => {
    const { value , error } = registerValidate.validate(req.body);
    if(error){
        console.dir(error)
        return res.status(400).json({message : error.details[0].message})
    }
    req.input = value;
    next()
}

exports.loginValidator = (req,res,next) => {
    const { value , error } = loginValidate.validate(req.body);
    if(error){
        console.dir(error)
        return res.status(400).json({message : error.details[0].message})
    }
    req.input = value;
    next()
}