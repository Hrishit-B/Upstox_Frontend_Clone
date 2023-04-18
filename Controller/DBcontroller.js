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


exports.getPricingInfo = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('pricing');
});

exports.getStocks2 = catchAsync(async(req, res, next) => {
    const phoneNo = req.body.phone;

    const Sname = await Stock.find({Sname});
    const Sprice = await Stock.find({Sprice});
    const Scap = await Stock.find({Scap});
    const Svol = await Stock.find({Svol});
    const Savg = await Stock.find({Savg});
    const Sopen = await Stock.find({Sopen});

    res
        .status(200)
        .render('stocks', {
            Sname,
            Scap,
            Sprice,
            Sopen,
            Svol,
            Savg
        });
    
});

exports.getStocks = catchAsync(async(req, res, next) => {
    const phoneNo = req.query.phone;

    const Sname = await Stock.find({Sname});
    const Sprice = await Stock.find({Sprice});
    const Scap = await Stock.find({Scap});
    const Svol = await Stock.find({Svol});
    const Savg = await Stock.find({Savg});
    const Sopen = await Stock.find({Sopen});

    res
        .status(200)
        .render('stocks', {
            Sname,
            Scap,
            Sprice,
            Sopen,
            Svol,
            Savg
        });
    
});

exports.login = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('login');
});

exports.signup = catchAsync(async(req, res, next) => {    
    res
        .status(200)
        .render('createAcc');
});

exports.finalIndex = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('newIndex');
});