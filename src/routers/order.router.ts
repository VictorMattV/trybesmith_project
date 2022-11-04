import { Router } from 'express';
import OrdersController from '../controllers/order.controller';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get('/', (req, res) => ordersController.getOrders(req, res));

export default ordersRouter;