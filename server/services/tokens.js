const jwt = require("jsonwebtoken");
const UsersTokens = require("../models/UsersTokens");
const secretKey = process.env.JWT_SECRET_KEY;
const secretRefreshKey = process.env.JWT_SECRET_REFRESH_KEY;


module.exports.generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, secretKey, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, secretRefreshKey, { expiresIn: '30d' });
    return {
        accessToken,
        refreshToken
    }
};

module.exports.saveToken = async (userId, refreshToken) => {
    const tokenData = await UsersTokens.findOne({
        where: {
            userId: userId,
            deletedAt: null
        }
    });
    if (tokenData) {
        tokenData.token = refreshToken;
        return tokenData.save();
    }

    const token = await UsersTokens.create({
        userId,
        token: refreshToken
    });
    return token;
};

module.exports.validateAccessToken  = (token) => {
    try {
        const userData = jwt.verify(token, secretKey);
        return userData;
    }
    catch (error) {
        return null;
    }
}

module.exports.validateRefreshToken  = (token) => {
    try {
        const userData = jwt.verify(token, secretRefreshKey);
        return userData;
    }
    catch (error) {
        return null;
    }
}