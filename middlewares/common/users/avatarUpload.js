function avatarUpload(req, res, next) {
    const upload = uploader(
        'avatars',
        ['image/jpeg', 'image/jpeg', 'image/jpeg'],
        1000000,
        'Only .jpg, .jpeg or .png format allowed!'
    );
}

module.exports = avatarUpload;
