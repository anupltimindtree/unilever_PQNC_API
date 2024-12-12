const utils = require('../../utils/authJwt');
const login = async (value) => {
    const userData = {
        userId:value.dataValues.id,
        userName: value.dataValues.name,
        userEmail: value.dataValues.email
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
