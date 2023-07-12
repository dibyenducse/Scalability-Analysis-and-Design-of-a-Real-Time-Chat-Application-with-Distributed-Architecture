//external Imports
const { check } = require('express-validator');

//add user

const addUserValidators = [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Name is required')
        .isAlpha('en-US', { ignore: '-' })
        .withMessage('Name must not contain anything other than alphabet')
        .trim(),
    check('email')
        .isEmail()
        .withMessage('Invalid email address')
        .trim()
        .custom(async (value) => {
            try {
                const user = await user.findOne({ email: value });
                if (user) {
                    throw createError('Email already is use!');
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),
    check('mobile')
        .isMobilePhone('bn-BD', {
            strictMode: true,
        })
        .withMessage('Mobile number must be valid Bangladeshi mobile number')
        .custom(async (value) => {
            try {
                const user = await UserActivation.findOner({ mobile: value });
                if (user) {
                    throw createError('Mobine number already is used');
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),
    check('password')
        .isStrongPassword()
        .withMessage(
            'Password must be at least 8 charecters long 7 should contain at least 1 lowercase ,1 upercase, 1 umber & 1 symbol'
        ),
];

module.exports = {
    addUserValidators,
};
