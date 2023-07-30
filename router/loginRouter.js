//external import
const express = require('express');
//internal import
const { getLogin, login } = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

//login page
router.get('/', decorateHtmlResponse('Login'), getLogin);

//process login
router.post('/', login);

module.exports = router;
