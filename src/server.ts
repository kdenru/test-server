import dotenv from 'dotenv';
import 'reflect-metadata';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Wintrip src started at http://localhost:' + PORT);
});
