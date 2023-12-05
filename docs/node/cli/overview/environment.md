#### 1. 仓库配置

```shell
cd ~/.ssh
# 查看并修改配置文件，切换至目标环境
cat config
```

#### 2. 关联已有的项目值 git 仓库中

```shell
git init

git remote add origin xxxxx

git pull

git add .

git commit -m "init"

git push
```

#### 3. 创建脚手架拉去模版

将 package.json 中的 type 字段修改为 module

```shell
npm init -y

npm i commander chalk --S

npm i shelljs fs-extra ora -S

#! /usr/bin/env node
import '../src/index.js'

```

##### 实现

```javascript
import { Command } from "commander";
import path from "path";
import fs from "fs-extra";
import inquirer from "inquirer";
import ora from "ora";
import { clone } from "./utils/git.js";

const EXIST_ACTION = {
  OVERWRITE: "overwrite",
  CANCEL: "",
};

const TEMPLATE_URL = "https://github.com/matthewhudson/current-device.git";

const program = new Command();

program.name("tg").description("clone template").version("1.0.0");

program
  .command("create <name>")
  .description("Create a new project")
  .action(async (name) => {
    create(name);
  });

program.parse();
```


