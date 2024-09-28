import { database, PORT } from "./app/config/config.js"
import express from 'express'
import router from "./router/api.js"
import mongoose from "mongoose"

const app = express()
app.use(router)


mongoose.connect(database,{autoIndex:true})
.then(()=>{
    console.log(`Database Connected Successfullly....`);
    
})
.catch((error)=>{
    console.error(error)
    
})

app.listen(PORT, ()=>{
    console.log(`server running ar http://localhost:${PORT}`)
})