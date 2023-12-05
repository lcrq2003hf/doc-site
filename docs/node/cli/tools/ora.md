# ora 概览

### 安装

``` shell
npm install ora -S
```

### 文档地址

[ora 文档地址](https://github.com/sindresorhus/ora)

### loading

``` typescript
import ora from 'ora'

const loading = ora('下载中...')
loading.start()
setTimeout(() => {
  loading.succeed('下载完成')
  loading.stop()
}, 3 * 1000)
```
