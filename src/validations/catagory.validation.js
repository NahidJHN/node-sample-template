const Joi = require("joi")
const { objectId } = require("./custom.validation")


const catagoryValidation = {
    body: Joi.object().keys({
        owner: Joi.string().required().custom(objectId),
        name: Joi.string().required(),
        type:Joi.string().valid("in",'out')
    })
}

module.exports = {
    catagoryValidation
}