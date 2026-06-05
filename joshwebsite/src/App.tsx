import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import BlogListPage from "./pages/blog/BlogList.tsx";
import BlogArticlePage from "./pages/blog/BlogArticle.tsx";
import BudgetAiArticle from "./data/blog/01-budget-ai.ts";
import AveArticle from "./data/blog/02-ave.ts";

const articles = [BudgetAiArticle, AveArticle];

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogListPage articles={articles} />} />
        <Route path="/blog/smart-ai-on-a-budget" element={<BlogArticlePage article={BudgetAiArticle} />} />
          <Route path="/blog/ave-context-manager" element={<BlogArticlePage article={AveArticle} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
