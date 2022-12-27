import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

export const checkToken = (token: string) => {
  try {
    const auth = token.replace('Bearer ', '') as string;
    const verifyToken = jwt.verify(auth, SECRET);
    return { type: null, verifyToken };
  } catch (_error) {
    return { type: 'token', message: 'Invalid token' };
  }
};

export default checkToken;