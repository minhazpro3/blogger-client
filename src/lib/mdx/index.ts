import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src/app/markdown/documents");

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.md`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  // const { frontmatter, content } = await compileMDX({
  //   source: fileContent,
  //   options: { parseFrontmatter: true },
  // });

  const { data, content } = matter(fileContent);

  return { meta: { data }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
