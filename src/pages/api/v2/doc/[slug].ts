import path from "path";

import { promises as fs } from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  try {
    const markdownDocDirectory = path.join(
      process.cwd(),
      "src/app/markdown/documents"
    );
    const realSlug = (slug as string).replace(/\.mdx$/, "");
    const fullPath = markdownDocDirectory + `/${realSlug}.mdx`;
    const document = await fs.readFile(fullPath, "utf8");

    if (!document) {
      res.status(404).json({ msg: `Failed to fetch data - ${slug as string}` });
    }

    res.status(200).json({ msg: "Data fetch", data: document });
  } catch (err) {
    res.status(404).json({ msg: `Failed to fetch data - ${slug as string}` });
  }
}
