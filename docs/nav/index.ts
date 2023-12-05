import { DefaultTheme } from "vitepress";

export const navesRoutes: DefaultTheme.SidebarItem[] = [
  { text: '导航', items: [
    { text: 'github', link: '/github/alias' },
    { text: 'node', link: '/node/index' },
    { text: 'vitepress', link: '/vitepress/overview' },
  ] }
]