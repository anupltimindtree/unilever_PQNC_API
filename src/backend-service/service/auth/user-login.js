const utils = require('../../utils/authJwt');
const login = async (value) => {
    const userData = {
        userId:value.data.dataValues.id,
        userEmail: value.data.dataValues.email__sys
    }
    const token  = utils.getAccessToken(userData)
    return {
        token: token
    }
}
module.exports = {
    login
};
