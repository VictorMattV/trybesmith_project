import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public async createProduct(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const result = await this.productsService.createProduct(name, amount);

    res.status(201).json(result);
  }

  public async getProducts(_req: Request, res: Response): Promise<void> {
    const result = await this.productsService.getProducts();

    res.status(200).json(result);
  }
}