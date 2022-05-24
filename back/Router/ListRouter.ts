import Router from "./AbsractRouter.ts";
import { listController } from "../Controller/Controller.ts";

export default class ListRouter extends Router {

  public routes(): void {
    this._router.get('/list', async (ctx) => listController.get(ctx));
     
    this._router.post('/list', async (ctx) => listController.post(ctx));
     
    this._router.put('/list', (ctx) => {
      ctx.response.body = 'Received a PUT HTTP list method';
    });
     
    this._router.delete('/list', (ctx) => {
      ctx.response.body = 'Received a DELETE HTTP list method';
    });
  }
}