const responser = require('../responser');
const Faq = require('./faq.model');


exports.list = (req, res) => {
    Faq.find({
        publish: {
            $lte: new Date()
        }
    }, function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.json(responser(req, {
            list: data
        }));
    });
}


exports.all = (req, res) => {
    Faq.find({}, function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.json(responser(req, {
            list: data
        }));
    });
}

exports.create = (req, res) => {
    let newFaw = new Faq(req.body);
    newFaq.save((err, saved) => {
        if (err) throw err;
        req.json(saved);
    })
}

exports.update = (req, res) => {
    Faq.findById(
        req.params.id || req.body.id,
        (err, faq) => {
            if (err) throw err;
            if (!faq) {
                return {
                    sucess: false,
                    message: 'Not found'
                }
            }
            faq = Object.assign(faq, req.body);
            faq.save((err) => {
                if (err) throw err;
                res.json(faq);
            })
        }
    );
};