---
id: 2
category: JavaScript
title: 深入理解 JavaScript 闭包
summary: 闭包是 JavaScript 中最重要的概念之一，也是面试常考点。本文通过实例讲解闭包的原理、应用场景以及常见陷阱。
author: 李四
date: 2024-02-24
views: "987"
likes: 89
publishTime: 1708778400000
---

## 什么是闭包？

闭包（Closure）是 JavaScript 中最重要的概念之一。简单来说，闭包是指有权访问另一个函数作用域中变量的函数。

## 闭包的形成

当一个函数返回另一个函数，且返回的函数引用了外部函数的变量时，就形成了闭包。

```javascript
function outer() {
  const message = 'Hello, Closure!';

  function inner() {
    console.log(message);  // 访问外部变量
  }

  return inner;
}

const myClosure = outer();
myClosure();  // 输出: Hello, Closure!
```

## 闭包的常见应用

### 1. 数据私有化
```javascript
function createCounter() {
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
console.log(counter.getCount());  // 1
```

### 2. 柯里化（Currying）
```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3));  // 6
```

### 3. 模块模式
```javascript
const myModule = (function() {
  let privateVar = 0;

  return {
    increment: () => privateVar++,
    getValue: () => privateVar
  };
})();
```

## 闭包的注意事项

- ⚠️ 内存泄漏：如果闭包大量使用，可能导致内存占用过高
- ⚠️ 性能问题：每次创建闭包都会消耗内存
- ⚠️ 作用域链复杂：理解闭包需要理解 JavaScript 的作用域链
