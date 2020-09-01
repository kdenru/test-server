import { createConnection } from 'typeorm';
import User from './userModel';

export const connection = createConnection({
  type: 'postgres',
  host: '0.0.0.0',
  port: Number(process.env.DB_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: [User],
  synchronize: true,
  logging: false
});
