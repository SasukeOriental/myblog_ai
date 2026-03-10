// components/ArticleCard.jsx
// 文章卡片组件 - 展示单篇文章
// 通过 props 接收文章数据，支持点击跳转到详情页
// 性能优化：React.memo 组件记忆化

import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

function ArticleCard(props) {
  // 从 props 中解构出各个属性
  const { category, title, summary, author, date, views, likes: initialLikes, publishTime, index } = props;

  // ========== useState Hook ==========
  // 创建点赞数状态，初始值为父组件传递的 likes
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [liked, setLiked] = useState(false);  // 记录是否已点赞
  const [relativeTime, setRelativeTime] = useState('');  // 相对时间显示

  // ========== useEffect Hook ==========
  // 使用 useEffect 处理副作用：定时更新相对时间

  // 辅助函数：计算相对时间
  const getRelativeTime = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;  // 毫秒差

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (diff < minute) {
      return '刚刚';
    } else if (diff < hour) {
      return `${Math.floor(diff / minute)} 分钟前`;
    } else if (diff < day) {
      return `${Math.floor(diff / hour)} 小时前`;
    } else {
      return `${Math.floor(diff / day)} 天前`;
    }
  };

  // useEffect：组件挂载时设置定时器，卸载时清除
  useEffect(() => {
    // 初始化相对时间
    setRelativeTime(getRelativeTime(publishTime));

    // 设置定时器，每分钟更新一次
    const timer = setInterval(() => {
      setRelativeTime(getRelativeTime(publishTime));
    }, 60000);  // 60秒 = 1分钟

    // 清除函数：组件卸载时清除定时器
    return () => {
      clearInterval(timer);
    };
  }, [publishTime]);  // 依赖项：publishTime 变化时重新执行

  // 将 views 字符串转换为数字，去掉逗号
  const viewsNumber = parseInt(views.replace(/,/g, ''), 10);

  // 条件渲染：阅读量超过 1000 时显示热门标签
  const isHot = viewsNumber > 1000;

  // ========== 点赞处理函数 ==========
  const handleLike = () => {
    if (liked) {
      // 如果已点赞，取消点赞
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      // 如果未点赞，添加点赞
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  return (
    <article className="article-card">
      {/* 顶部标签区域 */}
      <div className="card-header">
        {/* 文章分类标签 */}
        <span className="category">{category}</span>

        {/* 条件渲染：热门标签 */}
        {isHot && <span className="hot-tag">🔥 热门</span>}
      </div>

      {/* 文章标题 - 点击跳转到详情页 */}
      <Link to={`/article/${index}`}>
        <h2>{title}</h2>
      </Link>

      {/* 文章摘要 */}
      <p className="summary">{summary}</p>

      {/* 文章元信息：作者、相对时间、阅读量 */}
      <div className="article-meta">
        <span className="author">作者：{author}</span>
        <span className="date">🕐 {relativeTime}</span>
        <span className="views">👁️ {views}</span>
      </div>

      {/* 底部按钮区域 */}
      <div className="card-actions">
        {/* 点赞按钮 */}
        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? '❤️ 已赞' : '🤍 点赞'} {likeCount}
        </button>

        {/* 阅读更多按钮 - 点击跳转到详情页 */}
        <Link to={`/article/${index}`} className="read-more-btn">
          阅读全文
        </Link>
      </div>
    </article>
  );
}

// ========== 性能优化：React.memo 组件记忆化 ==========
// 只有当 props 发生变化时才重新渲染组件
export default memo(ArticleCard);
