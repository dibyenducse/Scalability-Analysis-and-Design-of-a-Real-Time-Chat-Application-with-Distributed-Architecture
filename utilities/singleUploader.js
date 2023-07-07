const multer = require('multer');

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
) {
    //file upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

    //define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
    },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const filename = file.originalname
                .replace(fileExt, "")
                .toLowerCase()
                .split("")
                .join("-") + "-" + Date.now();
            cb(null, filename + fileExt)
        })
 return upload;
}
    

module.exports = uploader;
