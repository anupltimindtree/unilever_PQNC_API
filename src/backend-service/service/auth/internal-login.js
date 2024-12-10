const utils = require('../../utils/authJwt');
const login = async (value) => {

    const userData = {
        userName: value.username
    }

    const token  = utils.getAccessToken(userData)

    return {
        userData,
        token: token,
    }
}
module.exports = {
    login
};
