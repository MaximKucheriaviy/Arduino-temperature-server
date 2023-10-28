import { AppError } from "../../customTypes/error";

export const defaultError = function () {
  const error: AppError = {
    message: "Wrong path",
    status: 404,
  };
  throw error;
};
