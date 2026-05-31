import { useState } from "react";

interface BlogCodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const BlogCodeBlock: React.FC<BlogCodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-lg overflow-hidden bg-base-300">
      {filename && (
        <div className="px-4 py-2 bg-base-200 border-b border-base-300 text-sm font-mono">
          {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyCode}
          className="absolute top-2 right-2 btn btn-ghost btn-sm text-xs"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language} text-sm`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default BlogCodeBlock;