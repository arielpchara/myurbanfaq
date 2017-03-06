const express = require('express');
const router = express.Router();

const faqController = require('./faq.controller');
const userController = require('../user/user.controller');

router.get('/', faqController.list);
router.post('/', userController.check, faqController.create);
router.put('/:id', userController.check, faqController.update);

router.get('/all', userController.check, faqController.all);

module.exports = router;