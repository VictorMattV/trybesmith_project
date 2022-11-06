import { ResultSetHeader } from 'mysql2';
import { ILogin } from '../interfaces/LoginInterface';
import { IUser } from '../interfaces/UserInterface';
import mysql from './connection';

export default class UsersModel {
  connection = mysql;

  async createUser(
    username: string,
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, username, classe, level, password };
  }

  async login(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;
    const [row] = await this.connection.execute<IUser[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return row;
  } 
} 
