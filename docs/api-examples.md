---
outline: deep
---

# Runtime API Examples

![这是图片](https://picx.zhimg.com/70/v2-0cb071026c0f8e8b44ecbcdca36ffd5d_1440w.avis?source=172ae18b&biz_tag=Post)

![这是图片](https://img2.baidu.com/it/u=1814561676,2470063876&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500)

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
