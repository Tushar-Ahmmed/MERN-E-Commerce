import mongoose from "mongoose"
import profileModel from "../models/profilesModel.js"
import userModel from "../models/usersModel.js"
import { sendEmail } from "../utility/emailUtility.js"
import { encodeToken } from "../utility/tokenUtility.js"

export const userLoginService = async (req)=>{
    // Login er jonno OTP dibe then verified hole token dite hobe
    // 1. Check korte hobe user exists kore kina
    // jodi kore tahole OTP dite hoeb.
    try {
        const {email} = req.body
        
        const data = await userModel.findOne({"email":email})
    
        if (data != null){
            const otp = Math.floor(100000 + Math.random()*900000)
            const emailText = `Your OTP is ${otp}`
            const subject = "OTP"
            // await sendEmail(email, subject, emailText)
            await userModel.updateOne({"email":email}, {$set:{"otp":otp}})        
            return {"status":"Success", "message":"OTP has been sent to your email. Please insert that","otp":otp}
        }

    } catch (error) {
        return {"status":"Failed", "Error":error.toString()}
    }
    return undefined
}


export const userVerifyService = async (req)=>{
    try {
        const {email} = req.body
        const otp = req.params.otp    
        const data = await userModel.findOne({"email":email})
    
        if (data != null && data["otp"] == otp){    
            const token = encodeToken({"email":email, "userID":data["_id"]})    
            return {"status":"Success", "token":token}
        }

    } catch (error) {
        return {"status":"Failed", "Error":error.toString()}
    }
}


export const createUserProfileService = async (req)=>{
    try {
        let reqBody = req.body
        const userID = req.headers.userID
        reqBody.userID = userID
        await profileModel.create(reqBody)
        return {"status":"Success", "Message":"profile Created!!"}
    } catch (error) {
        return {"status":"Failed", "Message":error.toString()}
    }
}


export const updateUserProfileService = async (req)=>{

}


export const readUserProfileService = async (req)=>{
    try {
        const userID = new mongoose.Types.ObjectId( req.headers.userID)
    const profile = await profileModel.findOne({"userID":userID})
    if(profile != null){
        return {"status":"Success","data":profile}
    }
    else{
        return {"status":"Failed","data":"No data found"}
    }
    } catch (error) {
        return {"status":"Failed","data":error.toString()}
    }
    
}