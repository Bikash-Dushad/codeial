const express = require('express');

const router = express.Router();

const userController = require('../controller/user_controller');

router.get('/profile', userController.profile);
router.get('/signin', userController.signin);
router.get('/login', userController.login);
router.post('/create', userController.create);
router.post('/createSession', userController.createSession);
module.exports = router;
