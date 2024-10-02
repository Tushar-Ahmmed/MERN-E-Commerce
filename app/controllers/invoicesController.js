export const createInvoice = async(req, res)=>{
    return res.json({"status":"Success","message":"Invoice Creation success"})
}

export const readInvoice = async(req, res)=>{
    return res.json({"status":"Success","message":"Invoice Read success"})
}

export const readInvoiceDetails = async(req, res)=>{
    return res.json({"status":"Success","message":"Invoice Details Read success"})
}