import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = 8000 

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})