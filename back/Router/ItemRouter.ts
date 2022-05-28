import ItemController from "../Controller/ItemController.ts";
import Router from "./AbsractRouter.ts";

export default class ItemRouter extends Router {

  public routes(): void {
    this._router.post('/item', ItemController.post);
     
    this._router.put('/item', ItemController.put);
     
    this._router.delete('/item/:id', ItemController.delete);
  }
}