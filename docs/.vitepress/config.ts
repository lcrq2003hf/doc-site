// module.exports = {
//   title: 'Hello VitePress1111',
//   description: 'Just playing around.'
// }
import { DefaultTheme, defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { componentsRoutes } from '../components'
import { navesRoutes } from '../nav'
import { githubRoutes } from '../github'
import { nodeRoutes } from '../node'
import { vitepressRoutes } from '../vitepress'
import { cssRoutes } from '../css'
import { markdownRoutes } from '../markdown'
import markdownItTaskLists from 'markdown-it-task-lists'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' },
  ...(navesRoutes as unknown as DefaultTheme.NavItem[]),
  ...(vitepressRoutes as unknown as DefaultTheme.NavItem[])
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '文档介绍', link: '/guide/index' },
        { text: '快速开始', link: '/guide/quickstart' }
      ]
    }
  ],
  '/components/': [
    ...componentsRoutes
  ],
  '/github/': [
    ...githubRoutes
  ],
  '/node/': [
    ...nodeRoutes
  ],
  '/vitepress/': [
    ...vitepressRoutes
  ],
  '/css/': [
    ...cssRoutes
  ],
  '/markdown/': [
    ...markdownRoutes
  ],
}

export default withMermaid({
  title: '前端随笔',
  lang: 'cn-ZH',
  base: '/doc-site/',
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    config(md) {
        md.use(markdownItTaskLists)
    },
  }
})