const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartener.model');


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

async function registerFoodPartner(req,res){
    const { name, email, password, phone, address, contactName } = req.body;

    const isAlreadyExists = await foodPartnerModel.findOne({email})

    if(isAlreadyExists){
        return res.status(400).json({
            message:"Food Partener account already exists"
        })
    }

    const hashedPassword =await bcrypt.hash(password,10);

    const foodPartner =await foodPartnerModel.create({
        name, 
        email, 
        password:hashedPassword,
        phone, 
        address, 
        contactName
    })

    console.log(foodPartner)

    const token = jwt.sign({
        id:foodPartner._id
    },process.env.JWT_SECRET_KEY);

    res.cookie("foodToken",token);

    res.status(200).json({
        message:"User registered successfully",
        user:{
            _id:foodPartner._id,
            email:foodPartner.email,
            phone:foodPartner.phone,
            address:foodPartner.address,
            contactName:foodPartner.contactName
        }
    })
}

async function loginFoodPartener(req,res){
    const {email,password} = req.body;

    const isfoodpartenerAvailable = await foodPartnerModel.findOne({email});

    if(!isfoodpartenerAvailable){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,isfoodpartenerAvailable.password)

    if(!isPasswordValid){
        res.status(400).json({
            message:"Wrong credential"
        })
    }

    const token = await jwt.sign({
        id:isfoodpartenerAvailable._id
    },process.env.JWT_SECRET_KEY);

    res.cookie("foodToken",token);

    res.status(200).json({
        message:"Logged in successfully",
        user:{
            _id:isfoodpartenerAvailable._id,
            email:isfoodpartenerAvailable.email,
            phone:isfoodpartenerAvailable.phone,
            address:isfoodpartenerAvailable.address,
            contactName:isfoodpartenerAvailable.contactName
        }
    })

}

async function logoutFoodPartener(req,res){
    res.clearCookie(foodToken)

    res.status(200).json({
        message:"Successfully logged out"
    })
}

module.exports = {
    registerUser,loginUser,logout,registerFoodPartner,loginFoodPartener
}