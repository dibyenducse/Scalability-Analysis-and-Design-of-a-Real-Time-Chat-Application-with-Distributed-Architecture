//external import
const express = require('express');
//internal import
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/common/users/avatarUpload');

const router = express.Router();

//Users page
router.get('/', decorateHtmlResponse('Users'), getUsers);

//add user
router.post('/', avatarUpload);

module.exports = router;
