---
slug: temp-title
title: Temp Title
date: 2019-09-11
published: true
cover_image: ./images/add-rss-feed-to-gridsome.png
tags: []
hashtags: ''
author: Ahmed Mansour
keywords:
description:
---

## Introduction
For frontend-focused developers building web application backends is challenging. That is where the serverless paradigm comes in handy. Developers can leverage the serverless paradigm to create scalable backend systems easily.

The basic idea of a serverless architecture is to abstract away the resources' maintenance and instead focus on consuming these resources through APIs. Such an architecture takes away the responsibility of maintaining databases and backend web servers to the vendors instead of you my dear developer.

You as a developer can focus on writing the code and solve your unique business problems. Depending on your use case, this architecture can have its short comings, there are no silver-bullet solutions. However, if you are a developer who knows Javascript and your requirements are not strict, you will be a lot more productive using the serverless paradigm.

## Why serverless

If you are not sure yet, I will share with you some of the good sides of the serverless world.

### Cost

You pay for what you use. That means, you don't need to pay for idling resources that you utilise occasionally.

### Smaller team & Maintenance

In a serverless architecture, there are less moving parts. This way, you can get quite far with a small dev team. The vendor takes care of security-patches, OS updates, backups and scalability. So your list of things to worry about becomes shorter and your team can focus on other important things.

## Case study

I decided to follow the serverless architecture for my project [nordgigs](http://nordgigs.com).

### Technology Stack

Here how my stack looks like:

**Frontend**
- [Vue]() & [Nuxt]()
- [Element UI]()
- [Scss]()
- [Typescript]()

**Serverless**
- [Netlify Functions]()
- [FaunaDB]()

**Third party**
- [Mailchimp]()
- [Sendgrid]()
- [Zapier]()

### Architecture

Here is a high level minimal version of the project architecture to demonstrate how different parts are connected. Keep in mind that this is a simplified version just to demonstrate how a serverless architecture would work on a high level. 

![An example of a serverless architecture I worked with.](./images/nordgigs-architecture.png 'An example of a serverless architecture I worked with.')


I also followed a JAMstack approach, if you are not sure what is that, I wrote about it [here](/jamstack-what-why-and-how).

### Netlify & Netlify functions

Netlify is used here as a hosting platform and also to create the serverless functions.

Out of the box, [Netlify](https://www.netlify.com/) integrates with Github, offers CI & a reliable CDN. 

[Netlify Functions](https://www.netlify.com/products/functions/) is a service that abstracts AWS Lambda's and allow you to easily create full API endpoints per function. They also have a generous free tier that offers 125k requests & 100 hours runtime per month.

I use Netlify since it simplifies cloud providers' basic functionalities so for my use case it was the obvious choice to be productive as soon as possible.

### Vue & Nuxt

I built the frontend using Nuxt & Vue.

I enjoy the simplicity of Vue so I tend to choose it in my greenfield projects.
Nuxt makes me productive quickly. Out of the box, Nuxt allows me to generate static pages and offers different on-demand modules such as Vuex & Typescript support.

The [JAMstack approach](/jamstack-what-why-and-how) was a good option for my use-case and Nuxt is a great tool to build jamstack web apps.

### Fauna


FaunaDB is a serverless cloud database. 

I considered other options such as:

- Google's Cloud Store & Firebase
- Amazon's Aurora & DunamoDB
- Azure's Cosmos
- MongoDB Atlas

Since I am not using any of the big cloud providers (Azure, GCP, AWS) I found that it might be an overkill just to use rely on one of these cloud providers for my DB.

So I ended up trying out Fauna. Two main points for me to chose Fauna was: 
- Big enough free tier for experimenting. 
- GraphQL support.

So far my developer experience has been positive and the learning curve has been low.

### Mailchimp, Sendgrid & Zapier

I am working on tutorials that explain in more details how you can build such a serverless web app.

// TODO CHECK AFFLIATE LINKS