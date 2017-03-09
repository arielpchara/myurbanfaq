const Faq = require('./faq.model');


exports.list = (filter = {}) => {
    return Faq.find(filter);
};

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