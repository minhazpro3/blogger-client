"use client";
import { MDXRemote } from "next-mdx-remote";

import MarkdownPreview from "@/lib/markdownPreview";
interface ParamsTypes {
  slug: string;
  lang: string;
}

interface DataTypes {
  msg: string;
  data: string;
}

async function getData(slug: string): Promise<DataTypes> {
  try {
    const res = await fetch(
      `https://blogger-front.vercel.app/api/v2/doc/${slug}`,
      // `http://localhost:3000/api/v2/doc/${slug}`,
      {
        method: "GET",
      }
    );
    if (res.status !== 200) {
      throw new Error("Faild to fetch data");
    }
    return res.json() as Promise<DataTypes>;
  } catch (err) {
    throw new Error("Faild to fetch data");
  }
}

const Page = async ({ params }: { params: ParamsTypes }) => {
  const { msg, data }: DataTypes = await getData(params.slug);
  console.log(msg);
  return (
    <div>
      {/* <MDXRemote source={data} /> */}
      <MarkdownPreview markdownContent={data} />
    </div>
  );
};

export default Page;
