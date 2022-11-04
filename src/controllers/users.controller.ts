import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public async createUser(req: Request, res: Response): Promise<void> {
    const { username, classe, level, password } = req.body;
    const token = await this.usersService.createUser(username, classe, level, password);

    res.status(201).json(token);
  }
}