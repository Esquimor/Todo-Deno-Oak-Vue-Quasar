import Item from "../Models/Item.ts";
import { v4 } from "uuid";

export default {
  getByListId: async (listId: string) => {
    const items = await Item.where("listId", listId).all();
    if (!items) return null;
    return items;
  },
  create: async (item: {
    label: string;
    listId: string;
    checked?: boolean
  }) => {
    const itemCreated = await Item.create({itemId: v4.generate(), ...item });
    if (!itemCreated) return null;
    return itemCreated;
  },
  updateById: async (id: string, updatedList: { label: string, checked?: boolean }) => {
    await Item.where('itemId', id).update(updatedList);
    const list = await Item.where('itemId', id).first();
    if (!list) return null;
    return list;
  },
  deleteById: async (id: string) => {
    const isDeleted = await Item.where('itemId', id).delete();
    return isDeleted;
  },
}