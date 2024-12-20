const Joi = require('joi');

const constants = require('constants');

const loginSchema = Joi.object().keys({
  username: Joi.string().required().email().trim(),
  password: Joi.string().required().trim(),
});

const signUpSchemaForInternalUser = Joi.object().keys({
  email: Joi.string().required().trim(),
  first_name: Joi.string().required().trim(),
  last_name: Joi.string().required().trim(),
  // country: Joi.string(),
  // cluster: Joi.string().trim(),
  // location: Joi.string().trim(),
  user_category: Joi.string().required().trim(),
  user_type: Joi.string().required().trim(),
  role: Joi.string().required().trim(),
  security_profile_role:Joi.string().required().trim()
});
const signUpSchemaForExternalUser = Joi.object().keys({
  email: Joi.string().required().trim(),
  // country: Joi.string().trim(),
  // cluster: Joi.string(),
  // location: Joi.string().trim(),
  user_category: Joi.string().required().trim(),
  user_type: Joi.string().required().trim(),
  vendor_code: Joi.string().required().trim(),
  role: Joi.string().required().trim(),
  security_profile_role:Joi.string().required().trim(),
  password:Joi.string().required().trim()
});

const landingPageSchema = Joi.object().keys({
  userId: Joi.string().required().trim()
});


const defaults = {
    'abortEarly': false, // include all errors
    'allowUnknown': true, // ignore unknown props
    'stripUnknown': true // remove unknown props
};

const message = (error) => { return `${error.details.map(x => x.message).join(', ')}`; };

module.exports = {
    loginSchema,
    signUpSchemaForInternalUser,
    signUpSchemaForExternalUser,
    landingPageSchema,
    defaults,
    message
}
