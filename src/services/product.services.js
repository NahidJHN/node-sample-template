const httpStatus = require("http-status");
const { Supplier } = require("../models");
const Product = require("../models/product.model");
const ApiError = require("../utils/ApiError");

/**
 * add a product
 * @param {Object} supplierBody
 * @returns {Promise<Supplier>}
 */

const addProduct = async (productBody, id) => {
  if (Object.values(productBody).length < 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Please provide product information"
    );
  }
  const product = new Product({
    supplierId: id,
    product: {
      catagory: productBody.catagory,
      unit: productBody.unit,
    },
  });
  return product;
};

//update product
const updateProduct = async (productBody, supplierId) => {
  const productUpdate = Product.findByIdAndUpdate(supplierId, {
    ...productBody,
  });
  return productUpdate;
};

module.exports = {
  addProduct,
  updateProduct,
};
