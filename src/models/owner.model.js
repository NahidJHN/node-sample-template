const mongoose = require("mongoose")

const ownerSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
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
},
{
    timestamps: true,
  }
)

const Owner = mongoose.model("Owner", ownerSchema)

module.exports=Owner