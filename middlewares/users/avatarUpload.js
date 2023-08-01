const { uploader } = require('../../utilities/singleUploader');

function avatarUpload(req, res, next) {
    const upload = uploader(
        'avatars',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        'Only .jpeg, .jpg or .png format allowed!'
    );

    // Call the middleware function
    upload.single()(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // Multer error occurred
            res.status(500).json({
                errors: {
                    avatar: {
                        msg: err.message,
                    },
                },
            });
        } else if (err) {
            // Other errors occurred during file upload
            res.status(500).json({
                errors: {
                    avatar: {
                        msg: 'File upload failed.',
                    },
                },
            });
        } else {
            // File upload success
            console.log(req.body);
            next();
        }
    });
}

module.exports = avatarUpload;
