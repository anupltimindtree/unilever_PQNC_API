
const bcrypt                              = require('bcrypt');
const service                             = require('../service/auth/internal-signup');
const utils                               = require('../utils/authJwt');

const { responseHandler, errorHandler }   = require("../middleware/response-handler");

const signUp = async (req, res, next) => {
    const value = req.body;
    try {
        if (value.email) {
            response = await service.checkEmailExists(value,res);
            if (response) {
                return responseHandler(null, res,"User Already exist with this email");
            }
        }
        if (value.mobile) {
            response = await service.checkMobileNumber(value,res);
            if (response) {
                return responseHandler(null, res,"User Already exist with this mobile number");
            }
        }
        
            
        password = await bcrypt.hash(value.password, 10);

        const bodydata = {
            role:value.role,
            language: value?.language || null,
            state: value?.state || null,
            country: value?.country || null,
            mobile: value.mobile,
            password: password,
            email:value.email,
            granted_date: null,
            name:value.name
        };
        userDetails = await service.createUsers(bodydata);

        const userData = {
            userName: value.email
        }
        token           = utils.getAccessToken(userData);

        const data = {
            userDetails,
            accessToken: token
        };
        return responseHandler(data, res);
    

     } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
     }
};

module.exports = {
    signUp
}