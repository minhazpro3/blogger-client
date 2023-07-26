function SyntaxHighlighterCom({
  inline,
  match,
  matchLanguage,
  children,
  className,
  ...props
}) {
  return !inline && match ? (
    <div>
      <div className="language-code-head">{matchLanguage}</div>
      <SyntaxHighlighter
        className="language-code-body"
        {...props}
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        style={dark}
        language={match?.[1] ?? ""}
        PreTag="div"
      />
    </div>
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  );
}

export default SyntaxHighlighterCom;
