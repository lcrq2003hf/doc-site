---
layout: home
lastUpdated: true
hero:
  name: 知识库
  text: javascript
  tagline: 文档
  image:
    src: /vitepress-logo-large.webp
    alt: 文档
  actions:
    - theme: brand
      text: 开始
      link: /guide/index
    - theme: alt
      text: github
      link: /guide/index
features:
  - icon: 🚀
    title: 标题
    details: 描述 
  - icon: 🚀
    title: 标题
    details: 描述 
  - icon: 🚀
    title: 标题
    details: 描述 
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(34px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>