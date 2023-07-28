//external import
const express = require('express');
//internal import
const { getUsers, addUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
    addUserValidators,
    addUserValidationHandler,
} = require('../middlewares/users/userValidators');

//create express router
const router = express.Router();

//Users page
router.get('/', decorateHtmlResponse('Users'), getUsers);

//add user
router.post('/', avatarUpload, addUser);

module.exports = router;

// avatarUpload,
// addUserValidators,
// addUserValidationHandler,
// addUser
