const mongoose = require('mongoose');
const sha256 = require('sha256');

var schema = new mongoose.Schema({
    email: String,
    password: String,
    admin: Boolean
});

schema.pre('save', () => {
    this.password = sha256(this.password);
})

module.exports = mongoose.model('User', schema);