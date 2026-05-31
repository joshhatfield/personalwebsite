import { Link } from "react-router-dom";
import Pageheader from "../../components/pagebody/Pageheader.tsx";
import Footer from "../../components/pagebody/Footer.tsx";
import type { BlogArticle } from "./types";

interface BlogListProps {
  articles: BlogArticle[];
}

const BlogListPage: React.FC<BlogListProps> = ({ articles }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Pageheader />
      <main className="flex-1 pt-28">
        <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          
          {articles.length === 0 ? (
            <p className="text-lg text-base-content/70">No articles yet...</p>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <article key={article.slug} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="card-body">
                    <h2 className="card-title text-2xl">
                      <Link 
                        to={`/blog/${article.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap gap-3 text-sm text-base-content/60 mb-3">
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>by {article.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="badge badge-secondary">{tag}</span>
                      ))}
                    </div>
                    <div className="card-actions justify-end">
                      <Link to={`/blog/${article.slug}`} className="btn btn-primary btn-sm">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogListPage;