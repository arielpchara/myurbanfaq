const mongoose = require('mongoose');
const Faq = require('./faq.model');


exports.list = () => {
    return Faq.find();
};

exports.filter = (text = {}) => {
    const filter = {
        $text: {
            $search: text
        }
    };
    return Faq.find(filter, { score: { $meta: 'textScore' } }).sort({ date: 1 });
}

exports.published = () => {
    return exports.list({
        publish: {
            $lte: new Date()
        }
    });
};

exports.getById = (_id) => {
    return Faq.findById(_id)
        .then(doc => doc.toJSON());
};

exports.create = (data) => {
    const newFaq = new Faq(data);
    return newFaq.save();
};


exports.update = (id, data) => {
    return Faq.findById(id).then(faq => {
        if (!faq) throw { 'message': 'Not found' };
        faq = Object.assign(faq, data);
        return faq.save();
    });
};

exports.getAllTags = () => {
    return Faq.aggregate([
        { $unwind: '$tags' },
        {
            $group: {
                _id: '$tags',
                count: { $sum: 1 }
            }
        },
        { $sort: { 'count': -1 } }
    ]);
}