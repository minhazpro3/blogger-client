import MarkdownPreview from "@/lib/markdownPreview";
import { getPostBySlug } from "@/lib/mdx";

interface MetaTypes {
  title: string;
  description?: string;
  keywords?: string;
}
// Load single page content as string to use getPostBySlug query
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  if (!content) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { meta, content };
};
// Generate Meta Data using document title
export async function generateMetadata({ params }: { params: string }) {
  const { meta } = await getPageContent(
    (params as unknown as { slug: string }).slug
  );
  return { title: (meta.data as MetaTypes).title };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-24">
      <div className="prose">
        <MarkdownPreview markdownContent={content} />
      </div>
    </section>
  );
};

export default Page;
