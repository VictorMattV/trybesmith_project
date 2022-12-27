import { NextFunction, Request, Response } from 'express';
import { checkToken } from '../utils/jwt';

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
    
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const insertedToken = checkToken(authorization);

  if (insertedToken.type === 'token') {
    return res.status(401).json({ message: insertedToken.message });
  }

  next();
}