// components/About.jsx
// 关于页面组件

function About() {
  return (
    <div className="about-page">
      <h1>关于我们</h1>

      <div className="about-content">
        <section className="about-section">
          <h2>📖 项目介绍</h2>
          <p>这是一个基于 React 开发的个人博客系统，用于学习和实践 React 核心概念。</p>
        </section>

        <section className="about-section">
          <h2>🎯 学习目标</h2>
          <ul>
            <li>✅ React 基础（组件、JSX）</li>
            <li>✅ Props 和 State</li>
            <li>✅ React Hooks（useState、useEffect）</li>
            <li>✅ React Router（路由管理）</li>
            <li>⬜ 数据获取（API 集成）</li>
            <li>⬜ 状态管理（Context API、Redux）</li>
            <li>⬜ 性能优化</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🛠️ 技术栈</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-name">React 19</span>
              <span className="tech-desc">用户界面库</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Vite 7</span>
              <span className="tech-desc">构建工具</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">React Router</span>
              <span className="tech-desc">路由管理</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>💡 功能特性</h2>
          <ul>
            <li>📝 文章列表展示</li>
            <li>🔥 热门文章标记</li>
            <li>❤️ 点赞功能</li>
            <li>🕐 实时时间更新</li>
            <li>📄 文章详情页</li>
            <li>🔍 响应式设计</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
