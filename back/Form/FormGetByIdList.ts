import Form from "./Form.ts"
import { z } from "zod";

export default class FormCreateList extends Form {

  constructor(formBody: any) {
    super();
    const schema = z.object({
      id: z.string(),
    });
    // @ts-ignore
    this.buildForm(schema, formBody)
  }
}