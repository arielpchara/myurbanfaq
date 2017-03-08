const express = require('express');
const router = express.Router();

const userController = require('./user.controller');

router.post('/', userController.check, userController.isAdmin, userController.create);
router.get('/:id', userController.check, userController.isAdmin, userController.get);
router.put('/:id', userController.check, userController.isAdmin, userController.update);

router.post('/authenticate', userController.authenticate);

router.get('/check', userController.check, userController.sessionUser);
router.get('/check/admin', userController.check, userController.isAdmin, userController.sessionUser);


module.exports = router;