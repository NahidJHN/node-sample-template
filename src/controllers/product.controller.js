const { productServices } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const Product = require("../models/product.model");
const { Supplier } = require("../models");

//add product controller
const addProduct = catchAsync(async (req, res) => {

    const { supplierId } = req.params
    
	const product = await productServices.addProduct(
		req.body,
		supplierId
    );
    
	let newProduct=await product.save();
    await Supplier.findByIdAndUpdate(
        {
            _id: supplierId,
        },
        {
            $push: {
                product:product._id
            },
        }
    )

	const result = await Product.findById(newProduct._id).populate({
		path: "supplier",
		select: "name mobile",
	});
	res.status(httpStatus.CREATED).send(result);
});

//update product controller
const updateProduct = catchAsync(async (req, res) => {
	const { supplierId } = req.params;
	const updatedProduct = await productServices.updateProduct(
		req.body,
		supplierId
	);
	console.log(supplierId);
	console.log(updatedProduct);
	res.send(updatedProduct);
});

module.exports = {
	addProduct,
	updateProduct,
};
