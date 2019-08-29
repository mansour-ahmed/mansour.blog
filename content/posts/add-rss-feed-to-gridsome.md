---
slug: add-rss-feed-to-gridsome
title: Add RSS Feed To Gridsome
date: 2019-08-28
published: true
cover_image: ./images/add-rss-feed-to-gridsome.png
tags: ['Gridsome', 'Tutorial', 'Vue']
hashtags: '#Gridsome #Tutorial #Vue'
author: Ahmed Mansour
keywords: gridsome, rss, feed, tutorial, add, rss feed, vue, vue.js
description: How to add RSS feed to a Gridsome project.
---

## The Problem

You need an easy way to update generate an RSS feed for your Gridsome project.

## The Solution

Utilise the [gridsome-plugin-rss](https://www.npmjs.com/package/gridsome-plugin-rss) plugin. 

### High-level steps

- Add the plugin to your project.
- Configure the RSS plugin.

### Add the plugin to your project

Add the project as a dependency.

**Yarn**

```bash
yarn add gridsome-plugin-rss
```

**NPM**

```bash
npm install gridsome-plugin-rss
```

Now you need to add the plugin and its options to Gridsome's config file.

### Configure the RSS feed

For the debugger to work on the client, the source map files are needed in the browser.

You can let Nuxt know to include the source map files by adding the following to your **nuxt config file**. 

```js
  plugins: [
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'YOUR_CONTENT_TYPE', // Example: Post
        latest: true,
        feedOptions: {
          title: 'YOUR_WEBSITE_TITLE', 
          feed_url: 'YOUR_WEBSITE_URL + OUPUT_NAME', // OUTPUT_NAME must match the name of the feed below. Example: https://mansour.blog/rss.xml
          site_url:  'YOUR_WEBSITE_URL', // Example: https://mansour.blog
        },
        feedItemOptions: node => ({
          // Here you can map the data from the graphQL content type to the rss feed's fields
          // Example:
          // title: node.title,
          // description: node.description,
          // url: 'https://mansour.blog/' + node.slug,
          // author: node.author,
          // date: node.date,
          // categories: [node.hashtags]
        }),
        output: {
          dir: './static',
          // The name of the feed.
          name: 'rss.xml'
        }
      }
    }]
```

### Test rss feed

Now the RSS feed should be good to go, everytime you build your Gridsome project it will be generated inside the static directory.

Lets test the rss feed.

```bash
gridsome build
```


```bash
gridsome develop
```

go to your localhost + rss.xml and you should be able to see the generated RSS feed.

That is it folks, happy coding! 👍


[1]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
