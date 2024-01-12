# og 标签的参数说明

为了方便以后给客户网站做站内优化涉及到结构化数据优化，特意收集整理出每种类型的网站所对应的结构化数据优化代码，这种代码优化的作用是：

1. 推送准确地网站信息给搜索引擎蜘蛛。
2. 提升网站在社会化分享过程中的展现力。

智能摘要结构化数据类型标准参见以下说明：

## 1. 短视频类

```html
<!--必填-->
<meta property="og:type" content="video" />
<meta property="og:title" content="视频的显示名称" />
<meta property="og:description" content="视频的文字描述" />
<meta property="og:image" content="视频的显示图片" />
```

```html
<!--选填-->
<meta property="og:video" content="视频播放地址" />
<meta property="og:url" content="页面URL地址" />
<meta property="og:video:duration" content="视频播放的时长，秒" />
<meta
  property="og:video:pix"
  content="视频清晰度，1: 流畅; 2: 标清; 3: 高清; 4: 超清"
/>
<meta property="og:video:release_date" content="视频的创建时间" />
<meta property="og:video:update_date" content="视频的更新时间" />
<meta property="og:video:actor" content="视频演员" />
<meta property="og:video:director" content="视频导演" />
```

## 2. 影视信息类

```html
<!--必填-->
<meta property="og:type" content="videolist" />
<meta property="og:title" content="视频的显示名称" />
<meta property="og:description" content="视频的文字描述" />
<meta property="og:image" content="视频的显示图片" />
```

```html
<!--选填-->
<meta property="og:url" content="页面URL地址" />
<meta
  property="og:video"
  content="视频播放地址，若是更新中的电视剧，填最新剧集的url，若是更新完的电视剧，填第一集url"
/>
<meta property="og:video:actor" content="视频主演" />
<meta property="og:video:director" content="视频导演" />
<meta property="og:video:duration" content="视频播放的时长，秒" />
<meta
  property="og:video:pix"
  content="视频清晰度，1: 流畅; 2: 标清; 3: 高清; 4: 超清"
/>
<meta property="og:video:release_date" content="视频的上映时间" />
<meta property="og:video:update_date" content="视频的更新时间" />
<meta property="og:video:alias" content="视频别名" />
<meta property="og:video:area" content="地区" />
<meta property="og:video:score" content="评分" />
<meta property="og:video:base_score" content="评分总分，如9分，总分是10分" />
<meta
  property="og:video:update_new"
  content="最新剧集，如10，表示更新到第10集"
/>
<meta property="og:video:update_total" content="总剧集数" />
<meta property="og:video:tv" content="出品视频的电视台" />
<meta property="og:isfree:class" content="整数,1为收费" />
<meta property="og:video:class" content="视频类别，如悬疑、爱情、动作、" />
<meta property="og:video:voice_actor" content="声优，多用于动漫" />
<meta property="og:video:lecturer" content="讲师，多用于教育类视频" />
<meta property="og:video:host" content="主持人，多用于综艺主持人" />
<meta property="og:video:content_type" content="数字" />
<!-- (注：1. tv 电视剧；2. movie；　电影； 3. fun 综艺、娱乐节目；4. edu　教育; 5. comic　动画片、动漫; 6. documentary 记录片)-->
<meta property="og:video:language" content="视频语言" />
```

## 3. 小说类

```html
<!--必填-->
<meta property="og:type" content="novel" />
<meta property="og:title" content="小说名字" />
<meta property="og:description" content="小说描述" />
<meta property="og:image" content="小说封面图片" />
<meta property="og:novel:category" content="小说类别" />
<meta property="og:novel:author" content="小说作者" />
<meta property="og:novel:book_name" content="书名" />
<meta property="og:novel:read_url" content="阅读地址" />
```

```html
<!--选填-->
<meta property="og:url" content="页面URL地址" />
<meta property="og:novel:status" content="小说状态，如连载中" />
<meta property="og:novel:author_link" content="小说作者链接" />
<meta property="og:novel:update_time" content="更新时间" />
<meta property="og:novel:click_cnt" content="点击数" />
<meta property="og:novel:latest_chapter_name" content="最新章节" />
<meta property="og:novel:latest_chapter_url" content="最新章节url" />
<meta property="og:novel:author_other_books" content="作者其他作品" />
```

## 4. 新闻类

```html
<meta property="og:type" content="news" />
<meta property="og:title" content="新闻标题" />
<meta property="og:description" content="新闻摘要" />
<meta property="og:image" content="新闻图片" />
```

```html
<!--选填-->
<meta property="og:url" content="页面URL地址" />
<meta property="og:release_date" content="发布时间" />
```

## 5. 音乐单曲

```html
<!--必填-->
<meta property="og:type" content="music.song" />
<meta property="og:title" content="歌曲名" />
<meta property="og:music:artist" content="歌手" />
<meta property="og:music:play" content="播放链接" />
```

```html
<!-- 选填 -->
<meta property="og:music:album" content="专辑名称" />
<meta property="og:image" content="海报" />
```

## 6. 音乐专辑

```html
<!--必填-->
<meta property="og:type" content="music.album" />
<meta property="og:image" content="专辑配图" />
<meta property="og:title" content="专辑名称" />
<meta property="og:music:artist" content="歌手" />
<meta
  property="og:music:album:song"
  content=" title=歌曲名; url=歌曲播放链接"
/>
```

## 7. 软件下载

```html
<!--必填-->
<meta property="og:type" content="soft" />
<meta property="og:description" content="软件简介" />
<meta property="og:soft:file_size" content="软件大小" />
```

```html
<!--选填-->
<meta
  property="og:soft:operating_system"
  content="软件运行的操作系统，如windows、android、ios等"
/>
<meta property="og:image" content="软件的截图" />
<meta property="og:release_date" content="发布时间" />
<meta property="og:title" content="软件标题" />
<meta property="og:soft:download_count " content="软件下载次数" />
<meta property="og:soft:language" content="软件语言" />
<meta property="og:soft:license" content="软件的授权方式，如免费、收费等" />
<meta property="og:soft:url" content="软件的下载页面地址" />
```

## 8. 文档

```html
<!--必填-->
<meta property="og:type" content="document" />
<meta property="og:release_date" content="发表时间" />
<meta property="og:title" content="文档标题" />
<meta property="og:description" content="文档摘要" />
<meta property="og:document:type" content="文档类型，如ppt\pdf\doc\txt\xls等" />
```

```html
<!--选填-->
<meta property="og:image" content="文档的截图或配图url" />
<meta property="og:document:page" content="文档页数" />
<meta property="og:document:cost" content="获取文档的花费，如免费、5积分等" />
```

## 9. 普通文章

```html
<!--必填-->
<meta property="og:type" content="article" />
<meta property="og:image" content="http://exp.com/exp.jpg " />
<meta property="og:release_date" content="2012-10-06" />
<meta property="og:title" content="友情留言板留言大全" />
<meta
  property="og:description"
  content="友情留言板留言大全经典语句,资料来自:词叟"
/>
```

## 10. 图片

```html
<!--必填-->
<meta property="og:type" content="image" />
<meta property="og:image" content="http://e.com/e.jpg" />
```

## 11. 论坛帖子

```html
<!--必填-->
<meta property="og:type" content="bbs" />
<meta property="og:image" content="http://exp.com/exp.jpg " />
<meta property="og:title" content="三星i9100的Odin刷机方法和教程" />
<meta
  property="og:description"
  content="帖子《三星i9100的Odin刷机方法和教程(图文)》"
/>
<meta property="og:author" content="bbbxyoiil" />
<meta property="og:release_date" content="2012-07-17" />
<meta property="og:bbs:replay" content="10" />
```

## 12. 博客

```html
<!--必填-->
<meta property="og:type" content="blog" />
<meta property="og:image" content="http://exp.com/exp.jpg " />
<meta property="og:title" content=" 2014年电影上映时间表" />
<meta
  property="og:description"
  content=" 2014年电影上映时间表(内地即将上映的14部好莱坞大片)"
/>
<meta property="og:author" content="SunDay2065" />
<meta property="og:release_date" content="2013-12-01" />
```

## 13. 商品

```html
<!--必填-->
<meta property="og:type" content="product" />
<meta property="og:image" content="http://exp.com/exp.jpg " />
<meta property="og:title" content="海尔 HT-i860 3G智能手机" />
<meta
  property="og:description"
  content="海尔 HT-i860 3G智能手机四核 1.2Ghz处理器"
/>
<meta property="og:product:price" content="499" />
<meta property="og:product:orgprice" content="799" />
<meta property="og:product:currency" content="CNY" />
<meta property="og:product:score" content="0.93" />
<meta property="og:product:base_score" content="1" />
<meta property="og:product:brand" content="海尔" />
<meta property="og:product:category" content="手机" />
<meta
  property="og:product:nick"
  content="name=广东移动旗舰店; url= http://e.com/e.html"
/>
```
