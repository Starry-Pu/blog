---
title: Markdown 语法速查
editLink: true
---

# Markdown 语法速查：写博客必备

这里是正文的开始。你不需要操心排版，**VitePress 会自动帮你生成右侧的目录**！

## 1. 标题与文字样式

像这样使用 `#` 号来标记标题，井号越多，标题越小。

### 这是三级标题
- **加粗**：用两个星号包裹。
- *斜体*：用一个星号包裹。
- `行内代码`：用反引号（Esc键下面那个）包裹，适合写变量名，比如 `console.log`。
- [这是一个链接](https://github.com)

---

## 2. 代码块 (程序员最爱)

写代码时，使用三个反引号 ` ``` `，后面跟上语言名称（js, css, vue, python 等），会有高亮效果：

```javascript
// 这是一个 JavaScript 代码块
function hello() {
  console.log("Hello, VitePress!");
}