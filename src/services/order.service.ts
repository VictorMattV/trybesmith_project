import { IOrder } from '../interfaces/OrderInterface';
import OrdersModel from '../models/order.model';
import ProductsModel from '../models/product.model';

export default class ProductsService {
  constructor(
    private ordersModel = new OrdersModel(),
    private productsModel = new ProductsModel(),
  ) { }

  async getOrders(): Promise<IOrder[]> {
    return this.ordersModel.getOrders();
  }

  async createOrders(userId: number, productsIds: number[]) {
    const orderId = await this.ordersModel.createOrder(userId);

    const create = productsIds.map(async (prodId) => {
      await this.productsModel.updateProducts(orderId, prodId);
    });

    await Promise.all(create);
  } 
}