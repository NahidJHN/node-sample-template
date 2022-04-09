const mongoose = require("mongoose")

const managerSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Owner",
        required:true
    },
    name: {
        type: String,
        required:true
    },
    fatherName: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    nid: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    }
}, {
    timestamps: true,
  })

const Manager = mongoose.model("Manager", managerSchema)

module.exports=Manager