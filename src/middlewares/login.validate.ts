import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../validation/schema';

export default function loginValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}