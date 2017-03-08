const mongoose = require('mongoose');
const sha256 = require('sha256');

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    admin: Boolean
});

userSchema.pre('save', function(next) {
    this.password = sha256(this.password);
    next();
})

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);