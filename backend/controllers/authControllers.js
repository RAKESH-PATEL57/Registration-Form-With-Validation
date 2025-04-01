import generateToken from "../config/token.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signUp = async(req,res) => {
    try {

        const {name,email,password} = req.body;

        if(!name || !email || !password)
        {
            return res.status(400).json({message:"send all details"});
        }
        
        let existUser = await User.findOne({email});

        if(existUser)
        {
            return res.status(400).json({message:"User already exist"});
        }

        const hassedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            email,
            password:hassedPassword
        });

        let token;
        
        try {
          token =  generateToken(user._id)
            
        } catch (error) {
            console.log(error); 
        }

        res.cookie("token", token, {
            httpOnly:true, // prevent javascript access
            secure:process.env.NODE_ENVIRONMENT == "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });

        return res.status(201).json(
            {
                user:{
                    name,
                    email
                }
            }
        )
        
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;

        let existUser = await User.findOne({email});

        if(!existUser)
        {
            return res.status(400).json({message:"user does not exist"})
        }

        let match =await bcrypt.compare(password, existUser.password)

        if(!match)
        {
            return res.status(400).json({message: "Incorrect Password"});
        }

        let token;
        try {
          token =  generateToken(existUser._id)
            
        } catch (error) {
            console.log(error);
        }

        res.cookie("token", token, {
            httpOnly:true, // prevent javascript access
            secure:process.env.NODE_ENVIRONMENT == "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });

        return res.status(201).json(
            {
                user:{
                    name:existUser.name,
                    email:existUser.email
                }
            }
        )

    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}

export const logout = async (req,res) => {
    try {
        res.clearCookie("token");
       return res.status(200).json({message: "logout successfully"})
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}