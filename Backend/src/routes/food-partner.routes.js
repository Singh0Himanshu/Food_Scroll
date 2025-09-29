const express = require('express');
const { getFoodPartnerById } = require('../controllers/food-partner.controller');
const { authUserMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:id',authUserMiddleware,getFoodPartnerById)

module.exports = router;