"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeHighlighter({ code }: { code: string }) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
