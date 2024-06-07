const Joi = require('joi')

exports.registerValidate = Joi.object({
    email : Joi.string().email({tlds:false}).required().trim()
    .messages({'string-empty' : 'email is required'}),

    username : Joi.string().required().trim(),

    password : Joi.string().required().min(6).max(14)
    .messages({
        'string-empty' : 'password is required',
        'string.max' : 'password must be 6-14 characters',
        'string.min' : 'password must be 6-14 characters'
    }),

    confirmPassword : Joi.string().required().valid(Joi.ref('password')).strip()
    .messages({
        'string-empty' : 'password is required',
        'any.only' : 'confirm password not match'
    }),
});

exports.loginValidate = Joi.object({
    email : Joi.string().email({tlds:false}).required().trim(),

    password : Joi.string().required().min(6).max(14)
    .messages({
        'string-empty' : 'password is required',
        'string.max' : 'invalid password',
        'string.min' : 'invalid password'
    }),
})