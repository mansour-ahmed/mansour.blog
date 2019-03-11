---
slug: on-being-a-pragmatic-programmer
title: On being a pragmatic programmer
date: 11-03-2019
author: Ahmed Mansour
keywords:
description:
---

> Why spend your life developing software unless you care about doing it **well**? - The pragmatic programmer

There is a great joy in being good at your craft. The craftmanship mentality is something I am strive to develop in everything I do. If I do something, I aim to do it well.

One of the great books about the subject is [the pragmatic programmer](). These are some my key takeaways from reading it.

# Mentality

Proactive vs reactive. Think what you can do.

## Be Proactive

Be proactive, be in control. I have come across this idea in number of books. Instead of being reactive to the world around me, I should do things **deliberately**. Some of the applications of being proactive as programmer I learnt:

- Criticize and appraise my work regularly.
- Think solutions, instead of problems. I try to ask myself, what in my control can I do to fix a problem.
- Seek regular feedback.

Takeaway #1: Be proactive, always think what I can do.

## Today Not Tomorrow

Being a craftman is often associated with being a perfectionist. Taking care of details is essential, but...

> **Great** software today is often preferable to perfect software tomorrow.

I hear this statement regularly in my circles. I 100% agree with the importance of shipping today instead of tomorrow.

However, I must not use this as an excuse to produce low quality results. The key word here for me is great and today. As a programmer I need to define the minimal acceptable standard that defines my work to be great. These standards should be holistic that consider all the important factors. This way I know when it is acceptable to stop.

Takeaway #2: Great today is almost always better than perfect tomorrow.
Takeaway #3: Define the minimal viable great version of my work.

## Knowledge portfolio

I have the interest in financial markets and investing. There are a lot of concepts from the investing world that could be applied to other aspects of life, including building software. As craftman I should aim to treat my knowledge in the same manner I manage my assets in my financial portfolio. These are high level strategies that I learnt are applicable to the software world:

- Invest regularly - Investing is a continuous process not a one time thing.
- Diversify - Diversify my knowledge portfolio with different technologies.
- Manage risk - A balance between new risky technologies and more robust existing technologies.
- Review and rebalance - Rebalance my knowledge portfolio on yearly basis.
- Buy low, sell High - Learn when a tool is still growing. And when it has reached its maximum potential I should go and learn something else.

Takeaway #4: Manage my knowledge portfolio. Regularly invest, diversify, manage risk and rebalance.

## Flexible code

I saw a pattern from almost every project I worked on, unexpected things change. Project's requirements are a living thing. When I am designing a system or implementing a module, I must leave room for changes. Even if today we are 100% certain that a given understand won't change. Because the truth is, it changes. Instead of fighting changes, I should welcome them and have my code support them.

Takeaway #5: Be prepared for the change, create flexible systems.

## Be pessimistic

"**_Can't read value of undefined_** - Oh, I thought this should never happen!". Does this sound familiar to you?

Every programmer has a set of assumptions that they work based on. When it comes to assumptions, I learnt that being pessimistic pays off!

For example, if I am developing an application that has an external dependency. I would have specific expectations regarding the data I would receive from these systems. Before processing any data I always have to validate the response given. Not only that I should validate the data, I also should handle cases when the "unexpected" happen. This way I am more confident that my work is more robust and resilient.

Takeaway #6: Be pessimistic when writing code.

## Programming by coincidence

Program Deliberately - know what your doing and document your assumptions.

..... Picture of I don't know why it works.

I have experienced this exact situation a few times. While this is funny, I should not let be **programming by coincidence**. When making changes in a system, I must understand the important aspects of the system to be confident to change it. Unexpected results likely have unexpected side effects.

For instance, I am a big fan of tools that help me quickly bootstrap a project. While these really save a lot of time, to be able to use these generators, I should understand the code the tool created even if I didn't write it myself. This way I can confidently build on top of the code generated and things are not working just by coincidence.

Takeaway #7: Know what I am doing and avoid programming by coincidence.

## Ownership and pride

I need to be take ownership of my work and be responsible for the work I produce. I don't refer to only the external responsibilities that my employer has defined. I

We want to see pride of ownership. "I wrote this, and I stand behind my work."

Tip 70: Sign Your Work

Takeaway #8:

## Tools & Environment

Editor
Code generators
Version control

# Organization

## Dont be a frog

In the book, the authors articlate in a simple way how small problems can grow quickly.

Think of a frog. If we throw the frog in a boiling hot water pot, it will jump immediately out. However, if we put it in cool water and heat the water slowly the frog won't notice the temperature changing and will die boiling.

> Don't be a frog.

The point here is, small problems grow to become bigger problems without me noticing. I should fix the small problems immediately or I would be risking being the frog.

Takeaway #9: Small problems grow to to become bigger problems. I must fix my broken windows, small problems, immediately.

## Speak the same language

.....Picture of different domain trying to communicate

I have seen many conversations that go something like this:
Engineer person: "I think X needs to be fixed in that way."
Business person: "No, I think Y is more important! let's fix that".

30 mins later...They realize they are referring to the same thing but with different terms.

Unifying domain language is essential. The same word must carry the same meaning across teams. The domain language should not only be in daily communication but present in the documentation and the code level. This way I would avoid miscommunications, frustrations and I make more friends!

 I found one way to make sure teams are on the same page, is to define a glossary of all common domain specific terms.

 Takeaway #10: Unify domain language and document it.

## Measure it to manage it

In many projects I found managing requirements' growth and aligning project scopes a challenging task.

The main challenge here is I am not able to see how does a feature impact the schedule of a project. It becomes even more challenging, If I would have a hard deadline, a "yes" to a feature would mean "no" to another feature. To manage requirements and scopes, I must be able to point out the impact of every feature request on the schedule of my project.

Takeaway #11: Maintain an environment that supports easily measuring the overall impact of a new change on the project schedule.
<!-- The key to managing growth of requirements is to point out each new feature's impact on the schedule to the project sponsors. -->

## Freedom

Degrees of Freedom - The Specification Trap

## Automation

Automation is an essential component of every project team

## Expectations

The success of a project is measured by how well it meets the expectations of its users. Tip 69: Gently Exceed Your Users' Expectations

## Team up

Team per functionality not per competence.

# Team

## Estimate

Estimate well. 1- understand , 2- model the system, 3- give per part a value, 4- add range. Estimations should be done regularly.

What to Say When Asked for an Estimate
"I'll get back to you."

Challenges
Start keeping a log of your estimates. For each, track how accurate you turned out to be. If your error was greater than 50%, try to find out where your estimate went wrong.

## Dig for the truth

Requirements are rarely easily available so as an engineer I need to just gather them. Typically the root problem is not that easy to find and require asking lots of "why" questions to get to the bottom of the issue.

Takeaway : Ask why more often to get the real requirements.

Typically software is built to serve a specific domain. People that build and design the software are not necessarily experts in that domain. Whenever possible, working with a real user makes such a great difference. In that case I am able to understand a lot better the users' needs, pain points and goals.
Takeaway : Work with a user whenever is possible.

<!--
Tip 51: Don't Gather Requirements—Dig for Them
Tip 52: Work with a User to Think Like a User -->

## Tightening the Net

The concept here is to ensure that we find the bugs once. If a bug slips through the net of existing tests, you need to add a new test to trap it next time.

<!-- Tip 66: Find Bugs Once -->

# Principles

Shy orthogonal code.

DRY and make it easier to reuse your code.

better to crash than to trash.

Design for concurrency.

Refactor

Code that is easy to test - Tip 49: Test Your Software, or Your Users Will

Tip 58: Don't Be a Slave to Formal Methods

Tip 63: Coding Ain't Done 'Til All the Tests Run

comment why something is done
