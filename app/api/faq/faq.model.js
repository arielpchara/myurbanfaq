const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    publish: Date,
    content: String
});

module.exports = mongoose.model('Faq', schema);