import { Link, useParams } from "react-router-dom";
import Pageheader from "../../components/pagebody/Pageheader.tsx";
import Footer from "../../components/pagebody/Footer.tsx";
import {
  BlogHeader,
  BlogParagraph,
  BlogImage,
  BlogMenu,
  BlogCodeBlock,
  BlogQuote,
  BlogListBlock
} from "../../components/blogcomponents";
import type { BlogArticle, BlogContentBlock } from "./types";

interface BlogArticlePageProps {
  articles: BlogArticle[];
}

const renderContentBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case 'header':
      return (
        <h2 
          key={index} 
          id={block.props.id as string}
          className="text-2xl font-bold mt-12 mb-6 scroll-mt-20"
        >
          {block.props.title as string}
        </h2>
      );
    case 'paragraph':
      return <BlogParagraph key={index} content={block.props.content as string} />;
    case 'image':
      return (
        <BlogImage 
          key={index}
          src={block.props.src as string}
          alt={block.props.alt as string}
          caption={block.props.caption as string | undefined}
        />
      );
    case 'menu':
      return <BlogMenu key={index} items={block.props.items as Array<{id: string; label: string}>} />;
    case 'code':
      return (
        <BlogCodeBlock
          key={index}
          code={block.props.code as string}
          language={block.props.language as string}
          filename={block.props.filename as string | undefined}
        />
      );
    case 'quote':
      return (
        <BlogQuote
          key={index}
          content={block.props.content as string}
          author={block.props.author as string | undefined}
        />
      );
    case 'list':
      return (
        <BlogListBlock
          key={index}
          items={block.props.items as string[]}
          type={block.props.type as 'ordered' | 'unordered'}
        />
      );
    default:
      return null;
  }
};

const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ articles }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug) || null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Pageheader />
        <main className="flex-1 pt-28">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Article Not Found</h1>
            <p className="text-lg text-base-content/70 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Pageheader />
      <main className="flex-1 pt-28">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <BlogHeader
            title={article.title}
            date={article.date}
            author={article.author}
            tags={article.tags}
          />
          
          {article.menuItems.length > 0 && (
            <BlogMenu items={article.menuItems} />
          )}
          
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => renderContentBlock(block, index))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-base-300">
            <Link to="/blog" className="btn btn-ghost">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticlePage;