// 自动生成的文章数据文件
// 不要手动编辑此文件！
// 生成时间: 2026/3/7 22:26:27

export const articlesData = [
  {
    "id": 1,
    "category": "前端开发",
    "title": "React 入门指南：从零开始学习",
    "summary": "React 是目前最流行的前端框架之一。本文将带你了解 React 的核心概念，包括组件、JSX、Props 和 State 等，帮助你快速入门 React 开发。",
    "author": "张三",
    "date": "2024-02-25",
    "views": "1,234",
    "likes": 156,
    "publishTime": 1708864800000,
    "content": "<h2>什么是 React？</h2>\n<p>React 是由 Facebook 开发的用于构建用户界面的 JavaScript 库。它专注于构建单页应用程序（SPA），通过组件化的方式让开发者更高效地构建可复用的 UI。</p>\n<h2>React 的核心概念</h2>\n<h3>1. 组件（Components）</h3>\n<p>组件是 React 的核心概念。组件是可复用的 UI 片段，每个组件都有自己的状态（State）和属性（Props）。组件可以是函数组件或类组件。</p>\n<h3>2. JSX</h3>\n<p>JSX 是 JavaScript 的语法扩展，允许我们在 JavaScript 中写类似 HTML 的代码。JSX 让代码更直观、更易读。</p>\n<h3>3. Props</h3>\n<p>Props 是组件的输入参数，用于父组件向子组件传递数据。Props 是只读的，不能在子组件中修改。</p>\n<h3>4. State</h3>\n<p>State 是组件的内部状态，可以随时间变化。当 State 发生变化时，组件会重新渲染。</p>\n<h2>为什么要学习 React？</h2>\n<ul>\n<li>⚡ 高性能：虚拟 DOM 提高了渲染效率</li>\n<li>🔄 可复用性：组件化开发提高代码复用</li>\n<li>🌐 生态丰富：有大量的第三方库支持</li>\n<li>👥 社区活跃：大量教程和资源</li>\n</ul>\n<h2>如何开始学习？</h2>\n<p>建议的学习路径：</p>\n<ol>\n<li>学习 HTML、CSS、JavaScript 基础</li>\n<li>理解 ES6+ 新特性</li>\n<li>学习 React 基础概念（组件、JSX、Props、State）</li>\n<li>掌握 React Hooks（useState、useEffect 等）</li>\n<li>学习路由管理（React Router）</li>\n<li>学习状态管理（Redux、Context API）</li>\n</ol>\n"
  },
  {
    "id": 2,
    "category": "JavaScript",
    "title": "深入理解 JavaScript 闭包",
    "summary": "闭包是 JavaScript 中最重要的概念之一，也是面试常考点。本文通过实例讲解闭包的原理、应用场景以及常见陷阱。",
    "author": "李四",
    "date": "2024-02-24",
    "views": "987",
    "likes": 89,
    "publishTime": 1708778400000,
    "content": "<h2>什么是闭包？</h2>\n<p>闭包（Closure）是 JavaScript 中最重要的概念之一。简单来说，闭包是指有权访问另一个函数作用域中变量的函数。</p>\n<h2>闭包的形成</h2>\n<p>当一个函数返回另一个函数，且返回的函数引用了外部函数的变量时，就形成了闭包。</p>\n<pre><code class=\"language-javascript\">function outer() {\n  const message = &#39;Hello, Closure!&#39;;\n\n  function inner() {\n    console.log(message);  // 访问外部变量\n  }\n\n  return inner;\n}\n\nconst myClosure = outer();\nmyClosure();  // 输出: Hello, Closure!\n</code></pre>\n<h2>闭包的常见应用</h2>\n<h3>1. 数据私有化</h3>\n<pre><code class=\"language-javascript\">function createCounter() {\n  let count = 0;\n\n  return {\n    increment: () =&gt; count++,\n    decrement: () =&gt; count--,\n    getCount: () =&gt; count\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.getCount());  // 0\ncounter.increment();\nconsole.log(counter.getCount());  // 1\n</code></pre>\n<h3>2. 柯里化（Currying）</h3>\n<pre><code class=\"language-javascript\">function multiply(a) {\n  return function(b) {\n    return a * b;\n  };\n}\n\nconst multiplyBy2 = multiply(2);\nconsole.log(multiplyBy2(3));  // 6\n</code></pre>\n<h3>3. 模块模式</h3>\n<pre><code class=\"language-javascript\">const myModule = (function() {\n  let privateVar = 0;\n\n  return {\n    increment: () =&gt; privateVar++,\n    getValue: () =&gt; privateVar\n  };\n})();\n</code></pre>\n<h2>闭包的注意事项</h2>\n<ul>\n<li>⚠️ 内存泄漏：如果闭包大量使用，可能导致内存占用过高</li>\n<li>⚠️ 性能问题：每次创建闭包都会消耗内存</li>\n<li>⚠️ 作用域链复杂：理解闭包需要理解 JavaScript 的作用域链</li>\n</ul>\n"
  },
  {
    "id": 3,
    "category": "CSS 技巧",
    "title": "10 个实用的 CSS 布局技巧",
    "summary": "Flexbox 和 Grid 是现代 CSS 布局的两大神器。本文分享10个实用的布局技巧，让你的网页排版更加轻松高效。",
    "author": "王五",
    "date": "2024-02-23",
    "views": "2,456",
    "likes": 342,
    "publishTime": 1708692000000,
    "content": "<h2>CSS 布局的两大神器</h2>\n<p>Flexbox 和 Grid 是现代 CSS 布局的两大核心技术，它们让复杂的布局变得简单。</p>\n<h2>Flexbox 布局技巧</h2>\n<h3>1. 水平居中</h3>\n<pre><code class=\"language-css\">.container {\n  display: flex;\n  justify-content: center;\n}\n</code></pre>\n<h3>2. 垂直居中</h3>\n<pre><code class=\"language-css\">.container {\n  display: flex;\n  align-items: center;\n}\n</code></pre>\n<h3>3. 完美居中</h3>\n<pre><code class=\"language-css\">.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n</code></pre>\n<h3>4. 等分列宽</h3>\n<pre><code class=\"language-css\">.container {\n  display: flex;\n}\n\n.item {\n  flex: 1;  /* 每个子元素平分空间 */\n}\n</code></pre>\n<h3>5. 响应式换行</h3>\n<pre><code class=\"language-css\">.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n</code></pre>\n<h2>Grid 布局技巧</h2>\n<h3>6. 基础网格</h3>\n<pre><code class=\"language-css\">.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n</code></pre>\n<h3>7. 自定义列宽</h3>\n<pre><code class=\"language-css\">.container {\n  display: grid;\n  grid-template-columns: 200px 1fr 100px;\n}\n</code></pre>\n<h3>8. 自动填充</h3>\n<pre><code class=\"language-css\">.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n</code></pre>\n<h2>其他实用技巧</h2>\n<h3>9. aspect-ratio（宽高比）</h3>\n<pre><code class=\"language-css\">.image {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}\n</code></pre>\n<h3>10. clamp()（响应式字体）</h3>\n<pre><code class=\"language-css\">.text {\n  font-size: clamp(1rem, 2.5vw, 2rem);\n}\n</code></pre>\n<h2>选择 Flexbox 还是 Grid？</h2>\n<p>一般来说：</p>\n<ul>\n<li>一维布局（行或列）→ Flexbox</li>\n<li>二维布局（行和列）→ Grid</li>\n</ul>\n"
  },
  {
    "id": 4,
    "category": "前端开发",
    "title": "Vue.js 核心原理解析",
    "summary": "Vue.js 是另一个流行的前端框架，本文深入讲解 Vue 的响应式系统、组件化开发、虚拟 DOM 等核心原理。",
    "author": "张三",
    "date": "2024-02-22",
    "views": "1,567",
    "likes": 234,
    "publishTime": 1708605600000,
    "content": "<h2>Vue.js 简介</h2>\n<p>Vue.js 是一个渐进式的 JavaScript 框架，易学易用，性能出色，适合构建各种规模的应用。</p>\n<h2>核心特性</h2>\n<ul>\n<li>📦 渐进式框架</li>\n<li>⚡ 双向数据绑定</li>\n<li>🎨 组件化开发</li>\n<li>🔧 指令系统</li>\n</ul>\n<h2>响应式原理</h2>\n<p>Vue 的响应式系统基于以下核心技术：</p>\n<h3>1. Object.defineProperty（Vue 2）</h3>\n<p>Vue 2 使用 <code>Object.defineProperty</code> 来劫持对象的属性，实现数据监听。</p>\n<h3>2. Proxy（Vue 3）</h3>\n<p>Vue 3 使用 ES6 的 <code>Proxy</code> API，提供了更好的性能和更全面的监听能力。</p>\n<pre><code class=\"language-javascript\">// Vue 3 的响应式原理示例\nconst state = new Proxy(\n  { count: 0 },\n  {\n    set(target, key, value) {\n      target[key] = value;\n      console.log(`${key} 变更为 ${value}`);\n      return true;\n    }\n  }\n);\n</code></pre>\n<h2>虚拟 DOM</h2>\n<p>虚拟 DOM 是 Vue 的另一个核心技术，它通过以下方式提升性能：</p>\n<ol>\n<li><strong>Diff 算法</strong>：高效比较新旧虚拟 DOM</li>\n<li><strong>批量更新</strong>：减少真实 DOM 操作次数</li>\n<li><strong>最小化重绘</strong>：只更新变化的部分</li>\n</ol>\n<h2>组件化开发</h2>\n<p>Vue 的组件系统支持：</p>\n<ul>\n<li><strong>单文件组件</strong>：<code>.vue</code> 文件将模板、脚本和样式封装在一起</li>\n<li><strong>Props 和 Events</strong>：父子组件通信</li>\n<li><strong>Slots</strong>：插槽实现内容分发</li>\n<li><strong>生命周期钩子</strong>：控制组件的创建、更新和销毁</li>\n</ul>\n"
  },
  {
    "id": 5,
    "category": "JavaScript",
    "title": "JavaScript 异步编程：Promise 与 async/await",
    "summary": "异步编程是 JavaScript 的核心特性。本文从回调函数讲到 Promise，再到 async/await，帮助你彻底理解 JS 异步编程。",
    "author": "李四",
    "date": "2024-02-21",
    "views": "2,100",
    "likes": 312,
    "publishTime": 1708519200000,
    "content": "<h2>什么是异步编程？</h2>\n<p>异步编程允许程序在等待某些操作完成时继续执行其他任务，提高了程序的效率。</p>\n<h2>回调函数</h2>\n<p>JavaScript 最初使用回调函数处理异步操作：</p>\n<pre><code class=\"language-javascript\">function fetchData(callback) {\n  setTimeout(() =&gt; {\n    callback(&#39;数据加载完成！&#39;);\n  }, 1000);\n}\n\nfetchData(result =&gt; {\n  console.log(result);  // 数据加载完成！\n});\n</code></pre>\n<p><strong>问题</strong>：回调地狱（Callback Hell）</p>\n<pre><code class=\"language-javascript\">// 回调地狱示例\ngetData(data1 =&gt; {\n  processData(data1, data2 =&gt; {\n    saveData(data2, data3 =&gt; {\n      // 层层嵌套，难以维护\n    });\n  });\n});\n</code></pre>\n<h2>Promise</h2>\n<p>Promise 是异步编程的一种解决方案，比传统的回调函数更合理、更强大。</p>\n<pre><code class=\"language-javascript\">// 创建 Promise\nconst promise = new Promise((resolve, reject) =&gt; {\n  setTimeout(() =&gt; {\n    resolve(&#39;成功！&#39;);\n  }, 1000);\n});\n\n// 使用 Promise\npromise\n  .then(result =&gt; {\n    console.log(result);  // 成功！\n  })\n  .catch(error =&gt; {\n    console.error(error);\n  });\n</code></pre>\n<h3>Promise 链式调用</h3>\n<pre><code class=\"language-javascript\">fetchUser(userId)\n  .then(user =&gt; fetchPosts(user.id))\n  .then(posts =&gt; processPosts(posts))\n  .catch(error =&gt; {\n    console.error(&#39;发生错误:&#39;, error);\n  });\n</code></pre>\n<h2>async/await</h2>\n<p>async/await 是基于 Promise 的语法糖，让异步代码看起来像同步代码。</p>\n<pre><code class=\"language-javascript\">async function fetchData() {\n  try {\n    const user = await fetchUser(userId);\n    const posts = await fetchPosts(user.id);\n    const result = await processPosts(posts);\n    return result;\n  } catch (error) {\n    console.error(error);\n  }\n}\n</code></pre>\n<h3>并发执行</h3>\n<pre><code class=\"language-javascript\">// 使用 Promise.all 并发执行\nasync function fetchAllData() {\n  const [users, posts, comments] = await Promise.all([\n    fetchUsers(),\n    fetchPosts(),\n    fetchComments()\n  ]);\n  return { users, posts, comments };\n}\n</code></pre>\n<h2>错误处理</h2>\n<p>异步编程中的错误处理非常重要：</p>\n<pre><code class=\"language-javascript\">async function handleRequest() {\n  try {\n    const data = await fetchData();\n    return data;\n  } catch (error) {\n    // 处理错误\n    throw new Error(&#39;请求失败&#39;);\n  } finally {\n    // 清理资源\n    cleanup();\n  }\n}\n</code></pre>\n"
  }
];

// 导出为默认导出（兼容旧代码）
export default articlesData;
