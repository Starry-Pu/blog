---
# 页面布局：主页
layout: home

# 首页的大标题设置
hero:
  name: "Pustarry 的小站"
  text: "记录 学习 与 生活"
  tagline: "欢迎来到我的个人知识库，这里存着我的宝藏。"

# 页面下方的4个卡片
features:
  - title: 📝 学习笔记
    details: 记录编程路上的坑与路，分享技术心得。
    link: /notes
  - title: 🎨 生活随笔
    details: 只有代码太无聊，这里还有生活和远方。
    link: /life
  - title: 🛠️ 我的项目
    details: 展示我开发的小工具和有趣的作品。
    link: /projects
  - title: 🐱 关于我
    details: 不止是代码。了解在这个博客背后的我。
    link: /about
---

<style>
/* --- 1. 强化标题样式 --- */
.VPHomeHero .name {
  font-size: 56px !important;
  line-height: 1.2 !important;
  background: -webkit-linear-gradient(120deg, #a78bfa 30%, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.3));
  position: relative;
  z-index: 10;
}

.VPHomeHero .text {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 24px !important;
}

/* =========================================
   核心大招：潜意识微流光 (Subliminal Flow)
   方向：从左 -> 右
   质感：极限淡雅，只有淡淡的一点点
========================================= */

.VPHomeHero::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 100vw;
  height: 100vh;
  
  background-image: 
    /* 第1层：高光 (青色) - 透明度降至 0.03 (3%) */
    linear-gradient(110deg, transparent 30%, rgba(34, 211, 238, 0.03) 50%, transparent 70%),
    /* 第2层：主洋流 (紫色) - 透明度降至 0.02 (2%) */
    linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.02) 50%, transparent 100%),
    /* 第3层：深海底 (深蓝) - 透明度降至 0.01 (1%) */
    linear-gradient(130deg, transparent 0%, rgba(59, 130, 246, 0.01) 60%, transparent 100%);
    
  background-size: 
    200% 100%, 
    200% 100%, 
    200% 100%;
    
  /* 稍微增加一点模糊，让这微弱的光更均匀 */
  filter: blur(50px);
  
  background-blend-mode: screen;
  pointer-events: none;
  
  /* 动画：向右缓缓流动 */
  animation: left-to-right-flow 12s linear infinite;
}

@keyframes left-to-right-flow {
  0% {
    background-position: 
      200% 0%, 
      150% 0%, 
      100% 0%; 
  }
  100% {
    background-position: 
      0% 0%, 
      0% 0%,     
      0% 0%;     
  }
}

/* --- 3. 底部卡片微调 --- */
.VPFeature {
  border: 1px solid rgba(255,255,255,0.05) !important;
  transition: all 0.3s ease;
  background-color: rgba(255,255,255,0.02) !important;
}

.VPFeature:hover {
  transform: translateY(-5px);
  /* 悬停边框也降到了极低 */
  border-color: rgba(139, 92, 246, 0.15) !important;
  background-color: rgba(255,255,255,0.05) !important;
}
</style>