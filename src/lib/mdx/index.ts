import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src/app/markdown/documents");

interface PostMeta {
  meta: {
    data: {
      [key: string]: any;
    };
  };
}

export const getPostBySlug = (slug: string) => {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.md`);

    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    const { data, content } = matter(fileContent);

    return { meta: { data }, content };
  } catch (err) {
    console.error({ err });
  }
};

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  try {
    const files = await fs.promises.readdir(rootDirectory);

    const posts: PostMeta[] = [];

    for (const file of files) {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      const post = await getPostBySlug(file);
      if (post) {
        posts.push({ meta: post.meta });
      }
    }

    return posts;
  } catch (err) {
    console.error(err);
    return []; // Return an empty array or handle the error appropriately
  }
};
