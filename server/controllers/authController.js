const validator = require('validator');
const jwt = require('jsonwebtoken');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const User = require("../models/user");

const generateToken = (username, email) => {
    const payload = {
        sub: username,
        email: email,
        iat: Math.floor(Date.now() / 1000),
    };
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
};

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const jwt = generateToken(user.username, user.email);
        // or
        // const user = new User(req.body);
        // await user.save();

        res.status(200).json({
            success: true,
            message: "User created",
            data: {
                jwt: jwt,
                user: user
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "User not created",
            error: error.message
        });
    }
}

const login = (req, res, next) => {

}

const logout = (req, res, next) => {

}

const refreshToken = (req, res, next) => {

}

const forgotPassword = (req, res, next) => {

}

const resetPassword = (req, res, next) => {

}

module.exports = {register, login, logout, refreshToken, forgotPassword, resetPassword};