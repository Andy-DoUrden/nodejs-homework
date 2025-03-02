const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string(),
});

module.exports = {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSubscriptionSchema,
};
