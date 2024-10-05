import { detailsByIDService, detailsByKeywordService, listByBrandService, listByCategoryService, listByRemarkService, productReviewListByIDService, sliderListService } from "../services/productServices.js"

export const productListBySlider = async(req, res)=>{
   
    const result = await sliderListService()
    return res.json(result)


}




export const productListByBrand = async(req, res)=>{
    const result = await listByBrandService(req)
    return res.json(result)
}






export const productListByCategory = async(req, res)=>{
    const result = await listByCategoryService(req)
    return res.json(result)
}




export const productListByRemark = async(req, res)=>{
    const result = await listByRemarkService(req)
    return res.json(result)
}








export const productDetailsID = async(req, res)=>{
    const result = await detailsByIDService(req)
    return res.json(result)
}



export const productDetailsByKeyword = async(req, res)=>{
    const result = await detailsByKeywordService(req)
    return res.json(result)
}





export const productReviewListByID = async(req, res)=>{
    const result = await productReviewListByIDService(req)
    return res.json(result)
}

export const createPductReview = async(req, res)=>{
    return res.json({"status":"Success","message":"Product Review Creation success"})
}