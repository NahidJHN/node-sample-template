const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const stockSchema = mongoose.Schema(
	{
		owner: {
			type: mongoose.Types.ObjectId,
			ref: "Owner",
			required: true
		},
        supplier: {
			type: mongoose.Types.ObjectId,
			ref: "Supplier",
			required: true
        },
        catagory: {
			type: mongoose.Types.ObjectId,
			ref: "Satagory",
			required: true
		},
        product: {
			type: mongoose.Types.ObjectId,
			ref: "Swner",
			required: true
		},
		stock: {
			kg: {
				type: String,
				required:true
			},
			bosta: {
				type: String,
				required:true
			}
        },
        amount: {
            type:String
        }

	},
	{ timestamps: true }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
