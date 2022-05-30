import { RouterContext, Status } from "oak";
import ItemDao from "../Dao/ItemDao.ts";
import FormCreateItem from "../Form/FormCreateItem.ts";
import FormPutItem from "../Form/FormPutItem.ts"

export default {
  getItemsWithListId: async (ctx: RouterContext) => {
    const {id} = ctx.params;
    if (!id) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    const list = await ItemDao.getByListId(id);
    ctx.response.body = list;
  },
  post: async (ctx: RouterContext) => {
    const body = ctx.request.body({ type: 'json' });
    const parsedBody = await body.value;
    const form = new FormCreateItem(parsedBody);
    if (form.hasError()) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    // @ts-ignore
    const newList = await ItemDao.create(form.getData());
    ctx.response.body = newList;
  },
  put: async (ctx: RouterContext) => {
    const body = ctx.request.body({ type: "json" });
    const parsedBody = await body.value;
    const form = new FormPutItem(parsedBody);
    if (form.hasError()) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    const data = form.getData();
    // @ts-ignore
    const updatedList = await ItemDao.updateById(data.itemId, data);
    ctx.response.body = updatedList;
  },
  delete: async (ctx: RouterContext) => {
    const {id} = ctx.params;
    if (!id) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    try {
      await ItemDao.deleteById(id);
      ctx.response.body = "Deleted";
    } catch {
      ctx.throw(Status.InternalServerError, "Error")
    }
  }
}