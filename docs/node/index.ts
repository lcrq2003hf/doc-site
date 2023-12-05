import { DefaultTheme } from "vitepress";

export const nodeRoutes: DefaultTheme.SidebarItem[] = [
  { text: 'Node.js', items: [
    { text: '脚手架', collapsed: true, items: [
      { text: '环境配置', link: '/node/cli/environment' },
      { text: '创建 ts 工具库', link: '/node/cli/create-lib' },
      { text: 'commander', link: '/node/cli/commander' },
      { text: 'inquirer', link: '/node/cli/inquirer' },
      { text: 'shelljs', link: '/node/cli/shelljs' },
      { text: 'ora', link: '/node/cli/ora' },
      { text: 'chalk', link: '/node/cli/chalk' },
    ] }
  ] }
]