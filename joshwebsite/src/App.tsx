import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import BlogListPage from "./pages/blog/BlogList.tsx";
import BlogArticlePage from "./pages/blog/BlogArticle.tsx";
import demoArticle from "./data/blog/demo-article.ts";

const articles = [demoArticle];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogListPage articles={articles} />} />
        <Route path="/blog/:slug" element={<BlogArticlePage article={demoArticle} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
