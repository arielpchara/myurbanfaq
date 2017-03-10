const mongoose = require('mongoose'),
    S = require('string');

var faqSchema = new mongoose.Schema({
    title: String,
    slug: String,
    publish: {
        type: Date,
        default: Date.now
    },
    content: String
});

faqSchema.pre('save', function(next) {
    if (!this.slug) {
        this.slug = S(this.title).slugify().s;
    }
    next();
});

faqSchema.index({ title: 1 }, { unique: true });
faqSchema.index({ "content": "text" });

module.exports = mongoose.model('Faq', faqSchema);