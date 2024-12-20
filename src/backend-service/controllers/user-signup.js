const bcrypt                              = require('bcrypt');
const service                             = require('../service/auth/user-signup');
const utils                               = require('../utils/authJwt');

const { responseHandler, errorHandler }   = require("../middleware/response-handler");

const signUp = async (req, res, next) => {
    const value = req.body;
    try {
        if(value.country == "" && value.cluster == "" && value.location == ""){
            return responseHandler("", res, "Please select any button from country ,cluster or location", 422);
        }
        if(value.location){
            if(value.cluster == ""){
                return responseHandler("", res, "Cluster is required.", 422);
            }
            if(value.country == ""){
                return responseHandler("", res, "Country is required.", 422);
            }
        }
        if(value.country){
            if(value.cluster == ""){
                return responseHandler("", res, "Cluster is required.", 422);
            }
        }

        if (value.email) {
            response = await service.checkEmailExists(value,res);
            if (response.status && response.data) {
                return responseHandler(null, res,"User Already exist with this email");
            }
            if(!response.status){
                return errorHandler(500, res, "Internal Server Error",response.data); 
            }
        }
        if (value.password) {    
           password       = await bcrypt.hash(value.password.trim(), 10);
           value.password =password;
        }
        userDetails = await service.createUsers(value);
        if(userDetails.status){
            const userDataDetails = userDetails.data;
            const userData = {
                userId:userDetails.data.dataValues.id,
                userEmail: userDetails.data.dataValues.email__sys
            }
            token  = utils.getAccessToken(userData);
            const data = {
                userDataDetails,
                accessToken: token
            };
            return responseHandler(data, res);
        }else{
            return errorHandler(500, res, "Internal Server Error",userDetails.data);
        }

     } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
     }
};

module.exports = {
    signUp
}