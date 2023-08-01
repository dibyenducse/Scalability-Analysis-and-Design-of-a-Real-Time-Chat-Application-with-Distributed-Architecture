//external import
const express = require('express');
const multer = require('multer');
//internal import
const {
    getUsers,
    addUser,
    removeUser,
} = require('../controller/usersController');
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
const upload = multer();
//add user
router.post(
    '/',
    upload.none(),
    function (req, res, next) {
        console.log(req.body);
        res.status(200);
        next();
    },
    addUserValidators,
    addUserValidationHandler,
    addUser
);

//remove user
router.delete('/:id', removeUser);

module.exports = router;

// avatarUpload,
// addUserValidators,
// addUserValidationHandler,
// addUser
