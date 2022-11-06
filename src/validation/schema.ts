import joi from 'joi';

const usernameSchema = joi.string().required();
const passwordSchema = joi.string().required();

const loginSchema = joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

export default loginSchema;
