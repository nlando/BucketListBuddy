const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// router.get('/', userController.index);

router.get('/new', userController.newUser);

router.get('/:id', userController.profile);

router.post('/', userController.create);

module.exports = router;