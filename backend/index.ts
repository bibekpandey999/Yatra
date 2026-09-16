import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import connectDB from './src/utils/db.js'
import CutomerRoutes from './src/routes/customer.route.js'
import TransportRoutes from './src/routes/transporter.route.js'

dotenv.config()

const PORT = 8000

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v8/users",CutomerRoutes);
app.use("/api/v8/transporters",TransportRoutes)


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running at port ${PORT}`)
        })

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();

