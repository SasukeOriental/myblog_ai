// components/ArticleList.jsx
// 文章列表组件 - 展示多篇文章卡片
// 支持搜索、分类筛选、文章过滤、异步数据获取
// 性能优化：useMemo 缓存计算结果

import ArticleCard from './ArticleCard';
import { useState, useEffect, useMemo } from 'react';
import { fetchArticles, searchArticles } from '../api/articles';

function ArticleList() {
  // ========== 异步数据获取状态 ==========
  const [articles, setArticles] = useState([]);      // 文章列表数据
  const [loading, setLoading] = useState(true);      // 加载状态
  const [error, setError] = useState(null);         // 错误信息

  // ========== 状态管理 ==========
  // 搜索关键词状态
  const [searchQuery, setSearchQuery] = useState('');
  // 选中的分类状态（'全部' 表示不筛选）
  const [selectedCategory, setSelectedCategory] = useState('全部');
  // 搜索结果状态
  const [searchResults, setSearchResults] = useState(null);

  // ========== useEffect - 异步获取文章数据 ==========
  // 组件挂载时获取文章列表
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        // 调用 API 获取数据
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        console.error('获取文章失败:', err);
        setError(err.message || '获取文章失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);  // 空依赖数组：只在组件挂载时执行一次

  // ========== useEffect - 监听 URL 搜索参数 ==========
  useEffect(() => {
    // 从 URL 获取搜索参数 ?q=xxx
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      setSearchQuery(decodeURIComponent(query));
    }
  }, []);  // 组件挂载时执行一次

  // ========== useEffect - 搜索和筛选 ==========
  useEffect(() => {
    // 如果有搜索词或分类筛选，调用搜索 API
    if (searchQuery || selectedCategory !== '全部') {
      const performSearch = async () => {
        try {
          const results = await searchArticles(searchQuery, selectedCategory);
          setSearchResults(results);
        } catch (err) {
          console.error('搜索失败:', err);
          setSearchResults([]);  // 搜索失败时返回空数组
        }
      };
      performSearch();
    } else {
      // 没有筛选条件，使用原始数据
      setSearchResults(null);
    }
  }, [searchQuery, selectedCategory]);  // 当搜索词或分类变化时重新搜索

  // ========== 性能优化：useMemo 缓存分类列表 ==========
  // 只在 articles 数组变化时重新计算
  const categories = useMemo(() => {
    return ['全部', ...new Set(articles.map(article => article.category))];
  }, [articles]);  // 依赖：articles

  // ========== 性能优化：useMemo 缓存显示文章 ==========
  // 只在 searchResults 或 articles 变化时重新计算
  const displayArticles = useMemo(() => {
    return searchResults !== null ? searchResults : articles;
  }, [searchResults, articles]);  // 依赖：searchResults, articles

  return (
    <div className="article-list">
      <h2>最新文章</h2>

      {/* ========== 加载状态 ========== */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      )}

      {/* ========== 错误状态 ========== */}
      {error && (
        <div className="error-state">
          <p>❌ {error}</p>
          <button onClick={() => window.location.reload()}>重新加载</button>
        </div>
      )}

      {/* ========== 正常状态 ========== */}
      {!loading && !error && articles.length > 0 && (
        <>
          {/* 分类筛选区域 */}
          <div className="filter-section">
            <div className="filter-label">
              <span>📁 分类筛选：</span>
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 显示搜索结果提示 */}
            {searchQuery && (
              <p className="search-result">
                搜索 "<strong>{searchQuery}</strong>" 的结果：{displayArticles.length} 篇文章
              </p>
            )}

            {/* 显示筛选结果提示 */}
            {selectedCategory !== '全部' && !searchQuery && (
              <p className="filter-result">
                分类 "{selectedCategory}"：{displayArticles.length} 篇文章
              </p>
            )}
          </div>

          {/* 文章卡片列表 */}
          {displayArticles.length > 0 ? (
            displayArticles.map((article) => (
              <ArticleCard
                key={article.id}  // 使用文章 id 作为 key
                index={article.id - 1}  // 使用 id - 1 作为索引用于跳转
                category={article.category}
                title={article.title}
                summary={article.summary}
                author={article.author}
                date={article.date}
                views={article.views}
                likes={article.likes}
                publishTime={article.publishTime}
              />
            ))
          ) : (
            // 空状态：没有匹配的文章
            <div className="empty-state">
              <p>🔍 没有找到匹配的文章</p>
              <p>试试搜索其他关键词或切换分类</p>
            </div>
          )}
        </>
      )}

      {/* ========== 空状态（无任何文章）========== */}
      {!loading && !error && articles.length === 0 && (
        <div className="empty-state">
          <p>📭 暂无文章</p>
          <button onClick={() => window.location.reload()}>刷新</button>
        </div>
      )}
    </div>
  );
}

export default ArticleList;
