const router = require("express").Router();
const { ownerController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const { ownerValidation } = require("../../validations");

router
	.route("/")
	.get(auth(["admin"]), ownerController.getOwners)
	.post(
		auth(["owner"]),
		validate(ownerValidation.createOwner),
		ownerController.createOwner
	);
router
	.route("/:ownerId")
	.patch(
		auth(["owner"]),
		validate(ownerValidation.createOwner),
		ownerController.updateOwner
)
	.get(auth(["owner"],))

module.exports = router;
