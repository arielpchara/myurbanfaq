const mongoose = require('mongoose');
const sha256 = require('sha256');

var userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    facebook: String
});

userSchema.pre('save', function(next) {
    this.password = sha256(this.password);
    next();
});

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);