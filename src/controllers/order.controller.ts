import { Request, Response } from 'express';
import OrdersService from '../services/order.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public async getOrders(_req: Request, res: Response): Promise<void> {
    const result = await this.ordersService.getOrders();

    res.status(200).json(result);
  }
}