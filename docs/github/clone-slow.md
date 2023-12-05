# git clone 代码缓慢的问题

# git 配置

解决配置梯子后，浏览器可以正常访问 git, 但是在命令行 clone 代码的时候无法 clone，****经常失败的问题**

#### 修改 git 代理

```shell
# 注意修改成自己的IP和端口号
git config --global http.proxy http://127.0.0.1:7890 
git config --global https.proxy http://127.0.0.1:7890
```

#### 取消 git 代理

```
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 查看代理

```
# 查看代理
git config --global --get http.proxy
git config --global --get https.proxy
```


