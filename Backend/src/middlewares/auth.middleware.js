const foodPartnerModel = require('../models/foodpartener.model')
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req,res,next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            message:"Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const foodPartner = await foodPartnerModel.findById(decoded.id);
        req.foodPartner = foodPartner;
        next()

    } catch (error) {
        return res.status(400).json({
            message:"Inavlid token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware
}