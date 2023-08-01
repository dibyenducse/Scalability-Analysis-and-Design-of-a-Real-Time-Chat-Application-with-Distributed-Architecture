const upload = require('multer');

const { uploader } = require('../../utilities/singleUploader');
const multer = require('multer');

function fieldUpload(req, res, next) {
    const upload = multer();
    upload.none(),
        function (req, res, next) {
            console.log(req.body);
        };
}
module.exports = fieldUpload;
