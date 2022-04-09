const Joi = require("joi");
const { objectId } = require("./custom.validation");

const stockValidation = {
	body: Joi.object().keys({
		owner: Joi.string().required().custom(objectId),
		supplier: Joi.string().required().custom(objectId),
        catagory: Joi.string().required().custom(objectId),
		product: Joi.string().required().custom(objectId),
        stock: Joi.object({
            kg: Joi.string().required(),
            bosta:Joi.string().required()
        }),
        amount:Joi.string()
	}),
};

module.exports = {
	stockValidation,
};
