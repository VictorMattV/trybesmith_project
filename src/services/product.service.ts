import { IProduct, IProducts } from '../interfaces/ProductInterface';
import ProductsModel from '../models/product.model';

export default class ProductsService {
  constructor(private productsModel = new ProductsModel()) { }

  async createProduct(name: string, amount: string): Promise<IProduct> {
    return this.productsModel.createProduct(name, amount);
  }

  async getProducts(): Promise<IProducts[]> {
    return this.productsModel.getProducts();
  }
}