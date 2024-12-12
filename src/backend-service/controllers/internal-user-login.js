const bcrypt                             = require('bcrypt');
const service                            = require('../service/auth/internal-login');
const serviceSignUp                      = require('../service/auth/internal-signup');
const { responseHandler, errorHandler }  = require("../middleware/response-handler");

const login = async (req, res, next) => {

    try {
        const value       = req.body;
        if (value.username) {
            value.email=value.username;
            userDetails = await serviceSignUp.checkEmailExists(value,res);
            if (userDetails) {
                if (value.password) {
                    const result = await bcrypt.compare(value.password, userDetails.dataValues.password);
                    if (!result) {
                        return responseHandler(null, res,"Please double check the credentials");
                    }
                }

            }else{
                return responseHandler(null, res,"User hasn't exist with this email");
            }
        }

        const { userData, token } = await service.login(userDetails);
        const data = {
            userDetails,
            accessToken: token,
        };
       return responseHandler(data, res);

    } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
    }
};

module.exports = {
    login
}