# css 原子化(atomic css)

[antfu css原子化分享](https://antfu.me/posts/reimagine-atomic-css-zh)

### 定义

> 原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。

有些人可能会称其为函数式 CSS，或者 CSS 实用工具。本质上，你可以将原子化的 CSS 框架理解为这类 CSS 的统称：

``` css
.m-0 {
  margin: 0;
}
.text-red {
  color: red;
}
```

