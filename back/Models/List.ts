import { Model, DataTypes } from "denodb";
import Item from "./Item.ts";

export default class List extends Model {
  static table = 'lists';

  static timestamps = true;

  static fields = {
    listId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  };

  static items() {
    return this.hasMany(Item);
  }
}