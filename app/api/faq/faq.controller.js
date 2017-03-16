const handler = require('../handler'),
    faqService = require('./faq.service'),
    Faq = require('./faq.model');

exports.list = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    const q = req.query.q;
    (function() {
        if (q) return faqService.filter(q);
        return faqService.list();
    }()).then(successHandle)
        .catch(errorHandle);
};

exports.get = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.getById(req.params.id)
        .then(successHandle)
        .catch(errorHandle);
};

exports.tags = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.getAllTags()
        .then(successHandle)
        .catch(errorHandle);
};

exports.published = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.published()
        .then(successHandle)
        .catch(errorHandle);
};

exports.create = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);

    if (typeof req.body.tags === 'string') {
        req.body.tags = req.body.tags.trim().split(' ');
    }

    faqService.create(req.body)
        .then(successHandle)
        .catch(errorHandle);
};

exports.update = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.update(req.params.id, req.body)
        .then(successHandle)
        .catch(errorHandle);
};