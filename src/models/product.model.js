const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const productSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Owner",
      required: true,
    },

    catagory: {
      type: mongoose.Types.ObjectId,
      ref: "Catagory",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["in", "out"],
      default: "out",
    },
    stock: {
      kg: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
