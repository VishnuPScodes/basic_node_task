import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb } from './src/configs/db.js';
import userRouter from './src/routes/user.routes.js';

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.URL;
app.use(cors());

app.use('/users', userRouter);

app.listen(PORT, async () => {
  try {
    await connectToDb(MONGO_URL);
    console.log('listening to the port ', PORT);
  } catch (error) {
    console.log('failed to connect to the database', error);
  }
});
