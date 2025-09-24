const express = require("express");
const authController = require("../controllers/auth.controller")

const router = express.Router();

router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);
router.get('/user/logout',authController.logout);
router.post('/user/registerFoodpartener',authController.registerFoodPartner);
router.post('/user/loginFoodpartener',authController.loginFoodPartener);

module.exports = router;