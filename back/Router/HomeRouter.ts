import Router from "./AbsractRouter.ts";

export default class HomeRouter extends Router {

  public routes(): void {
    this._router.get('/', (ctx) => {
      ctx.response.body = 'Received a GET HTTP 2 method';
    });
     
    this._router.post('/', (ctx) => {
      ctx.response.body = 'Received a POST HTTP method';
    });
     
    this._router.put('/', (ctx) => {
      ctx.response.body = 'Received a PUT HTTP method';
    });
     
    this._router.delete('/', (ctx) => {
      ctx.response.body = 'Received a DELETE HTTP method';
    });
  }
}