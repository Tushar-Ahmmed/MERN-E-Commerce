export const productListBySlider = async(req, res)=>{
    return res.json({"status":"Success","message":"Product List By Slider success"})
}

export const productListByCategory = async(req, res)=>{
    return res.json({"status":"Success","message":"Product List By Category success"})
}

export const productListByRemark = async(req, res)=>{
    return res.json({"status":"Success","message":"Product List By Remark success"})
}

export const productListByBrand = async(req, res)=>{
    return res.json({"status":"Success","message":"Product List By Brand success"})
}

export const productDetailsID = async(req, res)=>{
    return res.json({"status":"Success","message":"ProductDetails By ID success"})
}

export const productDetailsByKeyword = async(req, res)=>{
    return res.json({"status":"Success","message":"Product Details By Keyword success"})
}

export const productReviewListByID = async(req, res)=>{
    return res.json({"status":"Success","message":"Product Review List By ID success"})
}

export const createPductReview = async(req, res)=>{
    return res.json({"status":"Success","message":"Product Review Creation success"})
}