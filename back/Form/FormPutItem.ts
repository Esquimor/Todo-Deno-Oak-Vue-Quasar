import Form from "./Form.ts"
import { z } from "zod";

export default class FormPutItem extends Form {

  constructor(formBody: any) {
    super();
    const schema = z.object({
      itemId: z.string(),
      label: z.string(),
      checked: z.optional(z.boolean())
    });
    // @ts-ignore
    this.buildForm(schema, formBody)
  }
}