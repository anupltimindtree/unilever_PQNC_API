const express = require('express');

const router = express.Router();

const requestbodyValidator  = require('../middleware/verify-request-body');
const internalUserLogin     = require('../controllers/internal-user-login');
const internalUserSignUp    = require('../controllers/internal-user-signup');

const validate              = require('../middleware/validator');

router.post('/internaluserlogin',  validate(requestbodyValidator.loginSchema),internalUserLogin.login);
router.post('/internalusersignup', validate(requestbodyValidator.signUpSchema),internalUserSignUp.signUp);


module.exports = router;