import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", authRouter)

const PORT = process.env.PORT || 4000;

// app.use()
app.listen(PORT, () => {
    //Database connection
    connectDB()
    console.log("Server is started")
})