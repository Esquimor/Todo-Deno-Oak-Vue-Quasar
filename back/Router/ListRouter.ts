import Router from "./AbsractRouter.ts";
import listController from "../Controller/ListController.ts";

export default class ListRouter extends Router {

  public routes(): void {
    this._router
      .get('/list', listController.get)
      .get('/list/:id', listController.getById);
     
    this._router.post('/list', listController.post);
     
    this._router.put('/list', listController.put);
     
    this._router.delete('/list/:id', listController.delete);
  }
}