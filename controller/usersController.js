//get users page
function getUsers(req, res, next) {
    res.render('users');
}

//add users
async function addUser(req, res, next) {
    let newuser;
    const hashedpassword = await bcrypt.hash(req.body.password, 10);

    if (req.files && req.files.length > 0) {
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedpassword,
        });
    } else {
        newuser = new User({
            ...req.body,
            password: hashedpassword,
        });
    }
    try {
        const result = await newUser.save();
        res.status(200).json({
            message: 'User was added successfully',
        });
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Unknown error occured',
                },
            },
        });
    }
}

module.exports = {
    addUser,
    getUsers,
};
