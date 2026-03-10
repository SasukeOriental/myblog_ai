// components/Header.jsx
// 博客头部导航组件 - 使用 React Router 实现导航
// 包含搜索功能：受控组件 + 状态提升

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  // 获取当前路由位置，用于高亮当前菜单项
  const location = useLocation();
  const currentPath = location.pathname;

  // ========== 受控组件示例 ==========
  // 搜索框的状态管理
  const [searchQuery, setSearchQuery] = useState('');

  // ========== 事件处理 ==========
  // 搜索输入处理函数
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // 触发自定义事件，通知父组件搜索关键词变化
    window.dispatchEvent(new CustomEvent('search', { detail: value }));
  };

  // 按回车键执行搜索
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // 跳转到首页并带上搜索参数
      window.location.href = `/?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* 网站标题 - 点击跳转首页 */}
        <Link to="/" className="logo">
          <h1>我的博客</h1>
        </Link>

        {/* 导航菜单 - 使用 Link 组件实现跳转 */}
        <nav>
          <ul className="nav-list">
            {/* 首页链接 */}
            <li className={currentPath === '/' ? 'active' : ''}>
              <Link to="/">首页</Link>
            </li>

            {/* 关于页面链接 */}
            <li className={currentPath === '/about' ? 'active' : ''}>
              <Link to="/about">关于</Link>
            </li>

            {/* 分类链接（暂时指向首页） */}
            <li>
              <Link to="/">分类</Link>
            </li>

            {/* 联系链接（暂时指向首页） */}
            <li>
              <Link to="/">联系</Link>
            </li>

            {/* 知识问答链接 */}
            <li className={currentPath === '/knowledge-qa' ? 'active' : ''}>
              <Link to="/knowledge-qa">知识问答</Link>
            </li>
          </ul>
        </nav>

        {/* 搜索框 - 受控组件 */}
        <input
          type="text"
          placeholder="搜索文章..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit}
        />
      </div>
    </header>
  );
}

export default Header;
