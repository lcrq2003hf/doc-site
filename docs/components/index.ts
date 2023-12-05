import { DefaultTheme } from "vitepress";

export const componentsRoutes: DefaultTheme.SidebarItem[] = [
  {
    text: '分组一',
    items: [
      { text: 'foo', link: '/components/foo' }
    ]
  },
  {
    text: '分组二',
    items: [
      { text: 'fooV2', link: '/components/foo-2' }
    ]
  },
]