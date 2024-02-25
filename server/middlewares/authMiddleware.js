const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const payload = {
        sub: id,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
};

const verifyToken = async (accessToken) => {
    try {
        const {sub, iat, exp} = await jwt.verify(accessToken, process.env.JWT_SECRET);
        return {
            sub: sub,
            iat: iat,
            exp: exp
        };
    } catch (err) {
        return false;
    }
};

// module.exports = {generatePassword, generateToken, validatePassword, refreshToken, verifyRefreshToken, verifyJWT};
module.exports = {generateToken};