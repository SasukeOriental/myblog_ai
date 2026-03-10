// App.jsx - 应用的根组件
// 配置路由和页面结构
// 性能优化：代码分割（React.lazy + Suspense）

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import './App.css';

// ========== 性能优化：代码分割 ==========
// 使用 React.lazy 动态导入组件，减少初始加载体积
const ArticleList = lazy(() => import('./components/ArticleList'));
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));
const About = lazy(() => import('./components/About'));
const KnowledgeQA = lazy(() => import('./components/KnowledgeQA'));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* 顶部导航 */}
        <Header />

        {/* 主要内容区域 - 路由配置 */}
        <main className="main-content">
          {/* ========== 性能优化：Suspense 加载状态 ========== */}
          <Suspense fallback={
            <div className="loading-state">
              <div className="spinner"></div>
              <p>加载页面中...</p>
            </div>
          }>
            <Routes>
              {/* 首页路由：显示文章列表 */}
              <Route path="/" element={<ArticleList />} />

              {/* 文章详情页路由：动态参数 :articleId */}
              <Route path="/article/:articleId" element={<ArticleDetail />} />

              {/* 关于页面路由 */}
              <Route path="/about" element={<About />} />

              {/* 知识问答页面路由 */}
              <Route path="/knowledge-qa" element={<KnowledgeQA />} />

              {/* 404 页面：未匹配的路由 */}
              <Route path="*" element={<div className="not-found">404 - 页面未找到</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
