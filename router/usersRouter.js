//external import
const express = require('express');
//internal import
const { checkLogin, requireRole } = require('../middlewares/common/checkLogin');
const {
    getUsers,
    addUser,
    removeUser,
} = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
//const avatarUpload = require('../middlewares/users/avatarUpload');
const fieldUpload = require('../middlewares/users/fieldsUpload');
const {
    addUserValidators,
    addUserValidationHandler,
} = require('../middlewares/users/userValidators');

//create express router
const router = express.Router();

//Users page
router.get(
    '/',
    decorateHtmlResponse('Users'),
    checkLogin,
    requireRole(['admin']),
    getUsers
);
//add user
router.post('/', checkLogin, requireRole(['admin']), fieldUpload, addUser);

//remove user
router.delete('/:id', checkLogin, requireRole(['admin']), removeUser);

module.exports = router;

// avatarUpload,
// addUserValidators,
// addUserValidationHandler,
// addUser
