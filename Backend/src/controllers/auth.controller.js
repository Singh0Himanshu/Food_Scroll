const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



async function registerUser(req,res){
    const {fullName,email,password} = req.body;

    const isuserAlreadyExists = await userModel.findOne({
        email
    }) 

    if(isuserAlreadyExists){
        return res.status(400).json({
            message:"User already Exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName,email,
        password:hashedPassword
    })

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY);

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })
}

async function loginUser(req,res){
    const {email,password} = req.body;

    const user = await userModel.findOne({email});

    console.log(user)

    if(!user){
        return res.status(400).json({
            error:"wrong email or password"
        })
    }

    console.log(password,user.password)
    const isPasswordValid = await bcrypt.compare(password,user.password)
    

    if(!isPasswordValid){
        return res.status(400).json({
            error:"wrong email or password"
        })
    }

    const token = jwt.sign({
        id : user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(200).json({
        message:"user logged in successfully",
        user:user,
    })

}

async function logout(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"user logged out successfully"
    })
}

module.exports = {
    registerUser,loginUser,logout
}