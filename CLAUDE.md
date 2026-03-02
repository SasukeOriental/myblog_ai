# React 博客项目 - Claude 记录

## 项目概述

**项目名称**：个人博客系统 (My Blog)
**开发框架**：React 19.2.0 + Vite 7.3.1
**学习目标**：通过实践学习 React 核心概念（组件、Props、状态管理、路由、数据获取等）
**项目路径**：`C:\Users\11611\Desktop\Hiking\LEARN\my-blog`

---

## 当前进度

### ✅ 已完成（阶段一：React 基础）- 100%

- [x] 使用 Vite 初始化 React 项目
- [x] 安装项目依赖
- [x] 创建 Header 组件（头部导航栏）
- [x] 创建 ArticleCard 组件（文章卡片展示）
- [x] 创建 ArticleList 组件（文章列表容器）
- [x] 整合所有组件到 App.jsx
- [x] 添加完整样式（App.css）
- [x] 成功启动开发服务器（http://localhost:5173）

### ✅ 已完成（阶段二：状态管理与交互）- 100%

- [x] Props 数据传递
- [x] 列表渲染（map()）
- [x] 条件渲染（&&、三元运算符）
- [x] useState Hook
- [x] useEffect Hook（定时器、清除函数）
- [x] 事件处理（onClick）

### ✅ 已完成（阶段三：路由与页面导航）- 100%

- [x] 安装 React Router
- [x] 配置路由（BrowserRouter、Routes、Route）
- [x] 创建 ArticleDetail 组件（文章详情页）
- [x] 创建 About 组件（关于页面）
- [x] 实现 Link 导航
- [x] 动态路由参数（useParams）
- [x] 获取当前路由（useLocation）
- [x] 404 页面
- [x] 导航高亮

### ✅ 已完成（阶段四：复杂功能）- 100%

- [x] 受控组件（搜索框、评论表单）
- [x] 表单处理（输入验证、提交）
- [x] 数据过滤（搜索、分类筛选）
- [x] 状态提升（搜索状态管理）
- [x] 评论系统（发表、显示）
- [x] 空状态处理
- [x] 条件渲染（进阶）

### ✅ 已完成（阶段五：数据获取与 API 集成）- 100%

- [x] 异步编程基础（Callback、Promise、async/await）
- [x] fetch API（GET、POST）
- [x] useEffect 异步获取数据
- [x] 加载状态（Loading State）
- [x] 错误处理（Error Handling）
- [x] 表单提交（异步提交）
- [x] API 模拟与集成

### 📋 下一步学习（阶段六：性能优化）

- [ ] useMemo Hook
- [ ] useCallback Hook
- [ ] React.memo 组件
- [ ] 代码分割（Code Splitting）

---

## 项目文件结构

```
my-blog/
├── src/
│   ├── api/
│   │   └── articles.js     # API 模拟文件（数据请求函数）
│   ├── App.jsx              # 根组件，路由配置
│   ├── App.css              # 应用样式
│   ├── main.jsx             # 应用入口
│   ├── index.css            # 全局样式
│   └── components/
│       ├── Header.jsx       # 头部导航（含搜索功能）
│       ├── ArticleCard.jsx  # 文章卡片（含点赞、链接）
│       ├── ArticleList.jsx  # 文章列表（API 数据获取、筛选）
│       ├── ArticleDetail.jsx # 文章详情页（含评论系统、API 集成）
│       └── About.jsx        # 关于页面
├── index.html               # HTML 模板
├── package.json             # 项目配置和依赖
└── vite.config.js           # Vite 构建配置
```

---

## 已掌握的核心知识

### 阶段一：React 基础
| 概念 | 说明 |
|------|------|
| **组件** | 可复用的 UI 片段，函数声明 |
| **JSX** | JavaScript 语法扩展，在 JS 中写 HTML |
| **className** | CSS 类名属性（不能用 `class`） |
| **导入/导出** | `import` 和 `export default` |
| **组件嵌套** | 组件包含其他组件形成组件树 |

### 阶段二：状态管理
| 概念 | 说明 |
|------|------|
| **Props** | 父组件向子组件传递数据（只读） |
| **State** | 组件内部的可变数据 |
| **useState** | Hook，用于管理状态 |
| **useEffect** | Hook，处理副作用（定时器、订阅） |
| **条件渲染** | `&&`、三元运算符、`if-else` |
| **列表渲染** | `map()` 遍历数组 |
| **事件处理** | `onClick={handleClick}` |

### 阶段三：路由管理
| 概念 | 说明 |
|------|------|
| **BrowserRouter** | 路由容器 |
| **Routes/Route** | 路由配置 |
| **Link** | 导航链接（不刷新） |
| **useParams** | 获取动态路由参数 |
| **useLocation** | 获取当前路由信息 |
| **动态路由** | `/article/:id` |

---

## 快速启动

```bash
# 进入项目目录
cd C:\Users\11611\Desktop\Hiking\LEARN\my-blog

# 启动开发服务器
npm run dev

# 访问应用
# http://localhost:5173
```

---

## 当前功能特性

### 已实现功能
- 📝 文章列表展示（3篇）
- 🔥 热门文章标记（阅读量>1000）
- ❤️ 点赞功能（可切换）
- 🕐 实时时间更新（每分钟）
- 📖 文章详情页（动态路由）
- ℹ️ 关于页面
- 🔗 导航链接（首页、关于）
- 📍 导航高亮（当前菜单高亮）
- 404 未找到页面

### 页面路由
- `/` - 首页（文章列表）
- `/article/0` - 第一篇文章详情
- `/article/1` - 第二篇文章详情
- `/article/2` - 第三篇文章详情
- `/about` - 关于页面
- `*` - 404 页面

---

## 完整学习路径（共7个阶段）

| 阶段 | 内容 | 进度 |
|------|------|------|
| 阶段一 | React 基础（组件、JSX） | ✅ 100% |
| 阶段二 | 状态管理与交互（Props、Hooks） | ✅ 100% |
| 阶段三 | 路由与页面（React Router） | ✅ 100% |
| 阶段四 | 复杂功能（搜索、筛选、评论、表单） | ✅ 100% |
| 阶段五 | 数据获取（API 集成、异步编程） | ✅ 100% |
| 阶段六 | 性能优化（useMemo、useCallback、React.memo） | ⬜ 0% |
| 阶段七 | 样式与部署（Tailwind、Vercel） | ⬜ 0% |

---

## 知识文档索引

| 文档 | 说明 |
|------|------|
| task1.md | React 基础知识摘要 |
| task2.md | Props、State、Hooks 知识摘要 |
| task3.md | React Router 路由知识摘要 |
| task4.md | 复杂功能知识摘要（表单、筛选、评论） |
| task5.md | 数据获取知识摘要（API 集成、异步编程） |

---

*最后更新：2026-02-27*
*当前总进度：70%（7/10 个学习模块）*
