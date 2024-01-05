# 与 git 集合

### 1、在 github 上新建 JAVA 项目

### 2、在项目下创建`README.md`，里面写上项目的介绍

### 3、在项目下创建`.gitignore`

```bash
*.class

#package file
*.war
*.ear
# *.jar  我采用的是maven，所以不用加上，如果不是采用中央仓库的，可以加入忽略

#kdiff3 ignore
*.orig

#maven ignore
target/

#eclipse ignore
.settings/
.project
.classpatch

#idea ignore
.idea/
/idea/
*.ipr
*.iml
*.iws

#temp file
*.log
*.cache
*.diff
*.patch
*.tmp

#system ignore
.DS_Store
Thumbs.db
```

### 4、连接远程仓库

```bash
git remote add origin 复制的ssh
```

### 5、提交上传

```bash
git add .
git commit -am "你的信息"
git pull
git push -u -f origin master
```

### 6、以 master 分支为基础，创建第一个子分支

```bash
git checkout -b 第一个子分支名 origin/master
git push origin HEAD -u
```

可以看到 v1.0 子分支上有 master 分支的所有内容
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051740387.png)
