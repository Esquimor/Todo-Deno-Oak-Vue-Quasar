import List from "../Models/List.ts"
import { v4 } from "uuid";

export default {
  getAll: async () => {
    const items = await List.all();
    if (!items) throw Error();
    return items;
  },
  getById: async (id: string) => {
    const list = await List.where('listId', id).first();
    if (!list) throw Error();
    return list;
  },
  create: async (newItem: { name: string }) => {
    const list = await List.create({listId: v4.generate(), ...newItem });
    if (!list) throw Error();
    return list;
  },
  deleteById: async (id: string) => {
    const isDeleted = await List.where('listId', id).delete();
    return isDeleted;
  },
  updateById: async (id: string, updatedList: { name: string}) => {
    await List.where('listId', id).update(updatedList);
    const list = await List.where('listId', id).first();
    if (!list) throw Error();
    return list;
  }
}