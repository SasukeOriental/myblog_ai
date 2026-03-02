// App.jsx - 应用的根组件
// 配置路由和页面结构

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* 顶部导航 */}
        <Header />

        {/* 主要内容区域 - 路由配置 */}
        <main className="main-content">
          <Routes>
            {/* 首页路由：显示文章列表 */}
            <Route path="/" element={<ArticleList />} />

            {/* 文章详情页路由：动态参数 :articleId */}
            <Route path="/article/:articleId" element={<ArticleDetail />} />

            {/* 关于页面路由 */}
            <Route path="/about" element={<About />} />

            {/* 404 页面：未匹配的路由 */}
            <Route path="*" element={<div className="not-found">404 - 页面未找到</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
