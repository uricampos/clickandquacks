import express from 'express';
import QuackRouter from './routes/quack.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// app.options('*', (req, res) => {
//     res.header(
//         'Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS'
//     );
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header('Access-Control-Allow-Credentials', true);
//     res.status(200).send();
// });

// app.options('*', cors());

app.use('/quacks', QuackRouter);

export default app;
