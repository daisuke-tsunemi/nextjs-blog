---
thumbnail: '/images/works/yukinko/thumbnail.webp'
image1: '/images/works/yukinko/img_1.webp'
image2: '/images/works/yukinko/img_2.webp'
image3: '/images/works/yukinko/img_3.webp'
image4: '/images/works/yukinko/img_4.webp'
image5: '/images/works/yukinko/img_5.webp'
image6: '/images/works/yukinko/img_6.webp'
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2022-01-02'
tag_1: 'リーフレットデザイン'
tag_2: 'グラフィックデザイン'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
