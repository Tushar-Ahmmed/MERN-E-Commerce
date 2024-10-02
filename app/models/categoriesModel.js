import mongoose from "mongoose"

const categorySchema = mongoose.Schema(
    {
        categoryName:{type:String, required:true, unique:true},
        categoryImg:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const categoryModel = mongoose.model("categories",categorySchema)