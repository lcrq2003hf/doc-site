import { DefaultTheme } from "vitepress";

export const vitepressRoutes: DefaultTheme.SidebarItem[] = [
  { text: 'Vitepress', items: [
    { text: '简介', link: '/vitepress/overview' },
    { text: '安装与使用', link: '/vitepress/install' },
    { text: '路由', link: '/vitepress/route' },
    { text: '配置', link: '/vitepress/config/index', items: [
      { text: 'defineConfig', link: '/vitepress/config/define-config',  },
      { text: '主题配置', link: '/vitepress/config/theme/index', items: [
        { text: '导航配置', link: '/vitepress/config/theme/nav',  },
        { text: '侧边栏配置', link: '/vitepress/config/theme/sidebar',  },
      ]  },
    ] },
    { text: '布局', link: '/vitepress/layout',  },
    { text: '部署', link: '/vitepress/deploy' },
    { text: '图标', link: '/vitepress/icon' },
  ] }
]