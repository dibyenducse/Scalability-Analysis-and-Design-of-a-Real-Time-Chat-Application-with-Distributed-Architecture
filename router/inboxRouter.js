//external import
const express = require('express');
//internal import
const { getInbox } = require('../controller/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { checkLogin } = require('../middlewares/common/checkLogin');
const { checkExact } = require('express-validator');

const router = express.Router();

//login page
router.get('/', decorateHtmlResponse('Inbox'), checkLogin, getInbox);

module.exports = router;
