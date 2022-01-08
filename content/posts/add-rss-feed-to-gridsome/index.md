---
url: add-rss-feed-to-gridsome
title: Add RSS Feed To Gridsome
date: 2019-08-28
draft: true
tags: ['Gridsome', 'Tutorial', 'Vue']

keywords: gridsome, rss, feed, tutorial, add, rss feed, vue, vue.js
description: How to add RSS feed to a Gridsome project.
---

## The Problem

You need an easy way to generate an RSS feed for your Gridsome project.

## The Solution

Utilize the [gridsome-plugin-rss](https://www.npmjs.com/package/gridsome-plugin-rss) plugin. 

### High-level steps

- Add the plugin to your project.
- Configure the RSS plugin.
- Test the RSS feed.

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

You can let Gridsome know to include the source map files by adding the following to your **gridsome config file**. 

```js
// gridsome.config.js

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

Now the RSS feed should be good to go, every time you build your Gridsome project a new RSS feed will be generated inside the **/static** directory.

Let's test the rss feed.

```bash
gridsome build
```


```bash
gridsome develop
```

Now navigate to **localhost:8080/rss.xml** and you should be able to see the generated RSS feed.

That is it folks, happy coding! 👍


[1]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
