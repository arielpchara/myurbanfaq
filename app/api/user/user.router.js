const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

router.get('/list', controller.get);
router.post('/authenticate', controller.authenticate);

module.exports = router;