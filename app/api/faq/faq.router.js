const express = require('express');
const router = express.Router();

const faqController = require('./faq.controller');
const userController = require('../user/user.controller');

router.get('/', faqController.list);
router.get('/all', userController.check, faqController.all);
router.put('/:id', userController.check, faqController.update);

module.exports = router;