export const createWish = async(req, res)=>{
    return res.json({"status":"Success","message":"Wish Creation success"})
}

export const readWishList = async(req, res)=>{
    return res.json({"status":"Success","message":"Wish List Read success"})
}

export const removeWish = async(req, res)=>{
    return res.json({"status":"Success","message":"Wish Remove success"})
}