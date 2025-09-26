const express = require("express");
const authController = require("../controllers/auth.controller")

const router = express.Router();

//api for user 
router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);
router.get('/user/logout',authController.logout);

//api for food-Partener
router.post('/user/registerFoodpartener',authController.registerFoodPartner);
router.post('/user/loginFoodpartener',authController.loginFoodPartener);
router.get('/user/logoutFoodpartener',authController.logoutFoodPartener);

module.exports = router;