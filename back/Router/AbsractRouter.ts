import { Router, Application } from "oak";

export default class AbsractRouter {

  protected _router;

  constructor() {
    this._router = new Router();
    this.routes();
  }

  public setRoutes(app: Application) {
    app.use(this._router.allowedMethods());
    app.use(this._router.routes());
  }

  public routes(): void {}

  public getRouter() {
    return this._router;
  }
}