import MarkdownPreview from "@/lib/markdownPreview";
import { getPostBySlug } from "@/lib/mdx";

interface MetaData {
  title: string;
}

interface Meta {
  data: MetaData;
}

// Load single page content as string to use getPostBySlug query
const getPageContent = (slug: string) => {
  const result = getPostBySlug(slug);
  if (!result) {
    // Handle the case when getPostBySlug returns undefined
    // For example, you could throw an error or return a default value
    throw new Error("Post not found");
  }

  const { meta, content } = result;
  return { meta, content };
};
// Helper function to convert generic 'meta.data' to 'MetaData'
function convertToMetaData(data: { [key: string]: any }): MetaData {
  return {
    title: (data as MetaData).title || "", // a default value if 'title' is missing
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({ params }: { params: string }) {
  const { meta } = getPageContent((params as unknown as { slug: string }).slug);
  // Convert generic 'meta.data' to 'MetaData'
  const metaData: MetaData = convertToMetaData(meta.data);
  // Create the 'Meta' object with the converted data
  const metaObject: Meta = {
    data: metaData,
  };
  return metaObject;
}

const Page = ({ params }: { params: { slug: string } }) => {
  const { content } = getPageContent(params.slug);

  return (
    <section className="py-24">
      <div className="prose">
        <MarkdownPreview markdownContent={content} />
      </div>
    </section>
  );
};

export default Page;
