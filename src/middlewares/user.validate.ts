import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../validation/schema';

export default function productValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = userSchema.validate(req.body);

  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
}