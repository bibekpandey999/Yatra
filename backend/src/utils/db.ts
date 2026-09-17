import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            serverSelectionTimeoutMS: 15000, // Increase timeout to 15 seconds
            socketTimeoutMS: 160000,  // Increase socket timeout
            connectTimeoutMS: 160000
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;