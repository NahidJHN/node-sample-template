const httpStatus = require('http-status');
const Supplier=require("../models/supplier.model")
const ApiError = require('../utils/ApiError');

/**
 * Create a supplier
 * @param {Object} supplierBody
 * @returns {Promise<Supplier>}
 */

const createSupplier = async (supplierBody) => {
  if (await Supplier.ismobileTaken(supplierBody.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'mobile already taken');
  }
  supplierBody.product=[]
  return Supplier.create(supplierBody);
};


const querySuppliers = async (filter, options) => {
  const supplier = await Supplier.paginate(filter, options)
  return supplier
}


const getSupplierById = async(id) => {
  return  Supplier.findById(id).populate({
    path: "product",
    select:"product"
  })
}

module.exports = {
  createSupplier,
  querySuppliers,
  getSupplierById
}