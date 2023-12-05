import { DefaultTheme } from "vitepress";

export const nodeRoutes: DefaultTheme.SidebarItem[] = [
  {
    text: "Node.js",
    items: [
      {
        text: "脚手架",
        collapsed: true,
        items: [
          {
            text: "工程创建",
            items: [
              { text: "环境配置", link: "/node/cli/overview/environment" },
              { text: "创建 ts 工具库", link: "/node/cli/overview/create-lib" },
            ],
          },
          {
            text: "工具",
            items: [
              { text: "commander", link: "/node/cli/tools/commander" },
              { text: "inquirer", link: "/node/cli/tools/inquirer" },
              { text: "shelljs", link: "/node/cli/tools/shelljs" },
              { text: "ora", link: "/node/cli/tools/ora" },
              { text: "chalk", link: "/node/cli/tools/chalk" },
            ],
          },
        ],
      },
    ],
  },
];
