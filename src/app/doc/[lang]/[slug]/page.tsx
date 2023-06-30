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
  data: string;
}

async function getData(slug: string): Promise<DataTypes> {
  const res = await fetch(`http://localhost:3000/api/v2/doc/${slug}`, {
    method: "GET",
  });
  if (res.status !== 200) {
    throw new Error("Faild to fetch data");
  }
  return res.json() as Promise<DataTypes>;
}

const Page = async ({ params }: { params: ParamsTypes }) => {
  const { msg, data }: DataTypes = await getData(params.slug);
  console.log(msg, data);
  return (
    <div>
      {data}
      <MarkdownPreview markdownContent={data} />
    </div>
  );
};

export default Page;
