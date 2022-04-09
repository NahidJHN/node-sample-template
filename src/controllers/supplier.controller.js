const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {supplierServices } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');


//register supplier controller
const registerSupplier= catchAsync(async (req, res) => {
    const supplier = await supplierServices.createSupplier(req.body)
    res.status(httpStatus.CREATED).send({ supplier });
});

//get all supplier
const querySupplier = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'address', 'mobile'])
    const options = pick(req.query, ['shortBy', 'limit', 'page'])
    const result = await supplierServices.querySuppliers(filter, options)
    res.send(result)
})


//get single supplier by Id
const getSingleSupplier = catchAsync(async (req, res) => {
    const singleSupplier = await supplierServices.getSupplierById(req.params.supplierId)
    if (!singleSupplier) {
        throw new ApiError(httpStatus.NOT_FOUND, "Supplier not found")
    }
   return res.send(singleSupplier)
})

module.exports = {
    registerSupplier,
    querySupplier,
    getSingleSupplier
}