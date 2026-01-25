require("dotenv").config()
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = process.env.PORT|| 8000

//middlewares
app.use(cors())
app.use(express.json())

//test
app.get("/" , (req,res)=>{
    req.setEncoding("Backend is running")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Port`)
})