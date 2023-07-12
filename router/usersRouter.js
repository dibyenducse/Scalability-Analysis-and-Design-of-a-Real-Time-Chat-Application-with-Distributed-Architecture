//external import
const express = require('express');
//internal import
const { getUsers, addUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/common/users/avatarUpload');
const {
    addUserValidators,
    addUserValidationHandler,
} = require('../middlewares/common/users/addUserValidator');

const router = express.Router();

//Users page
router.get('/', decorateHtmlResponse('Users'), getUsers);

//add user
router.post(
    '/',
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
);

module.exports = router;
