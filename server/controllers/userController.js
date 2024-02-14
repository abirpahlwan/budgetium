const mongoose = require('mongoose');
const Expense = require('../models/user')
const User = require("../models/user");


// Get a single user
const login = async (req, res) => {
    const user = await User.findOne({
        name: req.body.name,
        password: req.body.password
    });

    if(!user){
        res.status(400).json({
            success: false,
            error: 'Invalid credentials'
        });
        return;
    }

    res.status(200).json({
        success: true,
        data: user
    });
}


// Create a new user
const register = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = {login, register};