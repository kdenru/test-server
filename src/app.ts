import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { Routes } from './routes';

class App {
  public app: express.Application;
  public routeProvider: Routes;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.routeProvider = new Routes();
    this.routeProvider.routes(this.app);
  }
}
export default new App().app;
