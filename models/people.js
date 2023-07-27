const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        mobile: {
            type: Number,
        },
        password: {
            type: String,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
        },
    },
    {
        timestamps: true,
    }
);

const People = mongoose.model('People', peopleSchema);

module.exports = People;
