import joi from 'joi';

const usernameSchema = joi.string().required();
const passwordSchema = joi.string().required();

export const loginSchema = joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

const nameSchema = joi.string().min(3).required();
const amountSchema = joi.string().min(3).required();

export const productSchema = joi.object({
  name: nameSchema,
  amount: amountSchema,
});
