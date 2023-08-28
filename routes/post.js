const express = require('express');
const router = express.Router();

const postController = require('../controller/post_controller');

router.get('/userpost', postController.post);

module.exports = router;