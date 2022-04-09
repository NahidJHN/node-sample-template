const { objectId } = require("./custom.validation");

const Joi = require('joi');


const productValidation = {
    body: Joi.object().keys({
        owner: Joi.string().required().custom(objectId),
        catagory: Joi.string().required().custom(objectId),
        name: Joi.string().required(),
        type: Joi.string().valid('in', 'out'),
        stock: Joi.object({
            kg: Joi.string().required(),
            bosta:Joi.string().required()
        }),
       
    })
}

module.exports = {
    productValidation
} 