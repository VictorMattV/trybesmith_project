import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import userValidation from '../middlewares/user.validate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', userValidation, (req, res) => usersController.createUser(req, res));

export default usersRouter;