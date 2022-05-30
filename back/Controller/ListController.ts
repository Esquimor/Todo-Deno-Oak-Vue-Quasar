import { Context, RouterContext, Status } from "oak";
import FormCreateList from "../Form/FormCreateList.ts";
import FormPutList from "../Form/FormPutList.ts";
import ListDao from "../Dao/ListDao.ts";

export default {
  get: async (ctx: RouterContext) => {
    ctx.response.body = await ListDao.getAll();
  },
  getById: async (ctx: RouterContext) =>  {
    const {id} = ctx.params;
    if (!id) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    const list = await ListDao.getById(id);
    ctx.response.body = list;
  },
  post: async (ctx: Context) => {
    const body = ctx.request.body({ type: 'json' });
    const parsedBody = await body.value;
    const form = new FormCreateList(parsedBody);
    if (form.hasError()) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    // @ts-ignore
    const newList = await ListDao.create(form.getData());
    ctx.response.body = newList;
  },
  put: async (ctx: RouterContext) => {
    const body = ctx.request.body({ type: "json" });
    const parsedBody = await body.value;
    const form = new FormPutList(parsedBody);
    if (form.hasError()) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    const data = form.getData();
    // @ts-ignore
    const updatedList = await ListDao.updateById(data.listId, data);
    ctx.response.body = updatedList;
  },
  delete: async (ctx: RouterContext) => {
    const {id} = ctx.params;
    if (!id) {
      ctx.throw(Status.InternalServerError, "Error")
    }
    try {
      await ListDao.deleteById(id);
      ctx.response.body = "Deleted";
    } catch {
      ctx.throw(Status.InternalServerError, "Error")
    }
  }
}