import { Request, Response } from 'express';
import { Connection } from 'typeorm';

import { connection } from './connection';
import User from './userModel';

class Controller {
  public createUser(req: Request, res: Response): void {
    connection
      .then(async (connection: Connection) => {
        const user = new User();
        await connection.manager.save(user);
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  public getUser(req: Request, res: Response): void {
    connection
      .then(async (connection: Connection) => {
        const user = await connection.manager.findOne(User, req.params.user_id);
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  public saveShare(req: Request, res: Response): void {
    connection
      .then(async (connection: Connection) => {
        const user = await connection.manager.findOne(User, req.params.id);

        if (user) {
          user.shared = true;
          await connection.manager.save(user);
          res.json(user);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  public saveMail(req: Request, res: Response): void {
    connection
      .then(async (connection: Connection) => {
        const user = await connection.manager.findOne(User, req.params.id);
        if (user) {
          user.email = req.body.email;
          await connection.manager.save(user);
          res.json(user);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

export { Controller };
