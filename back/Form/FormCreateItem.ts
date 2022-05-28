import Form from "./Form.ts"
import { z } from "zod";

export default class FormCreateItem extends Form {

  constructor(formBody: any) {
    super();
    const schema = z.object({
      label: z.string(),
      listId: z.string(),
      checked: z.optional(z.boolean())
    });
    // @ts-ignore
    this.buildForm(schema, formBody)
  }
}