import { IOrder } from '../interfaces/OrderInterface';
import mysql from './connection';

export default class OrdersModel {
  connection = mysql;

  async getOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prd.id) AS productsIds
       FROM Trybesmith.Orders as ord
       INNER JOIN Trybesmith.Products as prd
       ON ord.id = prd.orderId
       GROUP BY ord.id
       ORDER BY ord.userId
      `,
    );
    
    return result as IOrder[];
  }
}