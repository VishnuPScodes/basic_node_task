import express from 'express';
import asyncHandler from '../../utils/asyncHandler.js';
import {
  createUser,
  deleteUser,
  getAllUser,
  getOneUser,
  getUserInfo,
  loginUser,
  registerUser,
  updateUser,
} from '../controller/user.controller.js';
import { registerValidator } from '../middlewares/validators/user/register.validators.js';
import { loginValidator } from '../middlewares/validators/user/login.validators.js';

const userRouter = express.Router();

userRouter.get('/users', getAllUser);
userRouter.get('/users/:userId', getOneUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:userId', updateUser);
userRouter.delete('/users/:userId', deleteUser);

export default userRouter;
