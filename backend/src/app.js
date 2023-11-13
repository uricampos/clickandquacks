import express from 'express';
import testRouter from './routes/test.js';

const app = express();

app.use(express.json());

app.use("/api", testRouter);

app.listen(4000, () => console.log('server running on port 4000'));
