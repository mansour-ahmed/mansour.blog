---
url: jamstack-what-why-and-how
title: JAMstack - What, why and how
date: 2019-02-05

draft: true
tags: ['JAMstack']
keywords: jamstack, netlify, gatsby, next, gridsome, nuxt, contentful, api, reusable, javascript, js, markup
description: An overview of the JAMStack. What is it all about, why it is a good approach in some cases and how to choose the right tools.
---

## What

If you have been doing any web development work recently, the odds are you have heard of the JAMstack, Gatsby, or Netlify.

Let me walk you through what is the hype about, you are going to like this!

If we compare that to the LAMPstack or the MEANstack, the JAMstack isn't really about specific tools but more about architecture and high level principles.

In a nutshell the JAMstack is

> A Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. - [Jamstack.org](https://jamstack.org)

JS + APIs + Markup = **JAM**

What does that mean and how does it differ from other ways of doing things you may ask?

### JavaScript

Any dynamic features that require data through a request/response cycle is done by javascript that is **running 100% on the client**.
The code can be any flavor of a frontend framework, library or just vanilla JS.

The key idea here is making all the dynamic features through calling different APIs **on the client**.

Remember that the templated markup is added in the deployment stage so dynamic features here would mean something like fetching user's own data through an API etc..

### APIs

All server-side and database logic should be accessible over HTTPS with JS. APIs can be built in-house customly or using any 3rd-party services such as Auth0, Algolia, etc..

The end goal is to have **abstraction through reusable well documented APIs**.

### Markup

All the templates should have already the necessary content at the build stage and ready at deploy time. In practice this would mean that **all content is fetched only once during the build time**.

Typically you will need to use a site generator for your content rich websites or some build tool for web apps.

### Best Practises

These are the JAM [best practices](https://jamstack.org/best-practices/):

- CDN hosted
- Atomic deploys
- Instant cache invalidation
- everything is living in git
- automated build (deployment through webhooks)

### Example

Let's have a look at how this could be applied in real life. Here is an architecture example following these principles.

![An example of a jamstack architecture](./architecture.png 'An example of a jamstack architecture')

##### Credits for the architecture example goes to [Hackernoon](https://hackernoon.com)

The tools used are:

- Next as a build tool
- React to build dynamic web app
- GraphQL to query content and abstract data sources
- Github for version control
- Netlify for the infra structure (CDN and serverless functions)
- Contentful as a headless CMS

Lets analyze some of the key elements for this architecture.

### Content

All the content is fetched during the build step **only once**. This removes the need to fetch the content every time the browser loads the page.

### No web servers

We have no web server but instead a CDN serving the React app built files. So everything is pretty much a regular file served through the CDN instead of a more complex setup of a web server.

### Hyper dynamic pages

A common misconception is that web applications that are built following the JAMstack architecture are static. That is simply not true. In the above example we have a web app built using React and all the dynamic features needed can be handled on the client.

## Why

There are many key benefits for following such an architecture for your system.

### Security & points of failure

Since the JAMstack significantly reduces the number of moving parts, as a result the risk of malicious hijacks decreases.

For example, we have no database, therefore we don't have to worry about things like SQL injections. Also we have no web server to serve our application so no worries about people exploiting your system through the server.

Since there are less moving parts, the JAMstack's simpler setup leaves less points of failure. There is nothing like my web server is the central point of failure.

Of course the CDN and the file storage could fail but typically these are backup and maintained by their vendor and aren't in the same way a single point of failure.

### SEO

All the content is already there when the app is served, so crawlers will be able to see the content with no issues. No need to worry about server side rendering or using proxies such as prerender.

So just relax and be sure that Google will know what you website is all about and never again you will have to worry about twitter cards not working.

### Cost

The JAM setup is cheaper in most cases.

For example if we consider the absence of web servers. CDN are typically quite affordable (free in some cases) making it cheaper compared to paying for web server instances.

### Performance

The JAM way offers a significant increase in performance especially for content heavy websites. Since all the content is already fetched and ready to be served. Also the CDN delivers the content to the client through the nearest edge location with low latency.

### Maintenance

Having less moving parts to worry about means less things to maintain.

Less maintenance = Less depression and alcoholism for your dev team and less cost for your business.

### Scaling

Have you had your servers crashing because of your app/website was featured on the first page of hacker news or product hunt? Or has your online shop crashed on black friday before? Then you will relate to this one.

Using the JAMstack makes scaling your application a lot easier. Since all the content is already there when the app is built, and its served through a CDN. We won't have to put any extra effort or face any scaling up issues. No need to worry about load balancers and spinning up extra instances.

With that said, we still need to ensure that our APIs are scalable. Especially these APIs that are accessed from the client to have more dynamic functionalities.

But at least one less thing less to worry about when it comes to ensuring your service is scalable.

### Software vendor lock

The JAM way is quite **flexible**.

In practice that would mean that your team won't need specific expertise in a large CMS or E-commerce solution. Of course some domain knowledge will be needed but typically these APIs driven architecture makes it easier to change smaller parts of the application.

For example, if you outgrow your current CMS solution and would like to change it, no problems just change the source of content through another API and you are good to go.

## How

By now hopefully you see some of the benefits of following the JAMstack architecture.

If you are asking yourself that if this is architecture is possible for you:

> If you can use it on the web, you can probably build it with the JAMstack. - jamstack.org

Your next question might be, so how to implement such an architecture. The answer, as always, is that **it depends**.

Here is an overview of the ecosystem:

![An overview of the JAMstack ecosystem. Starting from presentation layer and APIs all the way to Git, CDNs and backends](./ecosystem.png 'An overview of the JAMstack ecosystem. Starting from presentation layer and APIs all the way to Git, CDNs and backends')

##### Credits for the ecosystem diagram goes to Astasia Myers's [post](https://medium.com/memory-leak/the-jamstack-its-pretty-sweet-e0834e4e6bb7)

My initial thought was, **oh dear, this is huge!.**

That is the beauty of it, instead of gigantic monolithic platforms, you have smaller reusable, replaceable parts. This should support better your development team to meet business needs.

Here are some questions that I think are worth asking when picking **the right tool** for the job.

### Build time

How important is build time for your project and business? Does it matter for you if your build is in matter of few seconds or many minutes?

### Extensions

Do the tools you use have an ecosystem that supports your use case? Are there ready made plugins for some of your use cases?

### Purpose

Are you building a blog, e-commerce solution, marketing static website? Is your project more like content heavy website or is it more of a dynamic web application?

### Community

How helpful is the community? Community is one of these things that can either make or break a tool.

### Content Editor

Who will be editing the content? Is it a team or just one person? Does the editor have any technical skills?

## Resources

I hope by now you have a better overview of the JAMstack. Here is a list of some resources that can help you learn more:

- [JAMstack.org](https://jamstack.org/)

#### Podcasts

- [JAMstack radio](https://www.heavybit.com/library/podcasts/jamstack-radio/)

#### Blogs

- [The New Dynamic](https://www.thenewdynamic.org/)
- [Netlify’s blog](https://www.netlify.com/blog/)
- [Snipcart](https://snipcart.com/blog/categories/jamstack)

#### Lists

- [StaticGen](https://www.staticgen.com/)
- [HeadlessCMS](https://headlesscms.org/)
- [awesome-jamstack](https://github.com/automata/awesome-jamstack)
