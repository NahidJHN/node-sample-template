const httpStatus = require("http-status");
const Owner = require("../models/owner.model");
const ApiError = require("../utils/ApiError");
const User = require("../models/user.model");
const { genPassword } = require("../utils/genPass");

const registerOwner = async (ownerInfo) => {
	const hasOwner = await User.findOne({ mobile: ownerInfo.mobile });
	if (hasOwner) {
		throw new ApiError(
			httpStatus.BAD_REQUEST,
			"এই মোবাইল নাম্বারটি অন্য একটি একাউন্টে ব্যাবহারিত হচ্ছে"
		);
	}
	const password = genPassword();
	const user = await User.create({
		mobile: ownerInfo.mobile,
		name: ownerInfo.name,
		password,
		role: "manager",
	});

    ownerInfo.user = user._id;
    const owner = Owner.create(ownerInfo);
    return owner
};


const getOwners = async () => {
    const owner = Owner.find()
    return owner
}


const updateOwner = async (ownerInfo,ownerId) => {
    const owner = Owner.findById(ownerId)
    if (!owner) {
        ApiError(httpStatus.BAD_REQUEST,"Owner not found!")
    }
    Object.assign(owner, ownerInfo)
    await owner.save()
    return owner
}


const getSingleOwner = async (ownerId) => {
    const owner =await Owner.findById(ownerId)
    if (!owner) {
        ApiError(httpStatus.BAD_REQUEST,"Owner not found!")
    }
}
    
module.exports = {
    registerOwner,
    getOwners,
    updateOwner
};
