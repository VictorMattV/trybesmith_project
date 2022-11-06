import { NextFunction, Request, Response } from 'express';
import schema from '../validation/schema';

export default function loginValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}