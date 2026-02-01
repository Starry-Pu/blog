import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ==================== 基础配置 ====================
  base: '/blog/', // 部署到 GitHub Pages 的子路径
  title: "Pu Starry的小站",
  description: "记录 学习 与生活",
  lastUpdated: true, // 开启最后更新时间功能

  // ==================== 主题配置 ====================
  themeConfig: {
    // 1. 头部导航 (Logo + 标题 + 菜单)
    logo: '/logo.png',
    siteTitle: 'Pu Starry Blog',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📝 学习笔记', link: '/notes' },
      { text: '🛠️ 我的项目', link: '/projects' },
      { text: '🎨 生活随笔', link: '/life' },
      { text: '🐱 关于我', link: '/about' }
    ],

    // 2. 布局设置 (已按你的要求清空)
    sidebar: false, // 🚫 关闭左侧菜单
    docFooter: {    // 🚫 关闭底部的"上一页/下一页"
      prev: false,
      next: false
    },

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starry-Pu' }
    ],

    // 4. 底部页脚
    footer: {
      message: '记录学习与生活',
      copyright: 'Copyright © 2025-present Pu Starry'
    },

    // 5. 最后更新时间显示格式
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})