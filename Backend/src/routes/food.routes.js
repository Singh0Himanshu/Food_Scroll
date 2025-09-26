const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const foodcontroller = require('../controllers/food.controller')
const multer = require('multer')

const router = express.Router()

const upload = multer({
    storage:multer.memoryStorage(),
})

//routes for food
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodcontroller.createFood)

module.exports = router;