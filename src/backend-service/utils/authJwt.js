const jwt = require('jsonwebtoken');
require('dotenv').config();


const getAccessToken = (body) => {
    const accessToken = jwt.sign(body, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY_DAY,
    });
    return accessToken;
};

module.exports = {
    getAccessToken
}