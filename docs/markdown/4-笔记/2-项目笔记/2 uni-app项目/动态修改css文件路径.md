# 动态修改css文件路径

```jsx
const link = document.createElement("link");
  link.rel = "stylesheet";
  if (flag) {
    link.href = `/static/css/themes/${newValue}.css`;
  } else {
    link.href = `/static/css/themes/${newValue}.css`;
  }
  document.head.appendChild(link);
  // 删除之前已经加载的主题样式表
  const themeLinks = document.querySelectorAll(
    'link[rel="stylesheet"][href^="/static/css/themes"]'
  );
  for (const themeLink of themeLinks) {
    if (themeLink !== link) {
      themeLink.remove();
    }
  }
```