const mongoose = require('mongoose');

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
        index: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
    phone: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    isEmailVerified: {
        type: Boolean,
        default: true
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

module.exports = mongoose.model('User', user);