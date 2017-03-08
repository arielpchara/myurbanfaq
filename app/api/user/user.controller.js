const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const responser = require('../responser');
const User = require('./user.model');


exports.get = (req, res) => {
    User.findOne({
        _id: req.params.id
    }).then(user => {
        return res.json(user);
    }).catch(err => {
        console.error(err);
        return res.status(500).json(err);
    });
};

exports.create = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, saved) => {
        if (err) throw err;
        res.json(saved);
    })
}

exports.update = (req, res) => {
    User.findById(
        req.params.id || req.body.id,
        (err, user) => {
            if (err) throw err;
            if (!user) {
                return {
                    sucess: false,
                    message: 'Not found'
                }
            }
            user = Object.assign(user, req.body);
            user.save().then(() => res.json(user));
        }
    ).catch(err => {
        throw err;
    });
};

function authenticateErrorHandler(status) {
    return {
        success: false,
        message: 'error',
        status
    };
}

function authenticateSuccessHandler(token) {
    return {
        success: true,
        token
    };
}

function authenticateHandler(password, res) {
    return (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) return res.json(authenticateErrorHandler(1));
        if (user.password !== sha256(password)) {
            return res.json(authenticateErrorHandler(2));
        }
        return res.json(authenticateSuccessHandler(
            jwt.sign(
                _.pick(user, ['_id']),
                process.env.SECRET, {
                    expiresIn: "24h"
                }
            )
        ));
    };
}

exports.authenticate = (req, res) => {
    User.findOne({
        email: req.body.email
    }, authenticateHandler(req.body.password, res));
};

function notAuthorizedHandle(status) {
    return {
        success: false,
        message: 'Access not authorized',
        status: status
    }
}


exports.check = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                return res.status(403).json(notAuthorizedHandle(1));
            } else {
                // if everything is good, save to request for use in other routes
                User.findById(decoded, (err, user) => {
                    if (user) {
                        req.user = user;
                        next();
                    } else {
                        res.status(403).json(notAuthorizedHandle(2))
                    }
                })
            }
        });

    } else {
        return res.status(403).send(notAuthorizedHandle(3));
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user.admin === true) {
        next();
    } else {
        res.status(403).json(notAuthorizedHandle(4))
    }
};

exports.sessionUser = (req, res) => {
    res.json(req.user);
}