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
        fullName,email,hashedPassword
    })

    const token = jwt.sign({
        id:user._id,
    },"pAyqRwsX4TPY0RPcDUwTp0DFKewURCV262ZPPE5wkwll6PsD5pYcuukRuagzUfq8R2iZUV5KUjxBBFQ7fwKlfKY2TLOh2oB189PB1JQTxs3uZ7xu4zx6rhG9blh");

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

const login = ()=>{}

module.exports = {
    registerUser
}