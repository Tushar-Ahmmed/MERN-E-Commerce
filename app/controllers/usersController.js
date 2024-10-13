import { createUserProfileService, readUserProfileService, userLoginService, userVerifyService } from "../services/userServices.js"

// User
export const login = async(req, res)=>{
    const result = await userLoginService(req)  
    res.json(result)
}




export const verifyLogin = async(req, res)=>{
    const result = await userVerifyService(req)  
    res.json(result)
}
export const createUserProfile = async(req, res)=>{
    const result = await createUserProfileService(req)  
    res.json(result)
    // return res.json({"status":"Success","message":"User Profile Created"})
}
export const updateUserProfile = async(req, res)=>{
    return res.json({"status":"Success","message":"User Profile Created"})
}

export const readUserProfile = async(req, res)=>{
    const result = await readUserProfileService(req)  
    res.json(result)
}

// Brands