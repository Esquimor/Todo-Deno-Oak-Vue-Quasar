import { Application } from "oak";
import AbsractRouter from "./Router/AbsractRouter.ts";
import { oakCors } from "cors";

export default class App {
  
  app = new Application();
  port;

  constructor({
    port,
    routers
  }: {
    port: number;
    routers: AbsractRouter[]
  }) {
    this.port = port;

    this.app.use(oakCors());
    this.addRouters(routers);
    this.listen();
  }

  private listen() {
    this.app.addEventListener('listen', () => {
      console.log(`Listening on: localhost:${this.port}`);
    });
  }

  public addRouter(absractRouter: AbsractRouter): void {
    const router = absractRouter.getRouter();
    this.app.use(router.allowedMethods());
    this.app.use(router.routes());
  }

  public addRouters(absractRouters: AbsractRouter[]): void {
    absractRouters.forEach(router => this.addRouter(router))
  }
}