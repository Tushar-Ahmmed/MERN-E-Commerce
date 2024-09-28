import express from "express"


const router = express.Router()


router.get('/',(req,res)=>{
    res.end('Home Directory')
})






export default router