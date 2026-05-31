type ListType = 'ordered' | 'unordered';

interface BlogListProps {
  items: string[];
  type: ListType;
}

const BlogList: React.FC<BlogListProps> = ({ items, type }) => {
  const listClassName = type === 'ordered' ? "list-decimal" : "list-disc";
  
  return (
    <ul className={`mb-6 pl-6 space-y-2 ${listClassName}`}>
      {items.map((item, index) => (
        <li key={index} className="text-lg">{item}</li>
      ))}
    </ul>
  );
};

export default BlogList;