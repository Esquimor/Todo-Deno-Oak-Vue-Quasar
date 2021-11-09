import list from "../Data/list.ts"
import { Context } from "oak";
import FormCreateList from "../Form/FormCreateList.ts";

export default class ListController {

  private list: Object;

  constructor() {
    this.list = list;
  }
  
  public get(ctx: Context) {
    ctx.response.body = this.list;
  }

  public async post(ctx: Context) {
    const body = ctx.request.body({ type: 'json' });
    const parsedBody = await body.value;
    const form = new FormCreateList(parsedBody);
    ctx.response.body = form.getData();
  }
}