// module.exports = {
//   title: 'Hello VitePress1111',
//   description: 'Just playing around.'
// }
import { DefaultTheme, defineConfig } from 'vitepress'
import { components } from '../components'
import { naves } from '../nav'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' },
  { text: '导航', link: '/nav/' },
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
    ...components
  ],
  '/nav/': [
    ...naves
  ]
}

export default defineConfig({
  title: '123',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})