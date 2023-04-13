const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phoneNo: Number,
    Sname: String,
    Sprice: Number
})

const User = mongoose.model('User', userSchema);

module.exports = User;