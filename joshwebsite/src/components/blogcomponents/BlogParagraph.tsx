import ReactMarkdown from 'react-markdown';

interface BlogParagraphProps {
  content: string;
  className?: string;
}

const BlogParagraph: React.FC<BlogParagraphProps> = ({ content, className = "" }) => {
  return (
    <div className={`mb-6 leading-relaxed text-lg ${className}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogParagraph;