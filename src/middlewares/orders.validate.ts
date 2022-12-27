import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../validation/schema';

export default function ordersValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = orderSchema.validate(req.body);

  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }

  const { productsIds } = req.body;

  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}