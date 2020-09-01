import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello!');
});

app.listen(PORT, () => {
  console.log('Wintrip src started at http://localhost:' + PORT);
});
