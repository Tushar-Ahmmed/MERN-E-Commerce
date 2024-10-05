import mongoose from "mongoose"

const productSchema = mongoose.Schema(
    {
        title:{type:String, required:true},
        shortDes:{type:String, required:true},
        price:{type:String, required:true},
        discount:{type:Boolean, required:true},
        discountPrice:{type:Boolean, required:true},
        image:{type:String, required:true},
        star:{type:String, required:true},
        stock:{type:Boolean, required:true},
        remark:{type:String, required:true},
        categoryID:{type: mongoose.Schema.Types.ObjectId, required:true},
        brandID:{type: mongoose.Schema.Types.ObjectId, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const productModel = mongoose.model("products",productSchema)

export default productModel