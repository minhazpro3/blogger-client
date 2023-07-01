"use client";
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
  const res = await fetch(
    `https://blogger-front.vercel.app/api/v2/doc/${slug}`,
    {
      method: "GET",
    }
  );
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
      <MarkdownPreview markdownContent={data} />
    </div>
  );
};

export default Page;
