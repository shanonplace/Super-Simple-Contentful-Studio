"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export interface MarkdownContentProps {
  markdownText: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ markdownText }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
      {markdownText}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
