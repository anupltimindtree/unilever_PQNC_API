const express = require('express');

const router = express.Router();

const requestbodyValidator  = require('../middleware/verify-request-body');
const authenticateToken     = require("../middleware/jwt-auth-validation");

const userLogin          = require('../controllers/user-login');
const userSignUp         = require('../controllers/user-signup');
const landingPage        = require('../controllers/landingPage');
const signUpMasterData   = require('../controllers/signup-master-data');


const validate              = require('../middleware/validator');

router.post('/userlogin',  validate(requestbodyValidator.loginSchema),userLogin.login);
router.post('/internal/signup',validate(requestbodyValidator.signUpSchemaForInternalUser) ,userSignUp.signUp);
router.post('/external/signup',validate(requestbodyValidator.signUpSchemaForExternalUser),userSignUp.signUp);
router.get('/pqncstatusDetails',validate(requestbodyValidator.landingPageSchema),authenticateToken,landingPage.pqncStatusDetails);
router.get('/signup/masterdata',signUpMasterData.signupmasterDataListings);


module.exports = router;