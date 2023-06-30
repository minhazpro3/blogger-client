/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RiExternalLinkFill } from "react-icons/ri";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { type ReactNode } from "react";

export default function MarkdownPreview({
  markdownContent,
}: {
  markdownContent: string;
}) {
  const links: { slug: string; title: string }[] = [];
  const transformedContent = markdownContent.replace(
    /^(#+)\s+(.*?)\s*$/gm,
    (match: string, hashes: string, title: string) => {
      const level = hashes.length;
      const id = title.toLowerCase().replace(/\s/g, "-");
      links.push({ slug: id, title });
      return `<h${level} id="${id}"><a href="#${id}" className="hash-link">#</a> ${title}</h${level}>`;
    }
  );

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="markdown-preview-custom">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                // match?.map((i) => console.log({ i }));
                return !inline && match ? (
                  <div>
                    <div className="language-code-head">
                      {match[1] === "js" ? "javascript" : match[1]}
                    </div>
                    {
                      <SyntaxHighlighter
                        className="language-code-body"
                        {...props}
                        // eslint-disable-next-line react/no-children-prop
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                      />
                    }
                  </div>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
              // Map `h1` (`# heading`) to use `h2`s.
              // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              em: ({ node, ...props }) => (
                <i style={{ color: "red" }} {...props} />
              ),
              h1: (props) => <HeadingComponent {...props} />,
              h2: (props) => <HeadingComponent {...props} />,
              h3: (props) => <HeadingComponent {...props} />,
              h4: (props) => <HeadingComponent {...props} />,
              h5: (props) => <HeadingComponent {...props} />,
              h6: (props) => <HeadingComponent {...props} />,
            }}
          >
            {transformedContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="fixed  right-0 top-16 h-full w-64 bg-gray-900 p-4">
        <strong className="mb-8 mt-8 block text-lg">Links - </strong>
        {links.map((item, index) => {
          return (
            <a className="mb-1 flex gap-2" key={index} href={`#${item.slug}`}>
              <RiExternalLinkFill color="white" className="mt-2" /> {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

interface HeadingComponentProps {
  level: number;
  children: React.ReactNode;
}

const HeadingComponent = ({ children, level }: HeadingComponentProps) => {
  const id = ((children as ReactNode[])[0] as string)
    ?.trim()
    .toLowerCase()
    .replace(/\s/g, "-");
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      {React.createElement(`h${level}`, { id }, children)}
    </React.Fragment>
  );
};

// const HeadingComponent: React.FC<HeadingComponentProps> = ({
//   level,
//   children,
// }) => {
//   // const id = ((children as ReactNode[])[1] as string)
//   // .trim()
//   // .toLowerCase()
//   // .replace(/\s/g, "-");
//   console.log(chlidren);
//   const handleClick = () => {
//     const element = document.getElementById("id");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <React.Fragment>
//       {React.createElement(`h${level}`, { "id" }, children)}
//     </React.Fragment>
//   );
// };
