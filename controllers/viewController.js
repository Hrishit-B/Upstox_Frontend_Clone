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

exports.createAccount = catchAsync(async(req, res, next) => {

    const newUser = await User.create({phone: req.body.phone});

    if(newUser){
        res
            .status(200)
            .render('stocks');
    }
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
    const userNum = req.query.phone;

    const user = await User.findOne({phone: userNum});

    if(user){
        res
            .status(200)
            .render('stocks');
    }
    // else{
    //     res
    //         .status(200)
    //         .render('login');
    // }
});