const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getOverView);

router.get('/about', viewController.aboutPage);

router.get('/commodity', viewController.getCommodityInfo);

router.get('/create-your-account', viewController.createAccount);

router.get('/login', viewController.login);

router.get('/buy-stocks', viewController.getStockInfo);

router.get('/get-pricing-info', viewController.getPricingInfo);

module.exports = router;