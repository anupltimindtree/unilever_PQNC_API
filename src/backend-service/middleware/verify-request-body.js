const Joi = require('joi');

const constants = require('constants');

const loginSchema = Joi.object().keys({
  username: Joi.string().required().email().trim(),
  password: Joi.string().required().trim(),
});

const signUpSchema = Joi.object().keys({
  email: Joi.string().required().email().trim(),
  role: Joi.string().required().trim(),
  name: Joi.string().required().trim(),
  mobile: Joi.string().required().trim(),
  password: Joi.string().required().trim(),
});


const defaults = {
    'abortEarly': false, // include all errors
    'allowUnknown': true, // ignore unknown props
    'stripUnknown': true // remove unknown props
};

const message = (error) => { return `${error.details.map(x => x.message).join(', ')}`; };

module.exports = {
    loginSchema,
    signUpSchema,
    defaults,
    message
}
