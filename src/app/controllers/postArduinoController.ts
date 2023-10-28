import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";

interface Data {
  temperature: string;
  humidity: string;
  nane: string;
}

export async function postArduinoController(req: Request, res: Response) {
  const data: Data = req.body;
  const fileData = await fs.readFile(
    path.join(__dirname, "../../data.json"),
    "utf-8"
  );
  const arr = JSON.parse(fileData) as Array<Data>;
  let triger: boolean = true;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].nane === data.nane) {
      arr[i] = data;
      triger = false;
      break;
    }
  }
  if (triger) {
    arr.push(data);
  }
  await fs.writeFile(
    path.join(__dirname, "../../data.json"),
    JSON.stringify(arr)
  );
  res.status(200).json("ok");
}
