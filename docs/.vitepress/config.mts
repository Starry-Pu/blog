import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 浏览器标签页上显示的标题
  title: "Pu Starry的小站",
  description: "记录 学习 与生活",

  themeConfig: {
    // 这里设置左上角的 Logo 图片
    logo: '/logo.png',
    
    // 网站左上角的标题文字
    siteTitle: 'Pu Starry Blog',

    // 顶部导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📝 学习笔记', link: '/notes' },
      { text: '🛠️ 我的项目', link: '/projects' },
      { text: '🎨 生活随笔', link: '/life' }, 
      { text: '🐱 关于我', link: '/about' }
    ],

    // 侧边栏 【本次关键修改】
    sidebar: [
      {
        text: '开始阅读',
        items: [
          // 新增这一行：让你的新文章出现在左侧菜单里
          { text: 'Markdown 语法速查', link: '/notes/markdown-learning' },
          
          { text: '我的笔记', link: '/notes' },
          { text: '🐱 关于我', link: '/about' }
        ]
      }
    ],

    // ====================================================
    // 1. 社交链接 (GitHub)
    // ====================================================
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starry-Pu' }
    ],

    // ====================================================
    // 2. 底部页脚 (Footer)
    // ====================================================
    footer: {
      message: '记录学习与生活',
      copyright: 'Copyright © 2025-present Pu Starry'
    },

    // ====================================================
    // 3. 最后更新时间 (已开启)
    // ====================================================
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})