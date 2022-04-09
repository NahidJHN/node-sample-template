const { ownerServices } = require("../services/");
const catchAsync = require("../utils/catchAsync");

const createOwner = catchAsync(async (req, res) => {
	const owner = await ownerServices.registerOwner(req.body);
	res.send(owner);
});

const getOwners = catchAsync(async (req, res) => {
	const owner = await ownerServices.getOwners();
	res.send(owner);
});

const updateOwner = catchAsync(async (req, res) => {
	const updatedOwner = await ownerServices.updateOwner(
		req.body,
		req.params._ownerId
	);
	res.send(updatedOwner);
});

module.exports = {
	createOwner,
	getOwners,
	updateOwner,
};
