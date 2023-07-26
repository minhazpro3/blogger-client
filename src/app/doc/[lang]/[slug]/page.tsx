import MarkdownPreview from "@/lib/markdownPreview";
import { getPostBySlug } from "@/lib/mdx";

interface MetaTypes {
  title: string;
  description?: string;
  keywords?: string;
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: { params: string }) {
  const { meta } = await getPageContent(
    (params as unknown as { slug: string }).slug
  );
  console.log(meta);
  return { title: (meta as any).title };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

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
