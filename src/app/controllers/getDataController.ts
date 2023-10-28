import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";

interface Data {
  temperature: string;
  humidity: string;
  nane: string;
}

export const getDataController = async (req: Request, res: Response) => {
  const data = await fs.readFile(path.join(__dirname, "../../data.json"));
  res.json(JSON.parse(data.toString("utf-8")));
};
