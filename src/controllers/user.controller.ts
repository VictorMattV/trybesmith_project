import { Request, Response } from 'express';
import UsersService from '../services/user.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public async createUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const token = await this.usersService.createUser(username, classe, level, password);

    res.status(201).json(token);
  }

  public async login(req: Request, res: Response) {
    const { error, message } = await this.usersService.login(req.body);

    if (error) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    res.status(200).json(message);
  } 
}