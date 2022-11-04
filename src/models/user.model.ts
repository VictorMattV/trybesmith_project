import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/UserInterface';
import mysql from './connection';

export default class ProductsModel {
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
}