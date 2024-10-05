import { categoryListService } from "../services/productServices.js"

export const categoryList = async(req, res)=>{
    const result = await categoryListService()
    return res.json(result)
}