//external import
const express = require('express');
//internal import
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/common/users/avatarUpload');
const {
    addUserValidators,
} = require('../middlewares/common/users/addUserValidator');

const router = express.Router();

//Users page
router.get('/', decorateHtmlResponse('Users'), getUsers);

//add user
router.post('/', avatarUpload, addUserValidators);

module.exports = router;
