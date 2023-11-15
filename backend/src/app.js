import express from 'express';
import QuackRouter from './routes/quack.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/quacks", QuackRouter);

export default app;
