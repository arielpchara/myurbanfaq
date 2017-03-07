const sha256 = require('sha256');
const jwt = require('jsonwebtoken');

const responser = require('../responser');
const User = require('./user.model');


exports.list = (req, res) => {
    User.find({}, function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.json(responser(req, {
            list: data
        }));
    });
}

function authenticateErrorHandler() {
    return {
        success: false,
        message: 'error'
    }
}

function authenticateSuccessHandler(token) {
    return {
        success: true,
        message: 'Enjoy your token!',
        token: token
    }
}

function authenticateHandler(password, res) {
    return (err, user) => {
        if (err) {
            throw err;
        }
        if (!user || user.password !== sha256(password) || !user.admin) {
            return res.json(authenticateErrorHandler());
        }
        return res.json(authenticateSuccessHandler(
            jwt.sign(
                user,
                process.env.SECRET, {
                    expiresIn: "24h"
                }
            )
        ));
    }
}

exports.authenticate = (req, res) => {
    console.log(req.body);
    User.findOne({
        email: req.body.email
    }, authenticateHandler(req.body.password, res));
}


exports.check = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}