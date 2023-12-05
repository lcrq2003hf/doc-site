# 创建 ts 工具库

1. #### 初始化项目

   ```shell
   // 1. 创建文件夹 cli
   // 2. 初始化项目信息
   npm init -y
   ```

2. #### 添加 ts

   ```
   // 1. 添加 ts 相关依赖
   npm i typescript @types/node -S
   // 2. 生成 ts 配置文件
   tsc --init
   ```

3. #### 将项目转为包

   1. 添加编译脚本
   2. 注意点：所有的 js、ts 文件都需要将后缀写全，并且后缀统一为 js

   ```shell
   // 1. 打包的关键在于生成新产物之前，将老产物先删除掉
   // 2. 安装依赖
   npm i rmraf -D
   // 在 package.json 脚本
   {
   	"scripts": {
   		"build": "rimraf ./lib && tsc"	
   	},
   	"type": "module"
   }
   // 修改 tsconfig.json
   {
     ...
     // 这里的配置十分重要，配置有误的话会导致编译后的脚本无法执行
     "compilerOptions": {
     	...,
     	"outDir": "./lib",
     	"module": "ESNext"，
     	"moduleResolution": "Node",
     	"lib": ["ESNext"]
     }
     "include": ["src/**/*"]
   }
   
   # 重要：关于终端报错Error: ENOENT: no such file or directory, uv_cwd
   # 配置文件出错，重启终端即可正常后执行
   ```

4. #### 将工具包发布至 npm

   ```shell
   // 1. 创建 .npmrc 文件，在文件中添加如下内容
   registry=https://registry.npmmirror.com/
   // 2. 在 package.json 中添加 files 字段，告诉 npm 那些文件需要发布
   {
   	...
   	"files": [
   		"lib",
   		"bin.js"
   	]
   }
   // 3. npm login
   // 4. npm publish
   ```

   