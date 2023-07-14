/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
// import { promises as fs } from "fs";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { slug } = req.query;
//   try {
//     const markdownDocDirectory = path.join(
//       process.cwd(),
//       "src/app/markdown/documents"
//     );
//     const realSlug = (slug as string).replace(/\.mdx$/, "");
//     const fullPath = markdownDocDirectory + `/${realSlug}.mdx`;
//     const document = await fs.readFile(fullPath, "utf8");

//     const { frontmatter, content } = await compileMDX({
//       source: fileContent,
//       options: { parseFrontmatter: true }
//     })

//     return { meta: { ...frontmatter, slug: realSlug }, content }
//     if (!document) {
//       res.status(404).json({ msg: `Failed to fetch data - ${slug as string}` });
//     }

//     res.status(200).json({ msg: "Data fetch", data: document });
//   } catch (err) {
//     res.status(404).json({ msg: `Failed to fetch data - ${slug as string}` });
//   }
// }

// const rootDirectory = path.join(
//   process.cwd(),
//   "app",
//   "content",
//   "src/app/markdown/documents"
// );

// export const getPostBySlug = async (slug: any) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   const realSlug = slug.replace(/\.mdx$/, "");
//   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//   const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

//   const fileContent = (fs as any).readFileSync(filePath, { encoding: "utf8" });

//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: { parseFrontmatter: true },
//   });

//   return { meta: { ...frontmatter, slug: realSlug }, content };
// };

// export const getAllPostsMeta = async () => {
//   const files = (fs as any).readdirSync(rootDirectory);

//   let posts = [];

//   for (const file of files) {
//     const { meta } = await getPostBySlug(file);
//     posts.push(meta);
//   }

//   return posts;
// };
