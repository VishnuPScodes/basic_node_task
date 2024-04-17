import express from 'express';
import asyncHandler from '../../utils/asyncHandler.js';
import {
  getUserInfo,
  loginUser,
  registerUser,
} from '../controller/user.controller.js';
import { registerValidator } from '../middlewares/validators/user/register.validators.js';
import { loginValidator } from '../middlewares/validators/user/login.validators.js';

const userRouter = express.Router();

userRouter.get('/getUser', getUserInfo);
userRouter.post('/register', registerValidator, asyncHandler(registerUser));
userRouter.post('/login', loginValidator, asyncHandler(loginUser));

export default userRouter;
