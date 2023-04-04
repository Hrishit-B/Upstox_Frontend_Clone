const catchAsync = require('../utils/catchAsync');
const Stock = require('../models/stockModel');
const User = require('../models/userModel');

exports.getOverView = catchAsync(async(req, res, next) => {

    res
        .status(200)
        .render('index');
});

exports.aboutPage = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('about');
});

exports.getCommodityInfo = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('comms');
});

exports.createAccount = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('createAcc');
});

exports.login = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('login');
});

exports.getStockInfo = catchAsync(async(req, res, next) => {
    const stock = await Stock.find();

    res
        .status(200)
        .render('stocks', {
            stock
        });
});

exports.getPricingInfo = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('pricing');
});

exports.newAccDetails = catchAsync(async(req, res, next) => {
    const num = req.body.phone;

    await User.create({phoneNo: num});
    
    res
        .status(200)
        .render('stocks');
});

exports.userLogin = catchAsync(async (req, res, next) => {
    const userNum = req.body.phone;

    const user = await User.findOne({phone: userNum});

    if(user){
        res
            .status(200)
            .render('pricing');
    }
    else{
        res
            .status(200)
            .render('login');
    }
});