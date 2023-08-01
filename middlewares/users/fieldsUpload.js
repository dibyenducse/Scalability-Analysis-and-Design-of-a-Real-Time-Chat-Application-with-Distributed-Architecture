const multer = require('multer');
const upload = multer();
function fieldUpload(req, res, next) {
    upload.none()(req, res, (err) => {
        console.log(req.body);
        next();
    });
}
module.exports = fieldUpload;
