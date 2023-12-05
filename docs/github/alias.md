# github 配置别名

### mac 电脑

``` shell
# 查看 git 配置
cat ~/.gitconfig

# 修改 git 配置
vi ~/.gitconfig

# 将以下配置粘贴至 .gitconfig 文件中
[user]
	name = xxx
	email = xxx@163.com
[alias]
  	co=checkout    
  	ci=commit
  	st=status
  	pl=pull
  	ps=push
  	dt=difftool
  	ca=commit -am
  	b=branch
[pull]
	rebase = true
[rebase]
	autoStash = true
```

### windows 电脑

``` shell
# 文件一般存储在 C:\Users\Administrator\.gitconfig

# 将以下配置粘贴至 .gitconfig 文件中
[user]
	name = xxx
	email = xxx@163.com
[alias]
  	co=checkout    
  	ci=commit
  	st=status
  	pl=pull
  	ps=push
  	dt=difftool
  	ca=commit -am
  	b=branch
[pull]
	rebase = true
[rebase]
	autoStash = true
```