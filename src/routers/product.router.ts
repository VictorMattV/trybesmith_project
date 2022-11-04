import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', (req, res) => productsController.createProduct(req, res));
productsRouter.get('/', (req, res) => productsController.getProducts(req, res));

export default productsRouter;