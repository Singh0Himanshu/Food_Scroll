const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const foodcontroller = require('../controllers/food.controller')
const multer = require('multer')

const router = express.Router()

const upload = multer({
    storage:multer.memoryStorage(),
})

//routes for food
router.post('/createfood',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodcontroller.createFood)
router.get('/allfood',authMiddleware.authUserMiddleware,foodcontroller.getFoodItems)

module.exports = router;