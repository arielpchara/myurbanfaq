const handler = require('../handler'),
    faqService = require('./faq.service'),
    Faq = require('./faq.model');

exports.list = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.list()
        .then(successHandle)
        .catch(errorHandle);
};

exports.get = (req, res) => {
    const { successHandle, errorHandle } = handler(req, res);
    faqService.getById(req.params.id)
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