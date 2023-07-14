"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark";

export default function SyntaxHighlight({
  className,
  children,
}: {
  className: string;
  children: string;
}) {
  console.log({ className });
  console.log({ children });
  const language = className?.replace("language-", "sfdsf");

  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      PreTag={React.Fragment}
    >
      {children}
    </SyntaxHighlighter>
  );
}
