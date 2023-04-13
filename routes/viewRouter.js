const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getOverView);

router.get('/about', viewController.aboutPage);

router.get('/commodity', viewController.getCommodityInfo);

router.get('/get-pricing-info', viewController.getPricingInfo);

router
    .get('/stocks', viewController.getStocks)
    .post('/stocks', viewController.getStocks2);

router.get('/login', viewController.login);

router.get('/signup', viewController.signup);
module.exports = router;