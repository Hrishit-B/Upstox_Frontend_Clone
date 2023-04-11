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

exports.signup = catchAsync(async (req, res) => {
    res
        .status(200)
        .render('createAcc');
})

exports.getStockInfo = catchAsync(async(req, res, next) => {
    const stocks = await Stock.find();
    console.log(stocks);

    const newUser = await User.create({phone: req.body.phone});

    if(newUser){
        res
            .status(200)
            .render('stocks', {
                stocks
            });
    }
});

exports.login = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('login');
});

exports.getPricingInfo = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('pricing');
});

exports.userLogin = catchAsync(async (req, res, next) => {
    const userNum = req.query.phone;

    const user = await User.findOne({phoneNo: userNum});

    res
        .status(200)
        .render('stocks');

    // if(user){
    // }
    // else{
    //     res
    //         .status(200)
    //         .render('login');
    // }
});