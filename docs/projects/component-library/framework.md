# 搭建开发框架

#### 组件库工程应该具备的功能

1. ##### 组件库的开发

2. ##### 组件库的构建

3. ##### 组件库的发布

4. ##### 组件库文档的编写和发布

5. ##### 组件库开发工具 cli

6. ##### 组件库 example 的开发和发布

7. ##### 组件库的单元测试  

一. 搭建 pnpm monorepo

``` shell
npm install -g pnpm

1. 初始化 package.json
  pnpm init

2. 修改 package.json 文件中指定 type 属性为 module:
  {
    ...
    "type": "module",
    ...
  }

3. git 初始化
	git init

4. 创建目录
	mkdir -p example packages/wf-ui packages/docs

5. 配置 pnpm-workspace.yaml
  packages:
    - packages/*
    - example
    # exclude packages that are inside test directories
    - '!**/test/**'

    上面的配置指定了 example 为 package，packages 目录下的子目录也是 package。同时排除了所有的 test 目录。

6. 在 package.json 中指定 workspace:
  {
    ...
    "workspaces": [
      "packages/*",
      "cli",
      "docs",
      "example"
    ]
  }

7. 至此项目创建完成
```

二. 初始化 workspace-root

``` shell
1. 通用配置文件
	添加 .editorconfig 编辑器格式配置文件
    # http://editorconfig.org
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true

    [*.md]
    trim_trailing_whitespace = false
  添加 .gitignore 忽略文件
    logs
    *.log*
    node_modules
    dist
    lib
    es
    dist-ssr
    *.local

    .idea
    .DS_Store
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    .history
    **/.vitepress/cache
    **/.vitepress/.temp
    # test
    **/test/coverage
    
2. .npmrc 配置
	添加 .npmrc 文件, 设置 shamefully-hoist 为 true, 该操作的目的是进行依赖提升，但 pnpm 不建议这么做，所以我们不配置它。
  添加 registry 的配置 registry=https://registry.npmmirror.com/
	
3. 安装公共依赖
	在根目录下安装的依赖，在子模块里面都可以使用，所以为了避免在不同的模块中安装相同的依赖，相同的依赖咱们都提取到根项目中。
	如果配置了 monorepo , 想要在根目录下安装依赖，需要加上 -w
  # 前端框架
	pnpm install vue -w
  # 类型
	pnpm install @types/node typescript vue-tsc -D -w
  # vite
  pnpm install vite  @vitejs/plugin-vue @vitejs/plugin-vue-jsx -D -W
  # css 处理器
  pnpm install less -D -w
  # eslint
  pnpm i eslint @antfu/eslint-config -D -w
  
	
4. eslint 配置
	安装开发依赖
	pnpm install eslint -D -w
	初始化 eslint 配置
	npx eslint --init
    1）需要安装 @eslint/create-config，问是否继续： 当然需要继续，直接回车；
    2）使用 ESLint 来干嘛：我选最后一个 To check syntax, find problems, and enforce code style（检查语法、寻找问题、强制代码风格）
    3）使用哪种模块化的方式：肯定选 JavaScript modules (import/export) （几乎我参与的 vue 项目都是 ESModule）
    4）项目使用什么框架：Vue.js
    5）项目是否使用 TypeScript：Yes
    6）项目运行在什么环境：Browser
    7）如何定义项目的代码风格：Use a popular style guide 使用流行的风格
    8）在流行的风格中选择其中一种：Standard
    9）ESLint 配置文件的格式：JavaScript
    10）根据上面选择的，提示需要安装一大堆依赖，是否安装？Yes
    11）选择使用什么包管理工具安装：pnpm
  	如果报错的话，需要复制报错的信息，加上 -w 继续执行
  pnpm install vite-plugin-eslint -D -w
		由于不同的 package，vite 的配置不同，所以该插件在后面开发各个模块时才去配置。
5. 修改 eslint 的配置文件 .eslintrc.cjs
    module.exports = {
      root: true,
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'plugin:vue/vue3-essential',
        'standard'
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      },
      plugins: [
        'vue',
        '@typescript-eslint'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
    添加 eslint 的忽略文件， .eslintignore, 内容如下
    	lib/
    	dist/
    	
6. 至此完成 workspace-root 的初始化配置
```