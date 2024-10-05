import { brandListService } from "../services/productServices.js"



export const brandList = async(req, res)=>{

    const result = await brandListService()
    return res.json(result)
    
}