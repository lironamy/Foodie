import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from './configs/database.config';
dbConnect();

import foodRouter  from './router/food.router';
import userRouter from './router/user.router';
import orderRouter from './router/order.router';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
  

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
