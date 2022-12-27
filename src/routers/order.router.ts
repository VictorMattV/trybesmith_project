import { Router } from 'express';
import OrdersController from '../controllers/order.controller';
import ordersValidation from '../middlewares/orders.validate';
import tokenValidation from '../middlewares/token.validate';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get('/', (req, res) => ordersController.getOrders(req, res));
ordersRouter.post(
  '/', 
  tokenValidation,
  ordersValidation,
  (req, res) => ordersController.createOrders(req, res),
);

export default ordersRouter;