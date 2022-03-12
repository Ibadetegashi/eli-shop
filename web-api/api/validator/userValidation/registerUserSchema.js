import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().min(5).max(30).required(),
  password: Joi.string().alphanum().min(5).max(30).required(),
});

export default schema;
