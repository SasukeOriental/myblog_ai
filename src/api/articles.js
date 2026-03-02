// api/articles.js
// 模拟 API 数据和请求函数
// 在实际项目中，这里会是真实的后端 API 调用

// ========== 模拟文章数据 ==========
const articlesData = [
  {
    id: 1,
    category: '前端开发',
    title: 'React 入门指南：从零开始学习',
    summary: 'React 是目前最流行的前端框架之一。本文将带你了解 React 的核心概念，包括组件、JSX、Props 和 State 等，帮助你快速入门 React 开发。',
    author: '张三',
    date: '2024-02-25',
    views: '1,234',
    likes: 156,
    publishTime: Date.now() - 1800000,
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
  {
    id: 2,
    category: 'JavaScript',
    title: '深入理解 JavaScript 闭包',
    summary: '闭包是 JavaScript 中最重要的概念之一，也是面试常考点。本文通过实例讲解闭包的原理、应用场景以及常见陷阱。',
    author: '李四',
    date: '2024-02-24',
    views: '987',
    likes: 89,
    publishTime: Date.now() - 3600000,
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

      <h2>闭包的注意事项</h2>
      <ul>
        <li>⚠️ 内存泄漏：如果闭包大量使用，可能导致内存占用过高</li>
        <li>⚠️ 性能问题：每次创建闭包都会消耗内存</li>
        <li>⚠️ 作用域链复杂：理解闭包需要理解 JavaScript 的作用域链</li>
      </ul>
    `
  },
  {
    id: 3,
    category: 'CSS 技巧',
    title: '10 个实用的 CSS 布局技巧',
    summary: 'Flexbox 和 Grid 是现代 CSS 布局的两大神器。本文分享10个实用的布局技巧，让你的网页排版更加轻松高效。',
    author: '王五',
    date: '2024-02-23',
    views: '2,456',
    likes: 342,
    publishTime: Date.now() - 7200000,
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

      <h2>Grid 布局技巧</h2>

      <h3>6. 基础网格</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>

      <h2>选择 Flexbox 还是 Grid？</h2>
      <p>一般来说：</p>
      <ul>
        <li>一维布局（行或列）→ Flexbox</li>
        <li>二维布局（行和列）→ Grid</li>
      </ul>
    `
  },
  {
    id: 4,
    category: '前端开发',
    title: 'Vue.js 核心原理解析',
    summary: 'Vue.js 是另一个流行的前端框架，本文深入讲解 Vue 的响应式系统、组件化开发、虚拟 DOM 等核心原理。',
    author: '张三',
    date: '2024-02-22',
    views: '1,567',
    likes: 234,
    publishTime: Date.now() - 10800000,
    content: `
      <h2>Vue.js 简介</h2>
      <p>Vue.js 是一个渐进式的 JavaScript 框架，易学易用，性能出色，适合构建各种规模的应用。</p>

      <h2>核心特性</h2>
      <ul>
        <li>📦 渐进式框架</li>
        <li>⚡ 双向数据绑定</li>
        <li>🎨 组件化开发</li>
        <li>🔧 指令系统</li>
      </ul>
    `
  },
  {
    id: 5,
    category: 'JavaScript',
    title: 'JavaScript 异步编程：Promise 与 async/await',
    summary: '异步编程是 JavaScript 的核心特性。本文从回调函数讲到 Promise，再到 async/await，帮助你彻底理解 JS 异步编程。',
    author: '李四',
    date: '2024-02-21',
    views: '2,100',
    likes: 312,
    publishTime: Date.now() - 14400000,
    content: `
      <h2>什么是异步编程？</h2>
      <p>异步编程允许程序在等待某些操作完成时继续执行其他任务，提高了程序的效率。</p>

      <h2>Promise</h2>
      <p>Promise 是异步编程的一种解决方案，比传统的回调函数更合理、更强大。</p>

      <pre><code>// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功！');
  }, 1000);
});

// 使用 Promise
promise.then(result => {
  console.log(result);  // 成功！
}).catch(error => {
  console.error(error);
});</code></pre>

      <h2>async/await</h2>
      <p>async/await 是基于 Promise 的语法糖，让异步代码看起来像同步代码。</p>

      <pre><code>async function fetchData() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
    `
  }
];

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
