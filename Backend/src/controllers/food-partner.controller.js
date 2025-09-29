const foodPartnerModel = require('../models/foodpartener.model');
const foodModel = require('../models/food.model')

async function getFoodPartnerById(req,res){

    const foodPartnerid = req.params.id;
    const foodpartner = await foodPartnerModel.findById(foodPartnerid);
    const foodItemsByFoodPartner = await foodModel.find({foodPartner: foodPartnerid})

    if(!foodpartner){
        return res.status(400).json({
            message:"Food Partner not found"
        })
    }

    res.status(200).json({
        message:"Food Partner found",
        foodpartner :{
            ...foodpartner.toObject(),
            foodItems: foodItemsByFoodPartner
        }
    })
}

module.exports = {
    getFoodPartnerById
}