// api/articles.js
// API 请求函数
// 在实际项目中，这里会是真实的后端 API 调用

// ========== 从自动生成的文件导入文章数据 ==========
import { articlesData } from './articles.data.js';

// ========== 模拟评论数据 ==========
const commentsData = {
  1: [
    { id: 1, author: '前端爱好者', content: '写得非常好，通俗易懂！', date: '2024-02-25 10:30' },
    { id: 2, author: '小白', content: '终于理解了 React 组件，感谢分享！', date: '2024-02-25 14:20' }
  ],
  2: [
    { id: 1, author: 'JS学习者', content: '闭包确实是难点，这篇讲得很清楚', date: '2024-02-24 09:15' }
  ],
  3: [
    { id: 1, author: 'CSS达人', content: '这些技巧很实用，收藏了！', date: '2024-02-23 16:45' },
    { id: 2, author: '新手', content: 'Grid 真的很好用', date: '2024-02-23 18:30' },
    { id: 3, author: '设计师', content: 'aspect-ratio 这个属性之前不知道，学习了', date: '2024-02-23 20:10' }
  ]
};

// ========== 模拟延迟函数（模拟网络请求）==========
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// ========== API 函数 ==========

/**
 * 获取所有文章列表
 * @returns {Promise<Array>} 文章数组
 */
export async function fetchArticles() {
  // 模拟网络延迟 500ms
  await delay(500);

  // 随机模拟失败（10% 概率）
  if (Math.random() < 0.1) {
    throw new Error('获取文章列表失败');
  }

  return articlesData;
}

/**
 * 获取单篇文章详情
 * @param {number} articleId - 文章 ID
 * @returns {Promise<Object>} 文章对象
 */
export async function fetchArticleById(articleId) {
  // 模拟网络延迟 300ms
  await delay(300);

  const article = articlesData.find(a => a.id === Number(articleId));

  if (!article) {
    throw new Error('文章不存在');
  }

  return article;
}

/**
 * 获取文章的评论列表
 * @param {number} articleId - 文章 ID
 * @returns {Promise<Array>} 评论数组
 */
export async function fetchComments(articleId) {
  // 模拟网络延迟 200ms
  await delay(200);

  return commentsData[articleId] || [];
}

/**
 * 发表评论
 * @param {number} articleId - 文章 ID
 * @param {Object} commentData - 评论数据 { author, content }
 * @returns {Promise<Object>} 新评论对象
 */
export async function postComment(articleId, commentData) {
  // 模拟网络延迟 400ms
  await delay(400);

  // 验证数据
  if (!commentData.author || !commentData.content) {
    throw new Error('评论内容不能为空');
  }

  const newComment = {
    id: Date.now(),
    author: commentData.author,
    content: commentData.content,
    date: new Date().toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  // 添加到模拟数据
  if (!commentsData[articleId]) {
    commentsData[articleId] = [];
  }
  commentsData[articleId].push(newComment);

  return newComment;
}

/**
 * 搜索文章
 * @param {string} query - 搜索关键词
 * @param {string} category - 分类筛选
 * @returns {Promise<Array>} 匹配的文章数组
 */
export async function searchArticles(query, category = '全部') {
  // 模拟网络延迟 300ms
  await delay(300);

  let filtered = articlesData;

  // 搜索过滤
  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.summary.toLowerCase().includes(lowerQuery) ||
      article.author.toLowerCase().includes(lowerQuery)
    );
  }

  // 分类过滤
  if (category !== '全部') {
    filtered = filtered.filter(article => article.category === category);
  }

  return filtered;
}

// ========== 导出数据（用于开发测试）==========
export const mockArticles = articlesData;
export const mockComments = commentsData;
