/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MarkdownPreview from "@/lib/markdownPreview";
import { getPostBySlug } from "@/lib/mdx";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { meta } = await getPageContent(params.slug);
  return { title: (meta as any).title };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);
  console.log(content);
  return (
    <section className="py-24">
      {/* <div className='container py-4 prose'>{content}</div> */}
      {/* <MarkdownPreview markdownContent={content} /> */}
      <div className="prose">
        <MarkdownPreview markdownContent={content} />
      </div>
    </section>
  );
};

export default Page;
