import matter from "gray-matter";
import { join } from "path";

const docsDirectory = join(process.cwd(), "src/app/markdown/documents");

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
