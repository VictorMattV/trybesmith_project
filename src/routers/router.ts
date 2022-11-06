import { Router } from 'express';
import loginRouter from './login.router';
import ordersRouter from './order.router';
import productsRouter from './product.router';
import usersRouter from './user.router';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/login', loginRouter);
router.use('/orders', ordersRouter);

export default router;