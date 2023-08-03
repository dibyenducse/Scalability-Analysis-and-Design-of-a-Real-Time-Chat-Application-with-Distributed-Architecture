//external import
const express = require('express');
//internal import
const { getLogin, login, logout } = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const {
    doLoginValidationHandler,
    doLoginValidators,
} = require('../middlewares/login/loginValidators');
const router = express.Router();
const { redirectLoggedIn } = require('../middlewares/common/checkLogin');

//set a page title
const page_title = 'Login';

//login page
router.get('/', decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

//process login
router.post(
    '/',
    decorateHtmlResponse(page_title),
    doLoginValidators,
    doLoginValidationHandler,
    login
);

//process login
router.delete('/', logout);

module.exports = router;
