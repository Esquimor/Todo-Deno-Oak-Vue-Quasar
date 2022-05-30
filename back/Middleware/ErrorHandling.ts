import {
  isHttpError,
  Status,
  Context,
  STATUS_TEXT
} from "oak";

// see: https://tkhrtkmk.medium.com/deno-api-server-how-to-implement-errorhandler-by-oak-91622e1379fe
class CustomError extends Error {
  code: number;
  name: string;
  contents: string[];
  
  constructor(statusCode: number, contents: string[]) {
    super();
    this.code = statusCode;
    this.name = STATUS_TEXT.get(statusCode) || "";
    this.contents = contents;
  }
}

export default async (ctx: Context, next: () => Promise<unknown>) => {
  try {
    await next();
  } catch (err) {
    console.log(isHttpError(err))
    if (isHttpError(err)) {
        ctx.response.status = 400;
        ctx.response.body = "I catch an Error";
    } else {
      ctx.throw(Status.InternalServerError, "Unexpected Error");
    }
  }
}