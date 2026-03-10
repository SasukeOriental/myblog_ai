# 📝 个人博客系统 (My Blog)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)
![Markdown](https://img.shields.io/badge/Markdown-CMS-000000?logo=markdown)

一个现代化的 React 博客系统，现已升级支持 **Markdown 内容管理** 和 **AI 知识问答** 功能！

## 🚀 主要特性

### ✨ 全新 Markdown 内容管理系统
- **内容与代码完全分离**：文章存储在独立的 Markdown 文件中
- **自动化构建流程**：一键将 Markdown 转换为优化的 JavaScript 数据
- **易于维护**：非技术人员也能轻松编辑和添加文章
- **完整元数据支持**：Front Matter 支持标题、分类、作者、阅读量等信息

### 🤖 AI 知识问答集成
- **RAG（检索增强生成）技术**：基于本地知识库的智能问答
- **流式响应体验**：AI 回答逐字显示，提供实时反馈
- **多轮对话支持**：保持上下文连贯性
- **专业级交互设计**：清空对话、重置上下文等控制功能

### 🏗️ 核心技术栈
- **前端框架**：React 19.2.0 + Vite 7.3.1
- **路由管理**：React Router 6
- **状态管理**：React Hooks (useState, useEffect, useMemo, useCallback)
- **性能优化**：React.memo + 代码分割 + 懒加载
- **样式方案**：CSS Modules + 响应式设计

## 📊 功能概览

| 功能模块 | 描述 |
|---------|------|
| **文章列表** | 展示所有文章，支持热门标记（阅读量>1000） |
| **文章详情** | 动态路由，完整的文章内容展示 |
| **搜索筛选** | 实时搜索和分类筛选功能 |
| **点赞互动** | 用户可对文章进行点赞操作 |
| **评论系统** | 完整的评论发表和展示功能 |
| **知识问答** | 🆕 新增！AI 智能问答页面 |
| **关于页面** | 项目介绍和开发者信息 |

## 🗂️ 项目结构

```
my-blog/
├── src/
│   ├── articles/                    # 🆕 Markdown 文章目录
│   │   ├── README.md               # 文章开发文档
│   │   ├── 001-react-intro.md      # 文章文件示例
│   │   └── ...                     # 更多文章
│   ├── api/
│   │   ├── articles.js             # API 接口（导入自动生成数据）
│   │   └── articles.data.js        # 🆕 自动生成的数据文件
│   ├── components/
│   │   ├── Header.jsx              # 头部导航（含搜索）
│   │   ├── ArticleCard.jsx         # 文章卡片
│   │   ├── ArticleList.jsx         # 文章列表
│   │   ├── ArticleDetail.jsx       # 文章详情
│   │   └── KnowledgeQA.jsx         # 🆕 AI 知识问答组件
│   ├── App.jsx                     # 根组件（路由配置）
│   └── main.jsx                    # 应用入口
├── build/
│   └── scripts/
│       └── build-articles.js       # 🆕 Markdown 构建脚本
├── package.json                    # 项目配置和依赖
└── README.md                       # 本文档
```

## ⚡ 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
# 开发模式（自动构建 Markdown）
npm run dev
```

### 3. 访问应用
- **博客首页**: http://localhost:5173
- **知识问答**: http://localhost:5173/knowledge-qa
- **关于页面**: http://localhost:5173/about

## 📝 Markdown 文章管理

### 添加新文章
1. 在 `src/articles/` 目录下创建新文件（格式：`{ID}-{title}.md`）
2. 按照 Front Matter 规范填写元数据
3. 编写 Markdown 格式的正文内容
4. 重新构建文章数据：
   ```bash
   npm run build:articles
   ```

### Front Matter 示例
```yaml
---
id: 6
category: AI 技术
title: RAG 技术详解
summary: 检索增强生成（RAG）是当前最热门的 AI 应用架构...
author: 张三
date: 2026-03-10
views: "2,156"
likes: 89
publishTime: 1710086400000
---
```

## 🤖 AI 知识问答设置

### 后端服务要求
知识问答功能需要配合后端 RAG 服务使用：

1. **启动 RAG 服务**（在 WSL 环境中）：
   ```bash
   cd ~/chatchat
   uvicorn test_for_fun_v2:app --host 0.0.0.0 --port 8006
   ```

2. **验证服务**：
   - 访问 http://localhost:8006/docs 查看 API 文档
   - 确认 `/stream_chat` 和 `/smart_reset_chat` 端点可用

3. **前端自动连接**：
   - 访问 `/knowledge-qa` 页面
   - 系统会自动连接到 `http://localhost:8006` 的后端服务

### 功能特点
- **流式响应**：AI 回答逐字显示，提供最佳用户体验
- **对话管理**：支持清空对话（前端）和重置对话（后端）
- **错误处理**：友好的错误提示和网络状态检测
- **性能优化**：代码分割 + Suspense 加载 + 自动滚动

## 🏗️ 构建与部署

### 开发构建
```bash
# 仅构建文章数据
npm run build:articles

# 完整构建（包含文章构建）
npm run build
```

### 生产部署
1. 运行 `npm run build` 生成生产版本
2. 将 `dist/` 目录部署到任何静态文件服务器
3. 确保后端 RAG 服务在生产环境中可用（用于知识问答功能）

## 🎯 学习价值

本项目涵盖了完整的 React 开发技能栈：

- **阶段一**：React 基础（组件、JSX、Props）
- **阶段二**：状态管理（Hooks、事件处理）
- **阶段三**：路由导航（React Router、动态路由）
- **阶段四**：复杂功能（表单、搜索、评论系统）
- **阶段五**：数据获取（API 集成、异步编程）
- **阶段六**：性能优化（useMemo、useCallback、React.memo）
- **阶段七**：现代架构（Markdown CMS、AI 集成）

## 📚 文档资源

- `src/articles/README.md` - Markdown 文章开发详细指南
- `修改说明清单.md` - 本次更新的完整变更记录
- `知识问答功能案例讲解.md` - AI 功能集成技术文档

## 🔄 更新日志

### v2.0.0 (2026-03-10) - 重大更新！
- ✨ **新增 Markdown 内容管理系统**
  - 文章数据从硬编码迁移到独立 Markdown 文件
  - 实现自动化构建流程
  - 内容与代码完全分离
- 🤖 **新增 AI 知识问答功能**
  - 集成 RAG 技术
  - 流式响应体验
  - 专业级交互设计
- 📈 **文章数量扩展**
  - 从 3 篇扩展到 5 篇完整文章
  - 新增 Vue.js 和异步编程主题

### v1.0.0 (2026-02-27)
- 完成基础博客功能
- 实现文章列表、详情、搜索、评论等核心功能
- 完成性能优化和部署配置

---

**项目状态**: ✅ 完全可用
**最后更新**: 2026-03-10
**许可证**: MIT