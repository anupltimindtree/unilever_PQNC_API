const express = require('express');

const router = express.Router();

const requestbodyValidator  = require('../middleware/verify-request-body');
const authenticateToken     = require("../middleware/jwt-auth-validation");

const internalUserLogin     = require('../controllers/internal-user-login');
const internalUserSignUp    = require('../controllers/internal-user-signup');
const landingPage           = require('../controllers/landingPage');


const validate              = require('../middleware/validator');

router.post('/internaluserlogin',  validate(requestbodyValidator.loginSchema),internalUserLogin.login);
router.post('/internalusersignup',validate(requestbodyValidator.signUpSchema) ,internalUserSignUp.signUp);
router.get('/pqncstatusDetails',validate(requestbodyValidator.landingPageSchema),authenticateToken,landingPage.pqncStatusDetails);


module.exports = router;