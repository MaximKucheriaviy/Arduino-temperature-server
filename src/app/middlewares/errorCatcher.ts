import { Response, Request } from "express";
import { AppError } from "../../customTypes/error";
import { createResponseData } from "../../customTypes/responseData";

export const errorCatcher = function (
  error: AppError | Error,
  req: Request,
  res: Response,
  next: Function
) {
  if ("status" in error) {
    res.json(createResponseData(error.message)).status(error.status);
  } else {
    res.json(createResponseData("Server error")).status(500);
  }
};
