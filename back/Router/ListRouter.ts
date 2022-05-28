import Router from "./AbsractRouter.ts";
import ListController from "../Controller/ListController.ts";
import ItemController from "../Controller/ItemController.ts";

export default class ListRouter extends Router {

  public routes(): void {
    this._router
      .get('/list', ListController.get)
      .get('/list/:id', ListController.getById)
      .get('/list/:id/items', ItemController.getItemsWithListId)
     
    this._router.post('/list', ListController.post);
     
    this._router.put('/list', ListController.put);
     
    this._router.delete('/list/:id', ListController.delete);
  }
}