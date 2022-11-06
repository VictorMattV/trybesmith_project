import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import loginValidation from '../middlewares/login.validate';

const loginRouter = Router();
const usersController = new UsersController();

loginRouter.post('/', loginValidation, (req, res) => usersController.login(req, res));

export default loginRouter;