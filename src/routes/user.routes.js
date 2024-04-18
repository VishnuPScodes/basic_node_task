import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUser,
  getOneUser,
  updateUser,
} from '../controller/user.controller.js';
import { userValidator } from '../middlewares/validators/user.validators.js';

const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.get('/:userId', getOneUser);
userRouter.post('/', userValidator, createUser);
userRouter.put('/:userId', updateUser);
userRouter.delete('/:userId', deleteUser);

export default userRouter;
