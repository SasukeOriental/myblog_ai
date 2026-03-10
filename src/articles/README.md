# 文章管理系统 - 使用说明

## 📁 目录结构

```
src/articles/
├── README.md                              # 本文档
├── 001-react-intro.md                    # React 入门指南
├── 002-javascript-closure.md              # JavaScript 闭包
├── 003-css-layout.md                     # CSS 布局技巧
├── 004-vue-core.md                       # Vue 核心原理
└── 005-async-programming.md              # 异步编程
```

## 📝 文件命名规范

文章文件名格式：`{ID}-{标题}.md`

- **ID**：3位数字编号（001, 002, 003...）
- **标题**：英文或拼音，使用连字符分隔单词

示例：
- ✅ `001-react-intro.md`
- ✅ `002-javascript-closure.md`
- ✅ `003-css-layout.md`

## 📋 Front Matter 字段说明

每个 Markdown 文件必须包含 Front Matter（文件顶部的 YAML 元数据）：

```yaml
---
id: 1                    # 文章 ID（唯一，数字）
category: 前端开发        # 文章分类
title: React 入门指南     # 文章标题
summary: 文章摘要...     # 文章摘要（可选，未提供则自动生成）
author: 张三              # 作者
date: 2024-02-25         # 发布日期
views: "1,234"           # 阅读量（带逗号格式）
likes: 156                # 点赞数（数字）
publishTime: 1708864800000  # 发布时间戳（可选）
---
```

### 字段详细说明

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| id | Number | ✅ | 文章唯一标识，必须为正整数 |
| category | String | ✅ | 文章分类（如：前端开发、JavaScript、CSS 技巧） |
| title | String | ✅ | 文章标题，将显示在列表页和详情页 |
| summary | String | ❌ | 文章摘要，未提供时从正文自动提取前150字 |
| author | String | ✅ | 作者名称 |
| date | String | ✅ | 发布日期，格式：YYYY-MM-DD |
| views | String | ❌ | 阅读量，格式：带逗号的数字字符串（如 "1,234"） |
| likes | Number | ❌ | 点赞数，数字类型 |
| publishTime | Number | ❌ | 发布时间戳（毫秒），未提供则使用当前时间 |

## 🚀 如何添加新文章

### 步骤 1：创建 Markdown 文件

在 `src/articles/` 目录下创建新的 `.md` 文件，遵循命名规范。

### 步骤 2：编写 Front Matter

在文件顶部添加 Front Matter 元数据：

```yaml
---
id: 6
category: 前端开发
title: Vue 3 组合式 API 入门
summary: Vue 3 的 Composition API 提供了更灵活的代码组织方式。
author: 赵六
date: 2024-03-01
views: "856"
likes: 78
publishTime: 1709257600000
---
```

### 步骤 3：编写正文内容

使用 Markdown 语法编写文章内容：

```markdown
## 什么是 Composition API？

Composition API 是 Vue 3 引入的新 API，提供了一种更灵活的代码组织方式。

### setup() 函数

```javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubled = computed(() => count.value * 2);
    
    return { count, doubled };
  }
};
```

## 为什么要使用 Composition API？

- 更好的 TypeScript 支持
- 更灵活的代码组织
- 更好的逻辑复用
```

### 步骤 4：运行构建脚本

在项目根目录运行：

```bash
npm run build:articles
```

### 步骤 5：查看生成结果

构建成功后，会自动生成 `src/api/articles.data.js` 文件，包含所有文章数据。

### 步骤 6：启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看新文章。

## 🔨 如何修改文章

### 修改现有文章

1. 找到对应的 `.md` 文件
2. 直接修改文件内容
3. 重新运行 `npm run build:articles`
4. 刷新浏览器查看变化

### 修改 Front Matter

Front Matter 的任何字段都可以修改：
- 修改 `likes` 增加点赞数
- 修改 `views` 更新阅读量
- 修改 `date` 更新发布日期

## 🏗️ 构建流程说明

### 构建脚本功能

`build/scripts/build-articles.js` 脚本执行以下操作：

1. **读取文件**：扫描 `src/articles/` 目录下的所有 `.md` 文件
2. **解析 Front Matter**：使用 `gray-matter` 解析 YAML 元数据
3. **转换 Markdown**：使用 `marked` 将 Markdown 转换为 HTML
4. **生成摘要**：如果未提供 summary，从正文自动提取前 150 字
5. **输出文件**：生成 `src/api/articles.data.js` 文件

### 构建输出格式

生成的 `articles.data.js` 文件包含：

```javascript
// 自动生成的文章数据文件
// 不要手动编辑此文件！
// 生成时间: 2026/3/7 22:35:14

export const articlesData = [
  {
    "id": 1,
    "category": "前端开发",
    "title": "React 入门指南：从零开始学习",
    "summary": "React 是目前最流行的前端框架之一...",
    "author": "张三",
    "date": "2024-02-25",
    "views": "1,234",
    "likes": 156,
    "publishTime": 1708864800000,
    "content": "<h2>什么是 React？</h2><p>..."
  }
  // ... 更多文章
];

export default articlesData;
```

## ⚙️ 常用命令

### 构建文章数据
```bash
npm run build:articles
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

生产构建会自动先运行 `build:articles`，再构建项目。

## 💡 开发技巧

### 1. Markdown 语法支持

支持以下 Markdown 语法：
- 标题（# ## ###）
- 粗体（**text**）
- 斜体（*text*）
- 代码块（```javascript）
- 行内代码（`code`）
- 链接（[text](url)）
- 图片（![alt](url)）
- 列表（- 无序，1. 有序）
- 引用（> text）

### 2. 代码高亮

使用语法标记获得代码高亮：

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

### 3. 自动摘要生成

如果不在 Front Matter 中提供 `summary`，系统会从正文中自动提取：
- 移除所有 Markdown 标记
- 提取前 150 个字符
- 超过长度则添加省略号

### 4. ID 管理建议

- 从 001 开始编号
- 使用连续的数字
- 保持 ID 唯一性
- 删除文章时保留原 ID（避免影响已有评论）

## ❓ 常见问题

### Q: 为什么修改了 Markdown 文件后页面没有更新？

**A**: 修改 Markdown 文件后，需要重新运行 `npm run build:articles` 生成新的数据文件。

### Q: 构建时报错 "缺少必需的字段"？

**A**: 检查 Front Matter 是否包含所有必需字段：`id`, `category`, `title`, `author`, `date`。

### Q: 文章 ID 可以随便设置吗？

**A**: ID 必须是唯一的正整数。建议使用连续数字（001, 002, 003...），避免跳号。

### Q: 可以删除生成的 `articles.data.js` 文件吗？

**A**: 不建议删除。这是运行时数据源，删除后需要重新运行构建脚本生成。

### Q: 如何批量导入文章？

**A**: 将多个 `.md` 文件放入 `src/articles/` 目录，运行一次 `npm run build:articles` 即可全部导入。

### Q: Front Matter 中的日期格式有什么要求？

**A**: 推荐使用 `YYYY-MM-DD` 格式（如：2024-03-01），会自动转换为字符串格式。

### Q: 文章内容太长，如何分段？

**A**: 使用多个二级标题（##）将内容分成不同章节，提高可读性。

## 📚 相关资源

- [Markdown 语法指南](https://www.markdownguide.org/)
- [gray-matter 文档](https://github.com/jonschlinkert/gray-matter)
- [marked 文档](https://marked.js.org/)
- [Vue.js 官方文档](https://vuejs.org/)
- [React 官方文档](https://react.dev/)

---

**最后更新**: 2026-03-07  
**版本**: 1.0.0
