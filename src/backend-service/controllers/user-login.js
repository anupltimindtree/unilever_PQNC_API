const bcrypt                             = require('bcrypt');
const service                            = require('../service/auth/user-login');
const serviceSignUp                      = require('../service/auth/user-signup');
const { responseHandler, errorHandler }  = require("../middleware/response-handler");

const login = async (req, res, next) => {

    try {
        const value       = req.body;
        value.email       = value.username;
        userDetails       = await serviceSignUp.checkEmailExists(value,res);
        if(!userDetails.status){
            return errorHandler(500, res, "Internal Server Error",userDetails.data); 
        }
        if (userDetails.status && userDetails.data) {
            if (value.password && userDetails.data.dataValues.password) {
                const result = await bcrypt.compare(value.password, userDetails.data.dataValues.password);
                if (!result) {
                    return responseHandler(null, res,"Please double check the credentials");
                }
            }

        }else{
            return responseHandler(null, res,"User hasn't exist with this email");
        }
        
        const userDataDetails = userDetails.data;
        const { token }       = await service.login(userDetails);
        const dataBody = {
            userDataDetails,
            accessToken: token,
        };
       return responseHandler(dataBody, res);

    } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
    }
};

module.exports = {
    login
}