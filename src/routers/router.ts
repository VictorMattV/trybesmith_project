import { Router } from 'express';
import ordersRouter from './order.router';
import productsRouter from './product.router';
import usersRouter from './user.router';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);

export default router;