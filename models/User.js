const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
},{timestamps:true});

const User = mongoose.model('user', UserSchema);

module.exports = User;