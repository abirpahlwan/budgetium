const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name:       {type: String, required: true, unique: true},
    email:      {type: String, required: true, unique: true},
    password:   {type: String, required: true},
}, {
    timestamps: true,
    collection: 'users'
});

module.exports = mongoose.model('User', user);