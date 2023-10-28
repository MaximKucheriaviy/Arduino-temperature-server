import { IncomingMessage, ServerResponse } from "http";
import { TokenIndexer } from "morgan";

export const morganLogger = require("morgan");
const colors = require("colors");

morganLogger.token(
  "statusColorised",
  (req: IncomingMessage, res: ServerResponse) => {
    if (res.statusCode >= 500) {
      return colors.bgRed(res.statusCode);
    } else if (res.statusCode >= 400) {
      return colors.bgYellow.black(res.statusCode);
    } else if (res.statusCode >= 200) {
      return colors.bgGreen.white(res.statusCode);
    }
  }
);

export const morganSetup = (
  token: TokenIndexer,
  req: IncomingMessage,
  res: ServerResponse
) => {
  return [
    token.statusColorised(req, res),
    token.method(req, res),
    token.url(req, res),
  ].join(" ");
};
