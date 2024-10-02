import mongoose from "mongoose"

const brandSchema = mongoose.Schema(
    {
        brandName:{type:String, required:true, unique:true},
        brandImg:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const brandModel = mongoose.model("brands",brandSchema)
export default brandModel