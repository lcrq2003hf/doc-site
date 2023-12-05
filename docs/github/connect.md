# 关联已有的项目至 git 仓库中

```shell
git init

git remote add origin https://github.com/lcrq2003hf/doc-site.git

git pull

git add .

git commit -m "init"

# 如果推送报错，需要先 pull 一下
git branch --set-upstream-to=origin/mian

git push
```

