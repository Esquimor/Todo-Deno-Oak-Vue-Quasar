import { Model, DataTypes } from "denodb";
import List from "./List.ts";

export default class Item extends Model {
  static table = 'items';

  static timestamps = true;

  static fields = {
    itemId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING,
    },
    checked: {
      type: DataTypes.BOOLEAN,
    }
  };

  static defaults = {
    checked: false,
  };

  
  static list() {
    return this.hasOne(List);
  }
}