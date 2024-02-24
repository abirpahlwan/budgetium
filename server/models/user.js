const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const toJSON = require('./toJSON');

const roles = ['user', 'admin', 'doctor', 'patient'];

const user = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        index: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        match: /^[a-zA-Z\s]+$/,
    },
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        lowercase: true,
        trim: true,
        match: /^[a-zA-Z0-9]+$/,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
        private: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    isEmailVerified: {
        type: Boolean,
        default: true,
    },
    social: {
        facebook: String,
        google: String,
    },
    role: {
        type: String,
        enum: roles,
        default: 'user',
    },
}, {
    timestamps: true,
    collection: 'users'
});

user.plugin(toJSON);

user.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

module.exports = mongoose.model('User', user);