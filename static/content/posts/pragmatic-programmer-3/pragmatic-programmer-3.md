---
slug: on-being-a-pragmatic-programmer-principles
title: On being a pragmatic programmer - Principles
date: 2019-04-15
author: Ahmed Mansour
keywords:
description:
---

You can find the intro to these post series [here](/on-being-a-pragmatic-programmer-intro).

**Disclaimer**

I am by no means perfect, I am good at somethings and bad at others. The following points are merely my own notes, for myself, about different topics and takeaways in my attempt to be a better programmer. I share these notes in hope that somebody would find them helpful in their journey of becoming better at their craft.

# Principles

## Flexible code

I see a pattern in almost every software project I work in, unexpected things and given assumptions change. Project's requirements are typically a living thing that evolves over time.

When I am designing a system or implementing a module, I must leave room for changes. Even if today I am 100% certain that a given assumption won't change. Because the truth is, it changes. Instead of fighting change, I should welcome it and have my work support it.

Takeaway: Be prepared for the change, create flexible systems.

## Shy orthogonal code.

I like the term of writing "shy" code, shy in a sense that it doesn't need to know about other parts of the codebase.

Just like the principle of giving the minimum needed access rights to a user in the security world. Code need to be by default shy and only when its necessary it would get to know about other parts of the application - preferably through an abstracted proxy.

As a result of following this principle modular code is born.

Takeaway: Write shy code.

## DRY and make it easier to reuse your code.

DRY (Don't repeat yourself) needs no explanation. It is a principle that is likely familiar to many.

The first challenge I personally encounter is following DRY by design. How to structure the code in a way that would actually makes it easy not to repeat myself. If I am under tight schedule, it becomes difficult to stick to such principles.

The self talk for me would be something like this... "You are in a rush now, you can change this later, but now its faster to copy paste that piece of code". But the truth is, in the long run these small issues add up, sometimes exponentially, and it really does bite me back. Plus often it happens that I end not having the chance to change the "temporary" code later.

DRY can be violated deliberately or non-deliberately. Sometimes due to lack of awareness, I might end up writing some code that another programmer has wrote earlier but I simply didn't know the code existed.

To stick to DRY I should aim to do the following:

- Write code in an acceptable level in terms of allowing reusability.
- Check before writing new code if existing code could be used instead.
- Think of the long term consequences before violating the DRY principle.

Takeaway: Enforce DRY by design.

## Refactor

Just like cars, the codebase needs regular check-ups and maintenance. Scheduling time dedicated for refactoring the code is important. However, scheduling a long period of time only for refactoring is risky and sometimes unrealistic.

A better approach I found is, doing a little bit everyday. The idea is simple, everytime I work with the code, I aim to make it a little bit better and refactor a small chunk of the code. I see multiple benefits to that approach.

First benefit, the task refactoring won't be a overwhelming task. The example that always come to my mind is cleaning home little by little everyday vs. once over the weekend.

This decreases the risk of not refactoring as often. But, also I would avoid being [a frog]() and a long-term change in my project culture and standards.

Second benefit, I mitigate the risk of not having time to schedule a long period of time to specifically refactor. Ideally, I would love to have scheduled periods where I can do nothing else but refactor the code. Unfortunately, it often doesn't work like this in real life. There are external factors that may or may not allow for such a luxury.

The regular check-ups are needed to have a good high-level overview of where the code stands in terms of quality. Of course peer-reviewing should help maintaining quality but sometimes the bigger picture is difficult to see in regular peer-reviewing sessions. These high-level check-up sessions would bring awareness to me that which areas I should tackle next during my everyday work.

Takeaway: Leave the codebase a little bit better everytime I work with it.
Takeaway: Hold regular high-level code quality check-ups.

## Ask Why

Working with software involves following a lot of different practices and methods. Best practices are generally good to follow, but **not blindly**.

Whether its an agile methodology or another formal process, I think its important to give these methods a thought first before committing to them. Even if these rituals are considered a best practice, it might be that in my case, it simply doesn't make sense.

> Tip 58: Don't Be a Slave to Formal Methods - The pragmatic programmer

Methods and practices are typically trying to solve a specific problem. I should consider if that particular problem is actually relevant to me or my team. This way, I would follow only methods that are actually beneficial in my given circumstance.

Takeaway: Ask why before adopting a process.

## Testing is compulsory

Regardless of any tight schedules or time pressure, skipping writing tests is not an option. It is simple, either I test the code myself or else my users will.

A couple of things that help me make sure I test my code enough...

First I mentally tie together coding and writing tests instead of thinking about them as two separate tasks.

> Coding Ain't Done 'Til All the Tests Run - The pragmatic programmer

Second helpful one is to consider what level of testing one should aim for. I use the following as a guide for myself.

> Write tests. Not too many. Mostly integration. - (Guillermo Rauch)[https://twitter.com/rauchg]

> Takeaway: Testing is not optional.

## Share reasons

Code comments serve many purposes in the code documentation process. One particular aspect of comments that I should aim to maintain is sharing the "why" side of things. I find it extremely helpful to write down why a piece of code is doing what it does.

Usually the "what" and the "how" are expressed by the code itself but why is difficult to guess. For example, if there is a corner case that the code handles, a couple of sentences explaining the corner case and why its the code does what it does would be very helpful. These comments aren't only to my colleagues but also to me when I at look at the same piece of code two months from now.

> Takeaway: Always document the "why" side of the code.

Other parts of the essay:

- [Part One - Mentality](/on-being-a-pragmatic-programmer-mentality)
- [Part Two - Organization & Team](/on-being-a-pragmatic-programmer-organization-and-team)