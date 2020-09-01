import { Request, Response, Application } from 'express';

import { Controller } from './controller';

class Routes {
  private controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  public routes(app: Application): void {
    app
      .route('/user/:id?')
      .get((req: Request, res: Response) => {
        if (req.params.id) {
          this.controller.getUser(req, res);
        } else {
          this.controller.createUser(req, res);
        }
      })
      .post(this.controller.saveMail);

    app.route('/user/:id/saveShare').get(this.controller.saveShare);
  }
}

export { Routes };
