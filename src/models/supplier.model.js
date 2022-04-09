const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const supplierSchema = mongoose.Schema(
	{
		owner: {
			type: mongoose.Types.ObjectId,
			required:true
		},
		
		name: {
			type: String,
			required: true,
			trim: true,
		},

		fatherName: {
			type: String,
			required:true
		},
		nid: {
			type: String,
			required:true
		},
		address: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
			validate(value) {
				if (value.length < 11) {
					throw new Error("Invalid mobile number");
				}
			},
			unique:true
		},
	
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
supplierSchema.plugin(toJSON);
supplierSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
supplierSchema.statics.ismobileTaken = async function (mobile, excludeUserId) {
	const supplier = await this.findOne({ mobile, _id: { $ne: excludeUserId } });
	return !!supplier;
};

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
