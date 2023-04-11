const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getOverView);

router.get('/about', viewController.aboutPage);

router.get('/commodity', viewController.getCommodityInfo);

router.get('/signup', viewController.signup);

router.get('/login', viewController.login);

router.post('/create-your-account', viewController.getStockInfo);

router.get('/get-pricing-info', viewController.getPricingInfo);

router.post('/login', viewController.userLogin);

module.exports = router;