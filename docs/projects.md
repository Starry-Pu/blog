# 🛠️ 我的项目 (Project Portfolio)

> 这里展示我职业生涯中的核心项目，以及业余时间开发的有趣工具。

---

## 🌟 核心实战 (Featured Projects)

### 1. 在线教育平台 - 核心交互模块重构
<Badge type="tip" text="Vue2" /> <Badge type="warning" text="Element UI" /> <Badge type="danger" text="Axios" />

> [cite_start]**项目背景**：这是一个交互复杂的教育课程产品，我主要负责表单模块和核心交互逻辑的开发与优化 [cite: 21, 24]。

**🔥 遇到的挑战 (Challenge)：**
* [cite_start]**数据回显失效**：在复杂的弹窗（Dialog）嵌套表单场景下，经常出现数据无法正确回显的问题 [cite: 26]。
* **接口不稳定**：后端接口偶尔超时或报错，导致前端用户体验极差。

**💡 我的解决方案 (Solution)：**
1.  [cite_start]**深入源码解决回显**：我不满足于表面修复，而是深入研究了 **Element UI 源码** 和 Vue 的 **`nextTick`** 机制，彻底解决了 `el-form` 在异步渲染下的赋值时序问题 。
2.  [cite_start]**Axios 深度封装**：设计了一套统一的请求拦截机制，实现了自动重试、Token 自动注入以及统一的异常处理逻辑，极大提升了代码的可维护性 [cite: 29]。

**🏆 成果 (Result)：**
* [cite_start]交互 Bug 率降低约 **60%** 。
* [cite_start]页面加载稳定性提升至 **95%** 以上 。

---

### 2. 企业级官网 - 全链路设计与性能优化
<Badge type="tip" text="Vue 全家桶" /> <Badge type="info" text="A/B Test" /> <Badge type="success" text="性能优化" />

> [cite_start]**项目背景**：独立负责公司官网从设计到上线的全流程。针对旧版网站加载慢、转化率低的问题进行了彻底重构 [cite: 34, 37, 40]。

**🔥 遇到的挑战 (Challenge)：**
* **加载缓慢**：旧版网站代码冗余严重，首屏加载时间过长，导致用户流失。
* **转化率低**：页面布局不合理，用户难以找到核心入口。

**💡 我的解决方案 (Solution)：**
1.  [cite_start]**组件化架构**：基于 Vue 构建了一套可复用的 UI 组件库，减少了大量重复代码 [cite: 43]。
2.  [cite_start]**数据驱动设计**：引入 **A/B 测试** 工具，通过真实用户数据来调整页面布局和交互流程，而不是凭感觉设计 [cite: 44]。
3.  [cite_start]**极致性能优化**：通过优化渲染逻辑和资源加载，将首屏加载时间控制在 **2秒** 以内 。

**🏆 成果 (Result)：**
* [cite_start]首屏加载速度提升显著，用户转化率提升约 **15%** 。

---

## 🔧 个人开源 / 练手项目

[cite_start]除了工作项目，我也喜欢在业余时间钻研新技术，比如 **React** 和 **VitePress** 。

| 项目名称 | 简介 | 技术栈 | 源码 |
| :--- | :--- | :--- | :--- |
| **Pustarry Blog** | 你现在看到的这个博客！基于 VitePress 搭建，极简暗黑风格。 | `VitePress` `Vue3` | [GitHub](#) |
| **React 任务看板** | (自学项目) 模仿 Trello 的任务管理工具，实践 Hooks 和状态管理。 | `React` `Redux` | [GitHub](#) |
| **前端工具库** | 自己平时积累的常用 JS 工具函数集合。 | `TypeScript` | [GitHub](#) |

---

## 💡 待开发计划 (Roadmap)

- [ ] **机械键盘选购指南**：结合我的机械专业背景和程序员身份，写一个选购网页。
- [ ] **可视化简历生成器**：把 Markdown 简历自动转成 PDF。