import express, { Router } from "express";
import { login, logout, signUp } from "../controllers/authControllers.js";

const authRouter = express(Router());

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;

// const express = require("express");
// const { signupValidation } = require("../middlewares/AuthValidation");
// const { signup } = require("../controllers/AuthController");

// const router = express.Router();

// router.post("/login", (req, res) => {
//     res.send("login success");
// });
// router.post("/signup", signupValidation, signup)

// module.exports = router;
