import path from "path";

import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  try {
    const markdownDocDirectory = path.join(
      process.cwd(),
      "src/markdown/documents"
    );
    const realSlug = (slug as string).replace(/\.md$/, "");
    const fullPath = markdownDocDirectory + `/${realSlug}.md`;
    const document = await fs.readFile(fullPath, "utf8");

    res.status(200).json({ msg: "Data fetch", data: document });
  } catch (err) {
    res.status(404).json({ msg: `Failed to fetch data - ${slug as string}` });
  }
}
