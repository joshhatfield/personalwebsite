interface BlogParagraphProps {
  content: string;
  className?: string;
}

const BlogParagraph: React.FC<BlogParagraphProps> = ({ content, className = "" }) => {
  return (
    <p className={`mb-6 leading-relaxed text-lg ${className}`}>{content}</p>
  );
};

export default BlogParagraph;