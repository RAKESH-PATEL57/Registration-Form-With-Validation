import mongoose from "mongoose";
import dontenv from "dotenv";
dontenv.config();
// const mongoose = require("mongoose");

// require("dotenv").config();


const MONGODB_URI = process.env.MONGODB_URI;

const db = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Mongo DB connected succesfully")
    } catch (error) {
        console.log("MongoDB not connected", error.message); 
    }
 
}

export default db;
