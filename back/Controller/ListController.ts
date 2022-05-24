import { Context } from "oak";
import FormCreateList from "../Form/FormCreateList.ts";
import List from "../Models/List.ts"
import Item from "../Models/Item.ts"

export default class ListController {
  
  public async get(ctx: Context) {
    ctx.response.body = await List.all();
  }

  public async post(ctx: Context) {
    const body = ctx.request.body({ type: 'json' });
    const parsedBody = await body.value;
    const form = new FormCreateList(parsedBody);
    ctx.response.body = form.getData();
  }
}