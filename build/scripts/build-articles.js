import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

// 配置 marked 启用 GFM（GitHub Flavored Markdown）
marked.setOptions({
  gfm: true,
  breaks: true
});

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置路径
const ARTICLES_DIR = path.resolve(__dirname, '../../src/articles');
const OUTPUT_FILE = path.resolve(__dirname, '../../src/api/articles.data.js');

// 提取摘要的函数
function extractSummary(content, maxLength = 150) {
  // 移除 Markdown 语法标记
  let text = content
    .replace(/#{1,6}\s/g, '')                    // 标题
    .replace(/\*\*(.*?)\*\*/g, '$1')              // 粗体
    .replace(/\*(.*?)\*/g, '$1')                 // 斜体
    .replace(/`(.*?)`/g, '$1')                   // 行内代码
    .replace(/```[\s\S]*?```/g, '')               // 代码块
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')      // 链接
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')     // 图片
    .replace(/\n+/g, ' ')                         // 换行
    .trim();

  // 如果超过最大长度，截取并添加省略号
  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }

  return text;
}

// 主构建函数
async function buildArticles() {
  console.log('🚀 开始构建文章数据...\n');

  try {
    // 读取文章目录
    if (!fs.existsSync(ARTICLES_DIR)) {
      throw new Error(`文章目录不存在: ${ARTICLES_DIR}`);
    }

    const files = fs.readdirSync(ARTICLES_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md')).sort();

    console.log(`📁 找到 ${mdFiles.length} 个 Markdown 文件\n`);

    const articles = [];

    // 处理每个 Markdown 文件
    for (const file of mdFiles) {
      const filePath = path.join(ARTICLES_DIR, file);
      console.log(`📖 处理文件: ${file}`);

      // 读取文件内容
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // 解析 front matter 和正文
      const { data: frontMatter, content } = matter(fileContent);

      // 验证必需的 front matter 字段
      const requiredFields = ['id', 'category', 'title', 'author', 'date'];
      for (const field of requiredFields) {
        if (!frontMatter[field]) {
          throw new Error(`文件 ${file} 缺少必需的字段: ${field}`);
        }
      }

      // 将 Markdown 正文转换为 HTML
      const htmlContent = marked(content);

      // 如果没有提供 summary，从内容中提取
      const summary = frontMatter.summary || extractSummary(content);

      // 处理日期格式，保持与原数据一致
      let formattedDate = frontMatter.date;
      if (formattedDate && typeof formattedDate !== 'string') {
        formattedDate = new Date(formattedDate).toISOString().split('T')[0];
      } else if (!formattedDate) {
        formattedDate = new Date().toISOString().split('T')[0];
      }

      // 构建文章对象
      const article = {
        id: frontMatter.id,
        category: frontMatter.category,
        title: frontMatter.title,
        summary: summary,
        author: frontMatter.author,
        date: formattedDate,
        views: frontMatter.views || '0',
        likes: frontMatter.likes || 0,
        publishTime: frontMatter.publishTime || Date.now(),
        content: htmlContent
      };

      articles.push(article);
      console.log(`  ✅ 成功处理文章: ${article.title}\n`);
    }

    // 按照文章 ID 排序
    articles.sort((a, b) => a.id - b.id);

    // 生成 JavaScript 文件内容
    const outputContent = `// 自动生成的文章数据文件
// 不要手动编辑此文件！
// 生成时间: ${new Date().toLocaleString('zh-CN')}

export const articlesData = ${JSON.stringify(articles, null, 2)};

// 导出为默认导出（兼容旧代码）
export default articlesData;
`;

    // 写入输出文件
    fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf-8');

    console.log(`✨ 构建完成！`);
    console.log(`📊 生成了 ${articles.length} 篇文章`);
    console.log(`💾 输出文件: ${OUTPUT_FILE}\n`);

    return articles;

  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// 如果直接运行此脚本，执行构建
if (import.meta.url === `file://${process.argv[1]}`) {
  buildArticles();
}

// 导出构建函数供其他模块使用
export { buildArticles };
