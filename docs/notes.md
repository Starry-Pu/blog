# 📝 学习笔记

这里记录我平时遇到的技术问题和解决方案。

## 2025-12-21：搭建 VitePress 博客

今天终于把自己的个人博客搭建起来了！基于 VitePress + Vue，体验非常丝滑。

### 为什么选择 VitePress？
1. **速度快**：基于 Vite，热更新是毫秒级的。
2. **Markdown 友好**：写文章就像写代码注释一样简单。
3. **Vue 驱动**：作为前端开发，可以在 Markdown 里直接写 Vue 组件，这点太酷了。

### 遇到的坑
刚开始启动时遇到了 `404` 问题，后来发现是启动命令没加 `docs` 参数：
```json
"scripts": {
  "docs:dev": "vitepress dev docs"
}