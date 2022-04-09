const mongoose = require("mongoose");

const catagorySchema = mongoose.Schema({
	owner: {
		type: mongoose.Types.ObjectId,
		ref: "Owner",
	},
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
        enum: ["in", "out"],
        default:"out"
	},
}, {
    timestamps: true,
  });

const Catagory = mongoose.model("Catagory", catagorySchema);

module.exports = Catagory;
