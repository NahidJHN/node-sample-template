const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createOwner = {
	body: Joi.object().keys({
		mobile: Joi.string().max(11).required(),
		user: Joi.string().custom(objectId),
		name: Joi.string().required(),
		fatherName: Joi.string().required(),
		address: Joi.string().required(),
		nid: Joi.string().max(15).required(),
	}),
};

module.exports = {
	createOwner,
};
