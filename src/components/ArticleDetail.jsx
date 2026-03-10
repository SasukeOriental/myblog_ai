// components/ArticleDetail.jsx
// 文章详情页组件 - 包含评论系统
// 评论系统：表单处理、状态管理、列表渲染
// 数据获取：异步获取文章详情和评论
// 性能优化：useCallback 缓存事件处理函数

import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
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
  // ========== 性能优化：useCallback 缓存事件处理函数 ==========
  // 处理表单输入变化 - 受控组件
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCommentForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }, []);  // 空依赖数组：函数不依赖任何外部变量

  // 处理表单提交 - 异步提交评论
  const handleCommentSubmit = useCallback(async (e) => {
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
      setComments(prevComments => [...prevComments, newComment]);

      // 清空表单
      setCommentForm({ author: '', content: '' });
    } catch (err) {
      console.error('发表评论失败:', err);
      setCommentError(err.message || '发表评论失败，请稍后重试');
    } finally {
      setSubmitting(false);
    }
  }, [articleId, commentForm]);  // 依赖：articleId, commentForm

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
