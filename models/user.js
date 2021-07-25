//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)