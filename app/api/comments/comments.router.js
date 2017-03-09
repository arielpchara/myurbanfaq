const express = require('express');
const router = express.Router();

const commentsController = require('./comments.controller');
const userController = require('../user/user.controller');

router.param('/:faqId');

router.get('/:faqId', commentsController.get);
router.post('/:faqId', userController.check, commentsController.create);
router.put('/:faqId/:id', userController.check, commentsController.update);

router.put('/:faqId/approve', userController.check, userController.isAdmin, commentsController.approve);

module.exports = router;