import mongoose from "mongoose"

const reviewSchema = mongoose.Schema(
    {   
        userID:{type:mongoose.Schema.Types.ObjectId, required:true},
        productID:{type:mongoose.Schema.Types.ObjectId, required:true},
        description:{type:String, required:true},
        rating:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const reviewModel = mongoose.model("reviews", reviewSchema)