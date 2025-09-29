const foodPartnerModel = require('../models/foodpartener.model');

async function getFoodPartnerById(req,res){

    const foodPartnerid = req.params.id;
    const foodpartner = await foodPartnerModel.findById(foodPartnerid);

    if(!foodpartner){
        return res.status(400).json({
            message:"Food Partner not found"
        })
    }

    res.status(200).json({
        message:"Food Partner found",
        foodpartner
    })
}

module.exports = {
    getFoodPartnerById
}