import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/LoginInterface';
import IToken from '../interfaces/TokenInterface';
import UsersModel from '../models/user.model';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export default class UsersService {
  constructor(private usersModel = new UsersModel()) { }

  public async createUser(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IToken> {
    const user = await this.usersModel.createUser(username, classe, level, password);
    const token = jwt.sign({ id: user.id }, SECRET, { algorithm: 'HS256', expiresIn: '5d' });
    return { token };
  }

  public async login(login: ILogin) {
    const user = await this.usersModel.login(login);

    if (!user.length) {
      return { error: 'Username or password invalid' };
    }
    
    const token = jwt.sign(
      { username: login.username },
      SECRET, 
      { algorithm: 'HS256', expiresIn: '5d' },
    );
    return { message: { token } };
  } 
}