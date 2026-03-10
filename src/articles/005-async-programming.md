---
id: 5
category: JavaScript
title: JavaScript 异步编程：Promise 与 async/await
summary: 异步编程是 JavaScript 的核心特性。本文从回调函数讲到 Promise，再到 async/await，帮助你彻底理解 JS 异步编程。
author: 李四
date: 2024-02-21
views: "2,100"
likes: 312
publishTime: 1708519200000
---

## 什么是异步编程？

异步编程允许程序在等待某些操作完成时继续执行其他任务，提高了程序的效率。

## 回调函数

JavaScript 最初使用回调函数处理异步操作：

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('数据加载完成！');
  }, 1000);
}

fetchData(result => {
  console.log(result);  // 数据加载完成！
});
```

**问题**：回调地狱（Callback Hell）

```javascript
// 回调地狱示例
getData(data1 => {
  processData(data1, data2 => {
    saveData(data2, data3 => {
      // 层层嵌套，难以维护
    });
  });
});
```

## Promise

Promise 是异步编程的一种解决方案，比传统的回调函数更合理、更强大。

```javascript
// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功！');
  }, 1000);
});

// 使用 Promise
promise
  .then(result => {
    console.log(result);  // 成功！
  })
  .catch(error => {
    console.error(error);
  });
```

### Promise 链式调用

```javascript
fetchUser(userId)
  .then(user => fetchPosts(user.id))
  .then(posts => processPosts(posts))
  .catch(error => {
    console.error('发生错误:', error);
  });
```

## async/await

async/await 是基于 Promise 的语法糖，让异步代码看起来像同步代码。

```javascript
async function fetchData() {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const result = await processPosts(posts);
    return result;
  } catch (error) {
    console.error(error);
  }
}
```

### 并发执行

```javascript
// 使用 Promise.all 并发执行
async function fetchAllData() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  return { users, posts, comments };
}
```

## 错误处理

异步编程中的错误处理非常重要：

```javascript
async function handleRequest() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    // 处理错误
    throw new Error('请求失败');
  } finally {
    // 清理资源
    cleanup();
  }
}
```
