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

const usernamePostSchema = joi.string().min(3).required();
const classePostSchema = joi.string().min(3).required();
const levelPostSchema = joi.number().min(1).required();
const passwordPostSchema = joi.string().min(8).required();

export const userSchema = joi.object({
  username: usernamePostSchema,
  classe: classePostSchema,
  level: levelPostSchema,
  password: passwordPostSchema,
});