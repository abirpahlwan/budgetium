const User = require("../models/user");
const jwt = require('jsonwebtoken');

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

    const token = jwt.sign({
        name: user.name,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });

    res.status(200).json({
        success: true,
        data: {
            jwt: token,
            user: {
                name: user.name,
                email: user.email
            }
        }
    });
}

// Create a new user
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

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