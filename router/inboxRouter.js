//external import
const express = require('express');
//internal import
const {
    getInbox,
    searchUser,
    addConversation,
    getMessages,
    sendMessage,
} = require('../controller/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { checkLogin } = require('../middlewares/common/checkLogin');
const attachmentUpload = require('../middlewares/inbox/attachmentUpload');
const router = express.Router();

// //Inbox page
router.get('/', decorateHtmlResponse('Inbox'), checkLogin, getInbox);

// //search user for coversation
router.post('/search', checkLogin, searchUser);

// //add conversation
// router.post(
//     '/conversation',
//     checkLogin,
//     attachmentUpload.any(),
//     addConversation
// );

//add coversation
router.post('/conversation', checkLogin, addConversation);
// //get messages of a conversation
router.get('/messages/:conversation_id', checkLogin, getMessages);

// //send message
router.post('/message', checkLogin, sendMessage);

module.exports = router;
