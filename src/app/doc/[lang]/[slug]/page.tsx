"use client";
import axios from "@/lib/axios";
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

async function getData({ slug }: any) {
  const res = await axios.get(`/api/v1/doc/slug/${slug as string}`);
  if (res.status !== 200) {
    throw new Error("Faild to fetch data");
  }
  return res;
}

const Page = async ({ params }: { params: ParamsTypes }) => {
  const router = useRouter();
  const data = await getData({ slug: params.slug });
  const { content, _id } = (data.data as DataTypes).data || {};
  return (
    <div>
      Welcome to slug {_id} <MarkdownPreview markdownContent={content} />
    </div>
  );
};

export default Page;
