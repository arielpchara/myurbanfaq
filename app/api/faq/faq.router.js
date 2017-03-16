const express = require('express');
const router = express.Router();

const faqController = require('./faq.controller');
const userController = require('../user/user.controller');

// Return all FAQs
router.get('/', faqController.list);
// Return published FAQs
router.get('/published', faqController.published);
// Return all TAGs
router.get('/tags', faqController.tags);

// Create new FAQ
router.post('/', userController.check, faqController.create);
// Return FAQs by ID
router.get('/:id', faqController.get);
// Update FAQ
router.put('/:id', userController.check, faqController.update);


module.exports = router;