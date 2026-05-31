interface BlogQuoteProps {
  content: string;
  author?: string;
}

const BlogQuote: React.FC<BlogQuoteProps> = ({ content, author }) => {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-primary italic">
      <p className="text-xl mb-2">{content}</p>
      {author && (
        <cite className="text-base-content/60 text-sm not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
};

export default BlogQuote;