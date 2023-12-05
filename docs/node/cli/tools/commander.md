# commander 概览

### 安装

``` shell
npm install commander
```

### 文档地址

[commander 文档地址](https://github.com/tj/commander.js)

### 选项

通过 `.option()` 设置选项， 通过 `.opts()` 获取命令行中真实的参数

``` typescript
import { Command } from 'commander'

const program = new Command()
/**
 * 使用 options 来配置用户自定义的参数，包括 key 和 value
 * key 的类型有两种： boolean 型，带参型。 注：不带参则为 boolean 型。
 * 参数 1：命令行中 key value
 * 参数 2：描述信息
 * 参数 3：默认值
 * 参数 4：自己定义解析函数
 */
// <type> 尖括号 <> 代表是带参选项, 尖括号中的只是一个描述，在代码执行无实际意义，key 为 -- 后紧跟的字符
program.option('-p, --pizza-type <type>', 'flavour of pizza', '666')
// -d 为简 --debug 选项的简写
program.option('-d, --debug', 'output extra debugging')
// 必填选项
program.requiredOption('-c, --cheese <type>', 'pizza must have cheese')

const options = program.opts()
```

### 版本号

可以设置本号，当执行 xx-cli -v 的时候输出脚手架的版本信息

``` typescript
program.version('0.0.1', '-v --version')
```

### 命令

通过 `.command` 配置命令

``` typescript
/**
 * 为命令提供参数的第一种方式：command
 * 1. <> 为必选参数
 * 2. [] 为必选参数
 * command 定义形参
 * action 使用实参
 */
program.command('clone <source> [destination]')
  .description('clone a repository')
  .action((source, destination) => {
    console.log('clone command called')
  })

/**
 * 为命令行提供参数的第二种方式：argument
 * 1. <> 为必选参数
 * 2. [] 为必选参数
 * 3. argument 的第二个参数是对形参的描述
 */
program.command('clone <source> [destination]')
  .description('clone a repository')
  .argument('<source>', '描述')
  .argument('[destination]', '描述')
  .action((source, destination) => {
    console.log('clone command called')
  })
```

### 自动化帮助信息

帮助信息是 commander 基于你的程序自动生成的，默认的帮助选项是 `-h, --help`

``` shell
$ node index.js --help
Usage: index [options]

Options:
  -v, --version            output the version number
  -d, --debug
  -p, --pizza-type <type>   (default: "666")
  -h, --help               display help for command
```

### 问题

``` shell
# 脚手架如何新建命令？
# 脚手架如何设置形参？
# 命令行参数中 - -- 的区别是什么？
# 如何查看脚手架的帮助信息？
```

### 结束