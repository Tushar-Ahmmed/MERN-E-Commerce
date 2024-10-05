import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        email:{type:String, required:true,lowercase:true},
        otp:{type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const userModel = mongoose.model("users",userSchema)
export default userModel