import fsPromises from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { lang } = req.query;
    try {
      const dataFilePath: string = path.join(
        process.cwd(),
        `src/languages/${lang as string}.json`
      );
      if (!dataFilePath) {
        return res.status(404).json({ msg: "Not found data" });
      }
      const jsonData = await fsPromises.readFile(dataFilePath, "utf-8");
      // const data: object = JSON.parse(jsonData.toString());
      const data: unknown = JSON.parse(jsonData);
      console.log(typeof jsonData);
      res.status(200).json({ message: "Hello world", data });
    } catch (err) {
      res.status(404).json({
        msg: "Not found language",
      });
    }
  }
}
