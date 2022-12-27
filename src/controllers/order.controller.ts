import { Request, Response } from 'express';
import jwtDecode from 'jwt-decode';
import { JwtUser } from '../interfaces/TokenInterface';
import OrdersService from '../services/order.service';
import getUser from '../utils/getUser';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public async getOrders(_req: Request, res: Response) {
    const result = await this.ordersService.getOrders();

    res.status(200).json(result);
  }

  public async createOrders(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { productsIds } = req.body;

    const userData = jwtDecode(authorization || 'undefined') as JwtUser;

    const userId = await getUser(userData.username);

    await this.ordersService.createOrders(userId, productsIds);

    return res.status(201).json({ userId, productsIds });
  }
}
