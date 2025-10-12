// models/User.js

const mongoose = require('mongoose');

// Schema (structure of your documents)
const loginSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Model
const Loginmodel = mongoose.model('login', loginSchema, "Login");

module.exports = Loginmodel;
