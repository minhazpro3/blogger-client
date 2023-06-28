import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownPreview({
  markdownContent,
}: {
  markdownContent: string;
}) {
  return (
    <div className="markdown-preview-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            console.log(match);
            // match?.map((i) => console.log({ i }));
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          // Map `h1` (`# heading`) to use `h2`s.
          // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
          em: ({ node, ...props }) => <i style={{ color: "red" }} {...props} />,
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
