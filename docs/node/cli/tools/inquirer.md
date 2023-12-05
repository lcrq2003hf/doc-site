# inquirer 概览

### 安装

``` shell
npm install @inquirer/prompts
```

### 文档地址

[inquirer 文档地址](https://github.com/SBoudrias/Inquirer.js)

### input


``` typescript
import { input } from '@inquirer/prompts'

const answer = await input({message: 'Enter your name'})

console.log('answer', answer)
```

### select


``` typescript
import { select } from '@inquirer/prompts'

const action = await select({message: 'Enter your name', choices: [{ name: '覆盖', value: 'overload' }, { name: '取消', value: 'cancel' }]})

console.log('action:', action)
```

### checkbox

注意：checkbox 是多选

``` typescript
import { checkbox } from '@inquirer/prompts'

const answer = await checkbox({
  message: 'select a package manager',
  choices: [
    {
      name: 'npm',
      value: 'npm'
    },
    {
      name: 'yarn',
      value: 'yarn'
    },
    {
      name: 'pnpm',
      value: 'pnpm'
    },
  ]
})

console.log('answer:', answer)
```

### confirm

注意： confirm 的返回值是 boolean 型

``` typescript
import { confirm } from '@inquirer/prompts'

const answer = await confirm({message: '是否重新安装'})

console.log('answer:', answer)
```

