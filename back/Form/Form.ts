export default class Form {

  form: {
    success: boolean;
    data: Object
  } = {
    success: false,
    data: {}
  }

  protected buildForm(schema: any, formBody: Object) {
    this.form = schema.safeParse(formBody);
  }

  private hasForm() {
    return !!this.form;
  }

  public getData(): Object {
    if (!this.hasForm()) return {}
    return this.form.data;
  }

  public hasSuccess(): boolean {
    if (!this.hasForm()) return false;
    return this.form.success;
  }

  public hasError(): boolean {
    return !this.hasSuccess();
  };
}