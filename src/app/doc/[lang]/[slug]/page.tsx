import { MDXRemote } from "next-mdx-remote";
import MarkdownPreview from "@/lib/markdownPreview";
import { getPostBySlug } from "@/lib/mdx";
import { MDXProvider } from "@mdx-js/react";
// import { getPostBySlug } from "@/pages/api/v2/doc/[slug]";
// interface ParamsTypes {
//   slug: string;
//   lang: string;
// }

// interface DataTypes {
//   msg: string;
//   data: string;
// }

// async function getData(slug: string): Promise<DataTypes> {
//   try {
//     const res = await fetch(
//       `https://blogger-front.vercel.app/api/v2/doc/${slug}`,
//       // `http://localhost:3000/api/v2/doc/${slug}`,
//       {
//         method: "GET",
//       }
//     );
//     if (res.status !== 200) {
//       throw new Error("Faild to fetch data");
//     }
//     return res.json() as Promise<DataTypes>;
//   } catch (err) {
//     throw new Error("Faild to fetch data");
//   }
// }

// const Page = async ({ params }: { params: ParamsTypes }) => {
//   const { msg, data }: DataTypes = await getData(params.slug);
//   console.log(msg);
//   return (
//     <div>
//       {/* <MDXRemote source={data} /> */}
//       <MarkdownPreview markdownContent={data} />
//     </div>
//   );
// };

// export default Page;

const getPageContent = async (slug: string) => {
  try {
    const { meta, content } = await getPostBySlug(slug);
    return { meta, content };
  } catch (err) {
    new Error("Slug not found");
  }
};

interface MetaType {
  title?: string;
  description?: string;
  keywords?: string;
}

interface MetaTypes {
  meta?: MetaType | undefined;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metaData: MetaTypes = await getPageContent(params.slug);
  return { title: metaData?.meta && metaData.meta.title };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content }: { content?: any } = await getPageContent(params.slug);
  return (
    <section className="prose py-24">
      {/* <div className='container py-4 prose'>{content}</div> */}
      {/* <MDXRemote
        components={...content}
        compiledSource={""}
        scope={undefined}
        frontmatter={undefined}
      /> */}
      {content}{" "}
    </section>
  );
};

export default Page;
