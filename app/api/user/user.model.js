const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', schema);