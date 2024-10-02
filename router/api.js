import express from "express"
import * as usersController from "../app/controllers/usersController.js"
import * as brandsController from "../app/controllers/brandsController.js"
import * as categoriesController from "../app/controllers/categoriesController.js"
import * as cartsController from "../app/controllers/catrsController.js"
import * as wishesController from "../app/controllers/wishesController.js"
import * as productsController from "../app/controllers/productsController.js"
import * as invoicesController from "../app/controllers/invoicesController.js"




const router = express.Router()


// user Routes
router.post('/login',usersController.login)
router.post('/verifyLogin',usersController.verifyLogin)
router.post('/createUserProfile',usersController.createUserProfile)
router.get('/updateUserProfile',usersController.updateUserProfile)
router.get('/readUserProfile',usersController.readUserProfile)

// brand Routes
router.get("/brandList",brandsController.brandList)

// category Controller
router.get("/categoryLisy",categoriesController.categoryLisy)

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
router.get("/productListByCategory",productsController.productListByCategory)
router.get("/productListByRemark",productsController.productListByRemark)
router.get("/productListByBrand",productsController.productListByBrand)
router.get("/productDetailsID",productsController.productDetailsID)
router.get("/productDetailsByKeyword",productsController.productDetailsByKeyword)
router.get("/productReviewListByID",productsController.productReviewListByID)
router.post("/createPductReview",productsController.createPductReview)

// Invoice Controller
router.post("/createInvoice",invoicesController.createInvoice)
router.get("/readInvoice",invoicesController.readInvoice)
router.get("/readInvoiceDetails",invoicesController.readInvoiceDetails)


export default router