import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGODB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB not connected", error.message);
    }
}

export default connectDB;