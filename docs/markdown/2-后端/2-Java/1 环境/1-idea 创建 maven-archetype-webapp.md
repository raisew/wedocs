# idea 创建 maven-archetype-webapp

## 正常创建

**1、创建**

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051659655.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051659125.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051659757.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051700721.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051700784.png)<br/>

**2、把新项目改成标准的 maven 项目**

1. 创建 `/src/main/java` ，右键把 `java文件夹`改为 `sources Root`
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051701127.png)<br/>
2. 创建 `/src/test`， 再创建 `/src/test/java`，右键 `java`文件夹改为 `Test sources Root`
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051702748.png)<br>

3. 创建 `/src/main/resources`，并右键把`resources` 文件夹改为 `Resources Root`
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051703427.png)<br>
   结果如图：
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051703267.png)

**3、启动**

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051704669.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051704947.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051704038.png)

## 问题 1—— maven 版本太高，导致 404 错误（可能遇到）

**1、创建 artifact**

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051705035.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051705061.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051705569.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051706485.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051706196.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051706096.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051706050.png)

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051707401.png)

**3、配置 tomcat，并把项目插入进去**

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051707855.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051707456.png)
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051707747.png)<br>

**4、完成，可以进行以下操作测试**

1. Web.xml 中添加

```xml
<welcome-file-list>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
```

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051709193.png)

2. 新建 index.jsp，编写 Hello word
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051709396.png)
3. 启动后，在浏览器访问
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051709809.png)

## 问题 2—— 报错 unable to import maven project

**1、idea 报错 unable to import maven project**

我的错误是因为版本太高，我下载的是 3.6 版本，选一个 3.0.6 以下的版本即可
[3.0.5 版本](http://learning.happymmall.com/maven/windows_apache-maven-3.0.5-bin.zip)

然后重新配置 maven

**2、修改 maven 中央仓库位置**

重新配置 maven 时，顺便把中央仓库位置也改，不让他占 c 盘的位置

1. 把原始的 `repository` 拷贝一份到需要的路径下，可以在以下位置看到自己原始的 repository 在那里
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051710499.png)
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051710562.png)
2. 在你的新 repository 的文件夹下，创建一份 `settings.xml` 文件，并写入以下代码，`注意<localRepository>你的repository路径</localRepository>`

```xml
<settings>
 <localRepository>E:\maven-3.0.5\repository</localRepository>
 <servers>
    <server>
       <id>archiva.internal</id>
       <username>admin</username>
       <password>admin123</password>
    </server>

    <server>
       <id>archiva.snapshots</id>
       <username>admin</username>
       <password>admin123</password>
    </server>
 </servers>

 <mirrors>
   <mirror>
     <id>alimaven</id>
     <name>aliyun maven</name>
     <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
     <mirrorOf>central</mirrorOf>
   </mirror>
 </mirrors>
</settings>
```

3. 在 idea 中重新设置 maven
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051710500.png)
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051711937.png)
4. 每次新建项目都默认使用修改过后的 maven
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051711097.png)
   ![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051711947.png)
