# shell 概览

### 安装

``` shell
npm install shelljs -S

npm i --save-dev @types/shelljs
```

### 文档地址

[shell 文档地址](https://github.com/shelljs/shelljs)

### exec

``` typescript
import shell from 'shelljs'

const cmd = 'git clone https://github.com/matthewhudson/current-device.git'

shell.exec(cmd, (code) => {
  console.log('code:', code)
  const isSuccess = code === 0
  return isSuccess
})
```