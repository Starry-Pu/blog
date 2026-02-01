---
title: 我的项目
editLink: true
---

<script setup>
import { ref } from 'vue'

// 控制当前显示哪个项目的 Key
const activeProject = ref('mini') // 默认显示小程序

const projects = [
  { key: 'mini', label: '闲置小程序' },
  { key: 'edu', label: '教育平台' },
  { key: 'web', label: '官网优化' }
]
</script>

# 🛠️ 我的项目 (Projects)

这里记录我在工作中遇到的硬核难题、解决方案及复盘。

---

##  项目复盘 (点击切换)

<div class="project-tabs">
  <button 
    v-for="p in projects" 
    :key="p.key"
    class="tab-btn" 
    :class="{ active: activeProject === p.key }"
    @click="activeProject = p.key"
  >
    {{ p.label }}
  </button>
</div>

<div v-if="activeProject === 'mini'" class="project-content fade-in">
  <h3>蘑菇宅急便 - 留学生二手交易小程序</h3>
  
  <div class="badge-container">
    <img src="https://img.shields.io/badge/React-Hooks-blue" />
    <img src="https://img.shields.io/badge/Taro-CrossPlatform-orange" />
    <img src="https://img.shields.io/badge/TypeScript-Strict-blue" />
  </div>

  **项目背景：**
  为了解决瑞典留学生微信群消息刷屏导致“好物漏看”的问题，我独立开发了这个闲置流转平台。前端基于 Taro + React，后端利用 Node.js 转发配合云开发。

  ::: details  **遇到的痛点 (The Pain)**
  * **列表卡顿**：瀑布流图片密集，列表滑动帧率跌破 **30fps**，手机发烫。
  * **体积超标**：主包体积临近小程序 **2MB** 限制，无法发布。
  * **弱网噩梦**：瑞典信号不稳定，图片上传经常失败，表单数据丢失。
  :::

  ::: details  **我的解决手段 (The Fix)**
  * **虚拟滚动 (Virtual List)**：手写计算逻辑，配合 `setData` 差量更新，仅渲染可视区节点，帧率回升至 **55fps+**。
  * **极限瘦身**：采用**分包 (Subpackages)** 策略拆分非核心页面；剥离冗余库，主包控制在 **1.5MB**。
  * **抗弱网 Hook**：封装 `useUpload`，支持断网重试 (Retry) 和 `localStorage` 本地暂存，TTI 优化至 **1.2s**。
  :::
</div>

<div v-if="activeProject === 'edu'" class="project-content fade-in">
  <h3>在线教育平台 - 核心交互重构</h3>

  <div class="badge-container">
    <img src="https://img.shields.io/badge/Vue-2.x-green" />
    <img src="https://img.shields.io/badge/Element-UI-blue" />
    <img src="https://img.shields.io/badge/Refactor-重构-red" />
  </div>

  **项目背景：**
  接手了一个历史包袱很重的课程管理系统，核心的“课程配置”模块存在多层弹窗嵌套，维护成本极高。

  ::: details  **遇到的痛点 (The Pain)**
  * **幽灵回显**：Dialog 嵌套 Dialog 场景下，数据回填慢半拍，校验规则失效（竞态问题）。
  * **接口不可靠**：偶发 5xx 错误或 Token 过期，用户被迫频繁重新登录。
  :::

  ::: details  **我的解决手段 (The Fix)**
  * **精准时序**：配合 `nextTick` + `v-if` 强制重绘组件，确保 DOM 更新后再赋值，彻底解决竞态 Bug。
  * **Axios 兜底**：重写拦截器，实现 **无感 Token 刷新** 和 **错误自动重试 (Retry x3)**，将异常拦截在底层。
  :::
</div>

<div v-if="activeProject === 'web'" class="project-content fade-in">
  <h3>企业官网 - 极致性能优化</h3>

  <div class="badge-container">
    <img src="https://img.shields.io/badge/Vue-3-green" />
    <img src="https://img.shields.io/badge/Vite-Fast-purple" />
    <img src="https://img.shields.io/badge/Performance-优化-orange" />
  </div>

  **项目背景：**
  旧版官网首屏加载超过 3秒，且在 iOS Safari 12 等旧设备上白屏。目标是将首屏压进 1.5秒。

  ::: details  **遇到的痛点 (The Pain)**
  * **加载缓慢**：首屏加载了大量未使用的组件和未压缩图片。
  * **兼容性差**：旧版浏览器不支持 ES6+ 新语法，直接白屏。
  :::

  ::: details  **我的解决手段 (The Fix)**
  * **代码减肥**：配置路由懒加载 + Element Plus 按需引入，体积减少 60%。
  * **资源加速**：全站 WebP + Gzip + CDN 缓存策略。
  * **Polyfill**：注入 Legacy 插件解决 Safari 12 白屏问题。
  :::
</div>

---

## 🔧 个人开源 / 练手

工作之余，我更喜欢写一些能“偷懒”的小工具。

| 项目名称 | 碎碎念 (Why I built this) | 源码 |
| :--- | :--- | :--- |
| **PuStarry Blog** | **(就是本站)** <br> 懒人流博客，写完 Markdown 推送 GitHub 自动发布。 | [GitHub](https://github.com/Starry-Pu) |
| [微孔板标记小工具](https://microplate-marking-tool.pages.dev) | **(解决痛点)**<br>可视化 **96 孔板标色工具**，支持自定义标记并一键导出图片。 | [GitHub](https://github.com/Starry-Pu/Microplate-Marking-Tool) |

---

## 🚦 待办计划 (Roadmap)
待更...
<style>
.project-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 10px;
  overflow-x: auto;
  white-space: nowrap;
}

.tab-btn {
  padding: 8px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center; /* 纯文字时居中更好看 */
  font-size: 14px;
  flex-shrink: 0;
}

.tab-btn:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-brand);
}

.tab-btn.active {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.badge-container {
  display: flex; 
  gap: 6px; 
  margin-bottom: 10px; 
  flex-wrap: wrap;
}

/* 简单的淡入动画 */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>