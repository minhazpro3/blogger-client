"use client";
import axios from "axios";
import MarkdownPreview from "@/lib/markdownPreview";
import { useRouter } from "next/navigation";
import { NextPage } from "next/types";
interface ParamsTypes {
  slug: string;
  lang: string;
}

interface DataTypes {
  msg: string;
  data: {
    _id: string;
    name: string;
    content: string;
    tags: string[];
    slug: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    topic: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/v2/doc/${slug}`, {
    method: "GET",
  });
  if (res.status !== 200) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
}

const Page = async ({ params }: { params: ParamsTypes }) => {
  const { msg, data } = await getData(params.slug);
  console.log(msg, data);
  return (
    <div>
      {data}
      {/* <MarkdownPreview markdownContent={content} /> */}
    </div>
  );
};

export default Page;
