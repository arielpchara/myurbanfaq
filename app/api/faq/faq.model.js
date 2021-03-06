const mongoose = require('mongoose'),
    S = require('string');

var faqSchema = new mongoose.Schema({
    title: String,
    slug: String,
    publish: {
        type: Date,
        default: Date.now
    },
    content: String,
    tags: [String]
});

faqSchema.pre('save', function(next) {
    if (!this.slug) {
        this.slug = S(this.title).slugify().s;
    }
    next();
});

faqSchema.index({ title: 1 }, { unique: true });
faqSchema.index({ title: 'text', content: 'text', tags: 'text' }, {
    weights: {
        tags: 1,
        title: 10,
        content: 20
    }
});

module.exports = mongoose.model('Faq', faqSchema);