import ReactMarkdown from "react-markdown";
export default function MarkdownPreview({
  markdownContent,
}: {
  markdownContent: string;
}) {
  return (
    <div className="markdown-preview-custom">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
