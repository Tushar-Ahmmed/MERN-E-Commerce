import mongoose from "mongoose"

const sliderSchema = mongoose.Schema(
    {
        title:{type:String, required:true},
        des:{type:String, required:true},
        price:{type:String, required:true},
        img:{type:String, required:true},
        ProductID:{type: mongoose.Schema.Types.ObjectId, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const productSliderModel = mongoose.model("sliders",sliderSchema)
export default productSliderModel