---
url: taming-complexity-structuring-phoenix-contexts
title: Taming Complexity - Structuring Phoenix Contexts
date: 2023-10-20
tags: ['Phoenix', 'Elixir']
keywords: phoenix contexts, elixir software design, ecto schema, software complexity, phoenix application organization, phoenix queries, elixir changesets, phoenix database operations, embedded_schema in phoenix, layered coding in elixir, decluttering software, phoenix context layers, elixir design patterns, phoenix app structuring, ecto validation in elixir, software reorganization methods, taming software complexity.
description: "Managing complexity in Phoenix contexts using Elixir: Uncover a structured layering approach—from public contexts to changesets. Streamline and optimize your Phoenix code, making it more readable and intuitively structured."

---

Imagine moving into a room. It's neat. Everything's in place. You love it. But as life happens, you get more stuff, add rooms and clutter creeps in. Sound familiar?

Building software is similar. You start with a clean slate. But as you scale, add features, and integrate systems, things get... complicated. Suddenly, you're tripping over your own creation. Just as we tidy up a messy home, apps need decluttering and reorganizing.

My measure of complexity? How much a piece of the system makes my head hurt. In my Phoenix apps, contexts are a frequent headache source for me. They often do too much.

To calm things down, I tend to split my contexts into layers:

- Public Context
- Schema
- Queries
- Changesets

Here's what that might look like:


```
├── posts/
│   ├── posts.ex
│   ├── post_schema.ex
│   ├── post_queries.ex
│   ├── post_changesets.ex
├── complex_context/
│   ├── schemas/
│   ├── changesets/
│   ├── queries/
│   ├── sub_complex_context/
│   ├── complex_context.ex
├── utils/
│   ├── util_a.ex
│   ├── util_a_test.exs
│   └── ...
└── ...
```

The **Schema** layer (`post_schema.ex`) covers only the Ecto schema, no changesets. Now you can see easily which database schemas are in the context.

The **Queries** layer (`post_queries.ex`) handles all the database operations, excluding validation. It's for internal use within its context only.

The **Changesets** layer (`post_changesets.ex`) centralizes Ecto changesets, focusing on validation. It maps and validates data, even without a backing database schema.

The **Public Context** layer (`posts.ex`) is the context's public API to the rest of your app. Here, you'll find business logic beyond queries or validation.

In this approach, we've shifted many of the context's original duties to specialized layers. This gives the public context layer room to handle things like validating parameters and enforcing data structures before engaging the context's internal layers.

Even with simple contexts, I use this layered approach for consistent, predictable code.

For more complex cases, the `embedded_schema` has been helpful. You can use it to provide a public-facing data structure that is separate from your database schema.

This pattern helps in making my contexts a calmer place. Now my head tends to hurt a lot less when dealing with my contexts.

What strategies have you found effective against complexity? I am curious to hear, please do reach out at ahmed@mansour.blog .

I appreciate your attention!
