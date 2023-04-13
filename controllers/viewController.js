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

    res
        .status(200)
        .render('stocks', {
            phoneNo,
            Sname : 'ICICI BANK',
            Sprice: 875,
            Scap: 610996.4,
            Sopen: 882,
            Svol: 26042745,
            Savg: 879.56
        });
    
});

exports.getStocks = catchAsync(async(req, res, next) => {
    const phoneNo = req.query.phone;

    res
        .status(200)
        .render('stocks', {
            phoneNo,
            Sname : 'ICICI BANK',
            Sprice: 875,
            Scap: 610996.4,
            Sopen: 882,
            Svol: 26042745,
            Savg: 879.56
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