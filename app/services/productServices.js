import brandModel from "../models/brandsModel.js"
import categoryModel from "../models/categoriesModel.js"
import productDetailsModel from "../models/detailsModel.js"
import productModel from "../models/productsModel.js"
import reviewModel from "../models/reviewsModel.js"
import productSliderModel from "../models/slidersModel.js"
import mongoose from "mongoose"

// This file will contain all the queries related to product.
export const brandListService = async ()=>{

    try {
        let data = await brandModel.find()
        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"failed", "data":error.toString()}
    }

}


export const categoryListService = async ()=>{

    try {
        let data = await categoryModel.find()
        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"failed":"Success", "data":error.toString()}
    }

}


export const sliderListService = async ()=>{

    try {
        let data = await productSliderModel.find()
        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }

}



export const listByCategoryService = async (req)=>{

    try {
        const categoryID = new mongoose.Types.ObjectId(req.params.categoryID)
        const matchStage = {$match: { "categoryID": categoryID}}

        const brandLookup = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "Brand"}}

        const categoryLookup = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "Category" }}

        const projectStage = {$project: {"Category._id": 0, "Brand._id" : 0, "brandID" : 0, "categoryID" : 0, "_id": 0 } }

        const brandUnwindStage =     {$unwind:"$Brand"}
        const categoryUnwindStage =  {$unwind:"$Category"}
        
        let data = await productSliderModel.aggregate([
            matchStage,
            brandLookup,
            categoryLookup,
            brandUnwindStage,
            categoryUnwindStage,
            projectStage
        ])

        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }

}



export const listByRemarkService = async (req)=>{
    try {
        const remark = req.params.remark
        const matchStage = {$match: { "remark": remark}}

        const brandLookup = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "Brand"}}

        const categoryLookup = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "Category" }}

        const projectStage = {$project: {"Category._id": 0, "Brand._id" : 0, "brandID" : 0, "categoryID" : 0, "_id": 0 } }

        const brandUnwindStage =     {$unwind:"$Brand"}
        const categoryUnwindStage =  {$unwind:"$Category"}
        
        let data = await productSliderModel.aggregate([
            matchStage,
            brandLookup,
            categoryLookup,
            brandUnwindStage,
            categoryUnwindStage,
            projectStage
        ])

        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }

}



export const listByBrandService = async (req)=>{

    try {
        const brandID = new mongoose.Types.ObjectId(req.params.brandID)
        // -----------------------------------------
        const matchStage = {$match: {
            "brandID": brandID
          }}

        const brandLookup = {
            $lookup: {
              from: "brands",
              localField: "brandID",
              foreignField: "_id",
              as: "Brand"
            }
        }
        const categoryLookup = {
            $lookup: {
              from: "categories",
              localField: "categoryID",
              foreignField: "_id",
              as: "Category"
            }
        }
        const projectStage = {
            $project: {
                "Category._id": 0,
                "Brand._id" : 0,
                "brandID" : 0,
                "categoryID" : 0,
                "_id": 0
            }
        }
        const brandUnwindStage =     {$unwind:"$Brand"}
        const categoryUnwindStage =  {$unwind:"$Category"}
        
        
        // -----------------------------------------
        let data = await productSliderModel.aggregate([
            matchStage,
            brandLookup,
            categoryLookup,
            brandUnwindStage,
            categoryUnwindStage,
            projectStage
        ])

        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }

}



export const detailsByIDService = async (req)=>{
    try {
        const productID = new mongoose.Types.ObjectId(req.params.productID)
        const matchStage = {$match:{"_id":productID}}
        // const data = await productDetailsModel.find({"_id":productID})
        const data = await productDetailsModel.aggregate([matchStage])

        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }
}





export const detailsByKeywordService = async (req)=>{
    try {
        const keyword = req.params.keyword
        const matchRegex={$regex:keyword, "$options":"i"}
        const matchWithShortDes = {"shortDes":matchRegex}
        const matvhWithTitle = {"title":matchRegex}
        const searchParameter = {$or:[matchWithShortDes, matvhWithTitle]}
        const matchQuery = {$match:searchParameter}

        const brandLookup = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "Brand"}}

        const categoryLookup = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "Category" }}

        const projectStage = {$project: {"Category._id": 0, "Brand._id" : 0, "brandID" : 0, "categoryID" : 0, "_id": 0 } }

        const brandUnwindStage =     {$unwind:"$Brand"}
        const categoryUnwindStage =  {$unwind:"$Category"}


        const data = await productModel.aggregate([
           matchQuery,
           brandLookup,
           categoryLookup,
           projectStage,
           brandUnwindStage,
           categoryUnwindStage
        ])

        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }
}





export const productReviewListByIDService = async (req)=>{
    try {
        const productID = new mongoose.Types.ObjectId(req.params.id)
        
       const matchStage = {
        $match:{
            "productID":productID
        }
    }
        const userLookup = { $lookup: { from: "users", localField: "userID", foreignField: "_id", as: "User"}}
        const productLookup = {$lookup: { from: "products", localField: "productID", foreignField: "_id", as: "Product"}}
       

        const projectStage = {$project: {"Product.title":1,"rating":1, "User.email":1,"_id":0 } }

        const userUnwindStage =     {$unwind:"$User"}
        const productUnwindStage =     {$unwind:"$Product"}
       


        const data = await reviewModel.aggregate([

            matchStage,
            userLookup,
            productLookup,
            userUnwindStage,
            productUnwindStage,
            projectStage
        ])
        if(data.length > 0){
            return {"status":"Success", "data":data}
        }
        else{
            return {"status":"Success", "data":"No data Found!!!"}
        }

    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }
}



export const reviewCreateService = async (req)=>{
    try {
        const reqBody = req.body
        reviewModel.create(reqBody)
        return {"status":"Success", "data":reqBody}
    } catch (error) {
        return {"status":"Failed", "data":error.toString()}
    }
    // deri hobe karon user authentication dorkar ache. user ID auto nibe head theke..
}