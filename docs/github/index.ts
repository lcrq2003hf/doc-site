import { DefaultTheme } from "vitepress";

export const githubRoutes: DefaultTheme.SidebarItem[] = [
  { text: 'github', items: [
    { text: '别名配置', link: '/github/alias' },
    { text: '关联项目至 git 中', link: '/github/connect' },
    { text: '切换 ssh 源', link: '/github/switch-config' },
    { text: 'git clone 代码缓慢', link: '/github/clone-slow' },
    { text: '代码统计', link: '/github/statistics' },
  ] }
]