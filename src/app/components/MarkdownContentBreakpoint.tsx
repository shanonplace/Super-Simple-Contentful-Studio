import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export interface MarkdownContentBreakpointProps {
  markdownText: string;
}

// the defined breakpoints for responsiveness
const BREAKPOINTS = [
  { id: "XXL", min: 1600 },
  { id: "XL", min: 1366 },
  { id: "L", min: 1200 },
  { id: "M", min: 992 },
  { id: "S", min: 768 },
  { id: "XS", min: 0 },
];

function getCurrentBreakpoint(width: number) {
  for (const bp of BREAKPOINTS) {
    if (width >= bp.min) return bp.id;
  }
  return "XS";
}

const MarkdownContentBreakpoint: React.FC<MarkdownContentBreakpointProps> = ({
  markdownText,
}) => {
  const [breakpoint, setBreakpoint] = React.useState<string>(() => {
    if (typeof window !== "undefined") {
      return getCurrentBreakpoint(window.innerWidth);
    }
    return "XS";
  });

  React.useEffect(() => {
    function handleResize() {
      setBreakpoint(getCurrentBreakpoint(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div style={{ fontSize: "0.8em", color: "#888", marginBottom: 8 }}>
        Current Breakpoint: <strong>{breakpoint}</strong>
      </div>
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContentBreakpoint;
