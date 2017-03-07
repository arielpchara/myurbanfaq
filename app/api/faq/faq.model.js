const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    publish: {
        type: Date,
        default: Date.now
    },
    content: String
});

module.exports = mongoose.model('Faq', schema);