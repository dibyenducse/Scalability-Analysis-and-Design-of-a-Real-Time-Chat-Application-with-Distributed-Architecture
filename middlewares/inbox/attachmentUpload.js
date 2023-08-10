const uploader = require('../../utilities/multipleUploader');

function attachmentUpload(req, res, next) {
    const upload = uploader(
        'attachments',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        2,
        'Only .jpg, jpeg or .png format allowed!'
    );

    // call the middleware function
}

module.exports = attachmentUpload;
