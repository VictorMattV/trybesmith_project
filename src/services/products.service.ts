import { IProduct, IProducts } from '../interfaces/ProductsInterface';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  constructor(private productsModel = new ProductsModel()) { }

  async createProduct(name: string, amount: string): Promise<IProduct> {
    return this.productsModel.createProduct(name, amount);
  }

  async getProducts(): Promise<IProducts[]> {
    return this.productsModel.getProducts();
  }
}