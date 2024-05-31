# 离线缓存 manifest

## 使用

1. 在 `<html>` 上添加属性`manifest="文件名.manifest"`
2. 在 `文件名.manifest` ⽂件的编写离线存储的资源
3. 在离线状态时，操作 **window.applicationCache** 进⾏需求实现

## 工作原理

1. `在线`的情况下浏览器发现 **html** 头部有 **manifes** 属性，它会请求 **manifest** ⽂件
   - 如果是第⼀次访问 **app**，那么浏览器就会根据**manifest**⽂件的内容`下载相应的资源`并且进⾏`离线存储`。
   - 如果已经访问过 **app** 并且资源已经离线存储了，那么浏览器就会使⽤离线的资源加载⻚⾯，然后浏览器会`对⽐`新的 **manifest** ⽂件与旧的 **manifest** ⽂件，如果⽂件没有发⽣改变，就不做任何操作，如果⽂件改变了，那么就会重新下载⽂件中的资源并进⾏离线存储
2. `离线`的情况下，浏览器就直接使⽤离线存储的资源

## manifest.json

```html
<link rel="manifest" href="manifest.json" />
```

```json
{
  "name": "Phú Quốc",
  "short_name": "Phú Quốc",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#0175C2",
  "theme_color": "#0175C2",
  "description": "Phú Quốc",
  "orientation": "portrait-primary",
  "prefer_related_applications": false,
  "icons": [
    {
      "src": "icons/Icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/Icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "icons/Icon-maskable-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "icons/Icon-maskable-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```
