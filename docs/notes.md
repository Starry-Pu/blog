# 📝 学习笔记

这里记录我平时遇到的技术问题和解决方案。

## 2026-02-01

::: details 🐛 **html2canvas 截图掉色/透明** (点击展开)
**现象：** 网页正常，导出图片时图例 (Legend) 变透明/白板，但孔板颜色正常。

**原因：** `html2canvas` 是“画手”不是截图。它读不懂太新的 CSS（如 Tailwind 的 `bg-red-500` 或深层 CSS 变量），所以背景色画不出来。孔板能显示是因为用了内联样式。

**✅ 解决：** 别折腾配置，**关键颜色强制用 Inline Style**。
```jsx
// ❌ 截图可能会掉色
<div className="bg-red-500 ..."></div>

// ✅ 这样写最稳
<div style={{ backgroundColor: '#ef4444' }} ...></div>