export const createCart = async(req, res)=>{
    return res.json({"status":"Success","message":"Cart Creation success"})
}

export const readCartList = async(req, res)=>{
    return res.json({"status":"Success","message":"Cart List read success"})
}

export const updateCart = async(req, res)=>{
    return res.json({"status":"Success","message":"Cart Update success"})
}

export const removeCart = async(req, res)=>{
    return res.json({"status":"Success","message":"Cart removing success"})
}