---
id: 3
category: CSS 技巧
title: 10 个实用的 CSS 布局技巧
summary: Flexbox 和 Grid 是现代 CSS 布局的两大神器。本文分享10个实用的布局技巧，让你的网页排版更加轻松高效。
author: 王五
date: 2024-02-23
views: "2,456"
likes: 342
publishTime: 1708692000000
---

## CSS 布局的两大神器

Flexbox 和 Grid 是现代 CSS 布局的两大核心技术，它们让复杂的布局变得简单。

## Flexbox 布局技巧

### 1. 水平居中
```css
.container {
  display: flex;
  justify-content: center;
}
```

### 2. 垂直居中
```css
.container {
  display: flex;
  align-items: center;
}
```

### 3. 完美居中
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 4. 等分列宽
```css
.container {
  display: flex;
}

.item {
  flex: 1;  /* 每个子元素平分空间 */
}
```

### 5. 响应式换行
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

## Grid 布局技巧

### 6. 基础网格
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 7. 自定义列宽
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
}
```

### 8. 自动填充
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

## 其他实用技巧

### 9. aspect-ratio（宽高比）
```css
.image {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

### 10. clamp()（响应式字体）
```css
.text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}
```

## 选择 Flexbox 还是 Grid？

一般来说：
- 一维布局（行或列）→ Flexbox
- 二维布局（行和列）→ Grid
