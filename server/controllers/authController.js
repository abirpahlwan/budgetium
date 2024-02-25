const validator = require('validator');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const authMiddleware = require("../middlewares/authMiddleware");
const userMiddleware = require("../middlewares/userMiddleware");

const User = require("../models/user");

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const jwt = authMiddleware.generateToken(user._id);

        res.status(StatusCodes.OK).json({
            success: true,
            message: ReasonPhrases.CREATED,
            data: {
                jwt: jwt,
                user: user
            }
        });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: ReasonPhrases.BAD_REQUEST,
            error: error.message
        });
    }
}

const login = async (req, res, next) => {
    try {
        const { identifier, password } = req.body;

        let user;
        if (validator.isEmail(identifier)) {
            user = await User.findOne({email: identifier});
        } else if (validator.isMobilePhone(identifier)) {
            user = await User.findOne({phone: identifier});
        } else {
            user = await User.findOne({username: identifier});
        }

        if (!user) {
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: ReasonPhrases.NOT_FOUND,
            });
            return;
        }

        const isMatch = await user.isPasswordMatch(password, user.password);
        if (!isMatch) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: ReasonPhrases.UNAUTHORIZED,
            });
            return;
        }

        const jwt = authMiddleware.generateToken(user._id);

        res.status(StatusCodes.OK).json({
            success: true,
            message: ReasonPhrases.OK,
            data: {
                jwt: jwt,
                user: user
            }
        });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: ReasonPhrases.BAD_REQUEST,
            error: error.message
        });
    }
}

const logout = async (req, res, next) => {

}

const refreshToken = async (req, res, next) => {

}

const forgotPassword = async (req, res, next) => {

}

const resetPassword = async (req, res, next) => {

}

module.exports = {register, login, logout, refreshToken, forgotPassword, resetPassword};