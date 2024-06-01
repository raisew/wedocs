# ico

在 HTML 中，可以通过不同的方式引入各种格式的图标（favicon）。常见的图标格式包括 ICO、PNG、SVG 和 Apple Touch Icon。以下是每种格式的引入方式

## 1. ICO 格式

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

## 2. PNG 格式

```html
<link rel="icon" href="favicon.png" type="image/png" />
```

## 3. SVG 格式

```html
<link rel="icon" href="favicon.svg" type="image/svg+xml" />
```

## 4. Apple Touch Icon (用于苹果设备上的书签和快捷方式)

```html
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png" />
```

## 5. Android Chrome

```html
<link rel="icon" sizes="192x192" href="android-chrome-192x192.png" />
<link rel="icon" sizes="512x512" href="android-chrome-512x512.png" />
```

## 6. 多种格式同时引入

```html
<!-- ICO格式 -->
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<!-- PNG格式 -->
<link rel="icon" href="favicon.png" type="image/png" />

<!-- SVG格式 -->
<link rel="icon" href="favicon.svg" type="image/svg+xml" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png" />

<!-- Android Chrome -->
<link rel="icon" sizes="192x192" href="android-chrome-192x192.png" />
<link rel="icon" sizes="512x512" href="android-chrome-512x512.png" />
```
