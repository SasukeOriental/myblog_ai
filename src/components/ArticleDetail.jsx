// components/ArticleDetail.jsx
// 文章详情页组件 - 包含评论系统
// 评论系统：表单处理、状态管理、列表渲染
// 数据获取：异步获取文章详情和评论

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArticleById, fetchComments, postComment } from '../api/articles';

function ArticleDetail() {
  // 获取路由参数
  const { articleId } = useParams();

  // ========== 异步数据获取状态 ==========
  const [article, setArticle] = useState(null);    // 文章详情数据
  const [comments, setComments] = useState([]);    // 评论列表数据
  const [articleLoading, setArticleLoading] = useState(true);   // 文章加载状态
  const [commentsLoading, setCommentsLoading] = useState(false); // 评论加载状态
  const [articleError, setArticleError] = useState(null);       // 文章错误信息
  const [commentError, setCommentError] = useState(null);       // 评论错误信息
  const [submitting, setSubmitting] = useState(false);           // 提交状态

  // ========== 评论表单状态 ==========
  const [commentForm, setCommentForm] = useState({
    author: '',
    content: ''
  });

  // ========== useEffect - 获取文章详情 ==========
  useEffect(() => {
    const loadArticle = async () => {
      try {
        setArticleLoading(true);
        setArticleError(null);

        // 调用 API 获取文章详情
        const data = await fetchArticleById(articleId);
        setArticle(data);
      } catch (err) {
        console.error('获取文章失败:', err);
        setArticleError(err.message || '获取文章失败');
      } finally {
        setArticleLoading(false);
      }
    };

    loadArticle();
  }, [articleId]);  // 当 articleId 变化时重新获取

  // ========== useEffect - 获取评论列表 ==========
  useEffect(() => {
    const loadComments = async () => {
      try {
        setCommentsLoading(true);
        setCommentError(null);

        // 调用 API 获取评论列表
        const data = await fetchComments(articleId);
        setComments(data);
      } catch (err) {
        console.error('获取评论失败:', err);
        setCommentError('获取评论失败');
      } finally {
        setCommentsLoading(false);
      }
    };

    loadComments();
  }, [articleId]);  // 当 articleId 变化时重新获取

  // ========== 表单处理函数 ==========
  // 处理表单输入变化 - 受控组件
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentForm({
      ...commentForm,
      [name]: value
    });
  };

  // 处理表单提交 - 异步提交评论
  const handleCommentSubmit = async (e) => {
    e.preventDefault();  // 阻止表单默认提交行为

    // 表单验证
    if (!commentForm.author.trim() || !commentForm.content.trim()) {
      alert('请填写昵称和评论内容');
      return;
    }

    try {
      setSubmitting(true);
      setCommentError(null);

      // 调用 API 提交评论
      const newComment = await postComment(articleId, {
        author: commentForm.author.trim(),
        content: commentForm.content.trim()
      });

      // 更新评论列表（乐观更新）
      setComments([...comments, newComment]);

      // 清空表单
      setCommentForm({ author: '', content: '' });
    } catch (err) {
      console.error('发表评论失败:', err);
      setCommentError(err.message || '发表评论失败，请稍后重试');
    } finally {
      setSubmitting(false);
    }
  };

  // 模拟文章详情数据
  const articleData = {
    0: {
      category: '前端开发',
      title: 'React 入门指南：从零开始学习',
      author: '张三',
      date: '2024-02-25',
      views: '1,234',
      likes: 156,
      content: `
        <h2>什么是 React？</h2>
        <p>React 是由 Facebook 开发的用于构建用户界面的 JavaScript 库。它专注于构建单页应用程序（SPA），通过组件化的方式让开发者更高效地构建可复用的 UI。</p>

        <h2>React 的核心概念</h2>

        <h3>1. 组件（Components）</h3>
        <p>组件是 React 的核心概念。组件是可复用的 UI 片段，每个组件都有自己的状态（State）和属性（Props）。组件可以是函数组件或类组件。</p>

        <h3>2. JSX</h3>
        <p>JSX 是 JavaScript 的语法扩展，允许我们在 JavaScript 中写类似 HTML 的代码。JSX 让代码更直观、更易读。</p>

        <h3>3. Props</h3>
        <p>Props 是组件的输入参数，用于父组件向子组件传递数据。Props 是只读的，不能在子组件中修改。</p>

        <h3>4. State</h3>
        <p>State 是组件的内部状态，可以随时间变化。当 State 发生变化时，组件会重新渲染。</p>

        <h2>为什么要学习 React？</h2>
        <ul>
          <li>⚡ 高性能：虚拟 DOM 提高了渲染效率</li>
          <li>🔄 可复用性：组件化开发提高代码复用</li>
          <li>🌐 生态丰富：有大量的第三方库支持</li>
          <li>👥 社区活跃：大量教程和资源</li>
        </ul>

        <h2>如何开始学习？</h2>
        <p>建议的学习路径：</p>
        <ol>
          <li>学习 HTML、CSS、JavaScript 基础</li>
          <li>理解 ES6+ 新特性</li>
          <li>学习 React 基础概念（组件、JSX、Props、State）</li>
          <li>掌握 React Hooks（useState、useEffect 等）</li>
          <li>学习路由管理（React Router）</li>
          <li>学习状态管理（Redux、Context API）</li>
        </ol>
      `
    },
    1: {
      category: 'JavaScript',
      title: '深入理解 JavaScript 闭包',
      author: '李四',
      date: '2024-02-24',
      views: '987',
      likes: 89,
      content: `
        <h2>什么是闭包？</h2>
        <p>闭包（Closure）是 JavaScript 中最重要的概念之一。简单来说，闭包是指有权访问另一个函数作用域中变量的函数。</p>

        <h2>闭包的形成</h2>
        <p>当一个函数返回另一个函数，且返回的函数引用了外部函数的变量时，就形成了闭包。</p>

        <pre><code>function outer() {
  const message = 'Hello, Closure!';

  function inner() {
    console.log(message);  // 访问外部变量
  }

  return inner;
}

const myClosure = outer();
myClosure();  // 输出: Hello, Closure!</code></pre>

        <h2>闭包的常见应用</h2>

        <h3>1. 数据私有化</h3>
        <pre><code>function createCounter() {
  let count = 0;

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.getCount());  // 0
counter.increment();
console.log(counter.getCount());  // 1</code></pre>

        <h3>2. 柯里化（Currying）</h3>
        <pre><code>function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3));  // 6</code></pre>

        <h3>3. 模块模式</h3>
        <pre><code>const myModule = (function() {
  let privateVar = 0;

  return {
    increment: () => privateVar++,
    getValue: () => privateVar
  };
})();</code></pre>

        <h2>闭包的注意事项</h2>
        <ul>
          <li>⚠️ 内存泄漏：如果闭包大量使用，可能导致内存占用过高</li>
          <li>⚠️ 性能问题：每次创建闭包都会消耗内存</li>
          <li>⚠️ 作用域链复杂：理解闭包需要理解 JavaScript 的作用域链</li>
        </ul>
      `
    },
    2: {
      category: 'CSS 技巧',
      title: '10 个实用的 CSS 布局技巧',
      author: '王五',
      date: '2024-02-23',
      views: '2,456',
      likes: 342,
      content: `
        <h2>CSS 布局的两大神器</h2>
        <p>Flexbox 和 Grid 是现代 CSS 布局的两大核心技术，它们让复杂的布局变得简单。</p>

        <h2>Flexbox 布局技巧</h2>

        <h3>1. 水平居中</h3>
        <pre><code>.container {
  display: flex;
  justify-content: center;
}</code></pre>

        <h3>2. 垂直居中</h3>
        <pre><code>.container {
  display: flex;
  align-items: center;
}</code></pre>

        <h3>3. 完美居中</h3>
        <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>

        <h3>4. 等分列宽</h3>
        <pre><code>.container {
  display: flex;
}

.item {
  flex: 1;  /* 每个子元素平分空间 */
}</code></pre>

        <h3>5. 响应式换行</h3>
        <pre><code>.container {
  display: flex;
  flex-wrap: wrap;
}</code></pre>

        <h2>Grid 布局技巧</h2>

        <h3>6. 基础网格</h3>
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>

        <h3>7. 自定义列宽</h3>
        <pre><code>.container {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
}</code></pre>

        <h3>8. 自动填充</h3>
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}</code></pre>

        <h2>其他实用技巧</h2>

        <h3>9. aspect-ratio（宽高比）</h3>
        <pre><code>.image {
  aspect-ratio: 16 / 9;
  width: 100%;
}</code></pre>

        <h3>10. clamp()（响应式字体）</h3>
        <pre><code>.text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}</code></pre>

        <h2>选择 Flexbox 还是 Grid？</h2>
        <p>一般来说：</p>
        <ul>
          <li>一维布局（行或列）→ Flexbox</li>
          <li>二维布局（行和列）→ Grid</li>
        </ul>
      `
    }
  };

  // 获取当前文章数据
  const article = articleData[articleId] || articleData[0];

  return (
    <div className="article-detail">
      <button className="back-btn" onClick={() => window.history.back()}>
        ← 返回文章列表
      </button>

      {/* ========== 文章加载状态 ========== */}
      {articleLoading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>加载文章中...</p>
        </div>
      )}

      {/* ========== 文章错误状态 ========== */}
      {articleError && (
        <div className="error-state">
          <p>❌ {articleError}</p>
          <button onClick={() => window.location.reload()}>重新加载</button>
        </div>
      )}

      {/* ========== 文章内容 ========== */}
      {!articleLoading && !articleError && article && (
        <article className="detail-content">
          <div className="detail-header">
            <span className="category">{article.category}</span>
            <h1>{article.title}</h1>

            <div className="article-meta">
              <span className="author">作者：{article.author}</span>
              <span className="date">发布于：{article.date}</span>
              <span className="views">👁️ {article.views}</span>
              <span className="likes">❤️ {article.likes}</span>
            </div>
          </div>

          <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      )}

      {/* ========== 评论系统 ========== */}
      {!articleLoading && !articleError && article && (
        <div className="comments-section">
          <h2>💬 评论 ({comments.length})</h2>

          {/* 评论表单 - 受控组件示例 */}
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="form-group">
              <label htmlFor="author">昵称：</label>
              <input
                type="text"
                id="author"
                name="author"
                value={commentForm.author}
                onChange={handleInputChange}
                placeholder="请输入你的昵称"
                className="form-input"
                disabled={submitting}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">评论内容：</label>
              <textarea
                id="content"
                name="content"
                value={commentForm.content}
                onChange={handleInputChange}
                placeholder="请输入你的评论..."
                className="form-textarea"
                rows="4"
                disabled={submitting}
                required
              />
            </div>

            {/* 提交错误提示 */}
            {commentError && (
              <p className="error-message">❌ {commentError}</p>
            )}

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? '发表中...' : '发表评论'}
            </button>
          </form>

          {/* 评论列表 */}
          <div className="comments-list">
            {commentsLoading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>加载评论中...</p>
              </div>
            ) : comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p className="comment-content">{comment.content}</p>
                </div>
              ))
            ) : (
              // 空状态
              <div className="empty-comments">
                <p>📭 还没有评论，快来发表第一条评论吧！</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
