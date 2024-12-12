const jwt = require('jsonwebtoken');
require('dotenv').config();

const { errorHandler } = require("./response-handler");

const authenticateToken = (req, res, next) => {
     // Extract the token from the Authorization header
     const authHeader = req.headers['authorization'];
     const token      = authHeader && authHeader.split(' ')[1];
   
     if (!token) {
        return errorHandler(401, res, 'No token provided');
     }
     const secretKey = process.env.ACCESS_TOKEN_PRIVATE_KEY;

     // Verify and decode the token
     jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return errorHandler(403, res, 'Invalid token');
      }
      // Add the decoded user information to the request object
      req.user = decoded;
      next();
     });
 
};
module.exports = authenticateToken;