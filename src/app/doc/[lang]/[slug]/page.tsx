"use client";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { NextPage } from "next/types";
interface ParamsTypes {
  slug: string;
  lang: string;
}

async function getData({ slug }: any) {
  const res = await axios.get(`/api/v1/doc/slug/${slug as string}`);
  if (res.status !== 200) {
    throw new Error("Faild to fetch data");
  }
  return res;
}

const Page = async ({ params }: ParamsTypes) => {
  const router = useRouter();
  const data = await getData({ slug: params.slug });
  console.log(data);
  return <div>Welcome to slug {params.slug}</div>;
};

export default Page;
