const validator = require('validator');
const jwt = require('jsonwebtoken');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const User = require("../models/user");

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        // await user.save();

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