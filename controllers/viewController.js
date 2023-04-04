const catchAsync = require('../utils/catchAsync');

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
    res
        .status(200)
        .render('stocks');
});

exports.getPricingInfo = catchAsync(async(req, res, next) => {
    res
        .status(200)
        .render('pricing');
});