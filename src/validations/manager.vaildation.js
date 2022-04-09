const Joi = require("joi");
const { objectId } = require("./custom.validation");


const createManager={
    body: Joi.object().keys({
        user: Joi.string().required().custom(objectId),
        owner: Joi.string().required().custom(objectId),
        name: Joi.string().required(),
        fatherName: Joi.string().required(),
        address: Joi.string().required(),
        nid: Joi.string().max(15).required(),
        mobile:Joi.string().max(11).required
    })
}

module.exports = {
    createManager
}