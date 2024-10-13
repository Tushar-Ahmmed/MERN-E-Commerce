import express from "express"
import * as usersController from "../app/controllers/usersController.js"
import * as brandsController from "../app/controllers/brandsController.js"
import * as categoriesController from "../app/controllers/categoriesController.js"
import * as cartsController from "../app/controllers/catrsController.js"
import * as wishesController from "../app/controllers/wishesController.js"
import * as productsController from "../app/controllers/productsController.js"
import * as invoicesController from "../app/controllers/invoicesController.js"
import { userAuthentication } from "../app/middleware/authMiddleWare.js"




const router = express.Router()


// user Routes
router.post('/login',usersController.login)
router.post('/verifyLogin/:otp',usersController.verifyLogin)
router.post('/createUserProfile', userAuthentication, usersController.createUserProfile)
router.post('/updateUserProfile',usersController.updateUserProfile)
router.get('/readUserProfile', userAuthentication, usersController.readUserProfile)

// brand Routes
router.get("/brandList",brandsController.brandList)

// category Controller
router.get("/categoryList",categoriesController.categoryList)

// cart Controller
router.post("/createCart",cartsController.createCart)
router.get("/readCartList",cartsController.readCartList)
router.post("/updateCart",cartsController.updateCart)
router.post("/removeCart",cartsController.removeCart)

// review
router.post("/createPductReview",productsController.createPductReview)

// Wish Controller
router.post("/createWish",wishesController.createWish)
router.get("/readWishList",wishesController.readWishList)
router.post("/removeWish",wishesController.removeWish)

//Producr Controller
router.get("/productListBySlider",productsController.productListBySlider)
router.get("/productListByBrand/:brandID",productsController.productListByBrand)
router.get("/productListByCategory/:categoryID",productsController.productListByCategory)
router.get("/productListByRemark/:remark",productsController.productListByRemark)
router.get("/productDetailsID/:productID",productsController.productDetailsID)
router.get("/productDetailsByKeyword/:keyword",productsController.productDetailsByKeyword)
router.get("/productReviewListByID/:id",productsController.productReviewListByID)


router.post("/createPductReview",productsController.createPductReview)

// Invoice Controller
router.post("/createInvoice",invoicesController.createInvoice)
router.get("/readInvoice",invoicesController.readInvoice)
router.get("/readInvoiceDetails",invoicesController.readInvoiceDetails)


export default router