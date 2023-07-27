// external imports
const bcrypt = require('bcrypt');
const { unlink } = require('fs');
const path = require('path');

// internal imports
const User = require('../models/People');

// get users page
async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.render('users', {
            users: users,
        });
    } catch (err) {
        next(err);
    }
}

/// add users
async function addUser(req, res, next) {
    let newUser;
    console.log(req.body);

    try {
        // Generate a salt for hashing the password
        const saltRounds = 10;
        const myPlaintextPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(
            myPlaintextPassword,
            saltRounds
        );

        if (req.files && req.files.length > 0) {
            newUser = new User({
                ...req.body,
                avatar: req.files[0].filename,
                password: hashedPassword,
            });
        } else {
            newUser = new User({
                ...req.body,
                password: hashedPassword,
            });
        }

        // Save user or send error
        const result = await newUser.save();
        //console.log(result);

        res.status(200).json({
            message: 'User was added successfully',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Unknown error occurred',
                },
            },
        });
    }
}

module.exports = {
    addUser,
    getUsers,
};
