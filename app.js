import { PORT } from "./app/config/config.js"
import express from 'express'
import router from "./router/api.js"

const app = express()
app.use(router)

app.listen(PORT, ()=>{
    console.log(`server running ar http://localhost:${PORT}`)
})