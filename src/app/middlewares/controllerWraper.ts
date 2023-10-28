import { Request, Response } from "express";
// import { AppError } from "../../customTypes/error";

export const controllerWraper = function (
  callback: (req: Request, res: Response, next?: Function) => void
): (req: Request, res: Response, next: Function) => void {
  const result = (req: Request, res: Response, next: Function) => {
    try {
      callback(req, res);
    } catch (error: any) {
      next(error);
    }
  };
  return result;
};
