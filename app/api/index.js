// load modules
const express = require('express');
const path = require('path');

require('./conn.db');



const responser = require('./responser');

const router = express.Router();

router.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
});

router.use('/v1/faq', require('./faq/faq.router'));

router.use('/v1/user', require('./user/user.router'));

router.get('/v1', (req, res) => {
    res.json(responser(req, {
        title: 'test',
        routes: [{
            path: '/faqs',
            description: 'List answars, paginates'
        }]
    }));
});



module.exports = router;