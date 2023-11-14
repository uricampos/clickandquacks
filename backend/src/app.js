import express from 'express';
import testRouter from './routes/test.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", testRouter);

app.listen(4000, () => console.log('server running on port 4000'));
