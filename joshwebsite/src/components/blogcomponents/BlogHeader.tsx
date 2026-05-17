interface BlogHeaderProps {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, author, tags }) => {
  return (
    <header className="mb-8 pb-6 border-b border-base-300">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60">
        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</time>
        {author && <span>by {author}</span>}
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag} className="badge badge-ghost">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHeader;