import { IOrder } from '../interfaces/OrderInterface';
import OrdersModel from '../models/order.model';

export default class ProductsService {
  constructor(private ordersModel = new OrdersModel()) { }

  async getOrders(): Promise<IOrder[]> {
    return this.ordersModel.getOrders();
  }
}