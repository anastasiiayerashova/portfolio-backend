import Joi from "joi"

export const validationSchema = Joi.object({
    email: Joi.string().email().min(3).max(40).required().messages({
        'any.required': 'Email is required'
    }),
    message: Joi.string().required().messages({
        'any.required': 'Message is required'
    })
})
