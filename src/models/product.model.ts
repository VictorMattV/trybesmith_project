import { ResultSetHeader } from 'mysql2';
import { IProduct, IProducts } from '../interfaces/ProductInterface';
import mysql from './connection';

export default class ProductsModel {
  connection = mysql;

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES(?, ?)',
      [name, amount],
    );

    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    
    return newProduct;
  }

  async getProducts(): Promise<IProducts[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    
    return result as IProducts[];
  }

  async updateProducts(orderId: number, id: number) {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
      [orderId, id],
    );
  }
}
