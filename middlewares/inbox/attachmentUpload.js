const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

const allowed_file_types = ['image/jpeg', 'image/jpg', 'image/png'];
const max_file_size = 1000000;
const max_number_of_files = 2;
const error_msg = 'Only .jpg, jpeg, or .png format allowed!';

const UPLOADS_FOLDER = path.join(__dirname, 'public', 'uploads', 'attachments');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName =
            file.originalname
                .replace(fileExt, '')
                .toLowerCase()
                .split(' ')
                .join('-') +
            '-' +
            Date.now();

        cb(null, fileName + fileExt);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
        if (allowed_file_types.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(createError(error_msg));
        }
    },
});

module.exports = upload;
