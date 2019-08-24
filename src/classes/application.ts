import express from "express";
import IRoutable from "../interfaces/routable";

export class Application {
  private application: express.Application;
  private port = 8080;
  private routePrefix = "/ts";

  constructor() {
    this.application = express();

    this.application.get("/", (req, res) => {
      res.send("It's working!");
    });
  }

  public start() {
    this.application.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${this.port}`);
    });
  }

  public addRoute(route: string, routable: IRoutable) {
    const finalRoute = this.routePrefix + route;
    this.application.use(finalRoute, routable.getRouter());
  }
}
