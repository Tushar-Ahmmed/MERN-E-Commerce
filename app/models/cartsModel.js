import mongoose from "mongoose"

const cartSchema = mongoose.Schema(
    {   
        userID:{type:mongoose.Schema.Types.ObjectId, required:true},
        productID:{type:mongoose.Schema.Types.ObjectId, required:true},
        color:{type:String, required:true},
        quantity:{type:String, required:true},
        size:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const cartModel = mongoose.model("carts", cartSchema)