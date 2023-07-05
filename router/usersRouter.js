//external import
const express = require('express');
//internal import
const { getUsers } = require('../controller/usersController');

const router = express.Router();

//login page
router.get('/', getUsers);

module.exports = router;
