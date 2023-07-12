const { uploader } = require('../../../utilities/singleUploader');

function avatarUpload(req, res, next) {
    const upload = uploader(
        'avatars',
        ['image/jpeg', 'image/jpeg', 'image/jpeg'],
        1000000,
        'Only .jpg, .jpeg or .png format allowed!'
    );

    //call the midleware function
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    avatar: {
                        msg: err.message,
                    },
                },
            });
        } else {
            next();
        }
    });
}

module.exports = avatarUpload;
