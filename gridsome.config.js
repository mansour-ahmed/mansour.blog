// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ahmed Mansour",
  siteUrl: "",
  siteDescription: "",
  titleTemplate: "%s - Ahmed Mansour",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["remark-highlight.js"]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/posts/**/*.md",
        typeName: "Post",
        route: "/:slug"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/about.md",
        typeName: "About"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/articles.md",
        typeName: "Articles"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/podcast.md",
        typeName: "Podcast"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/newsletter.md",
        typeName: "Newsletter"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/content/courses.md",
        typeName: "Courses"
      }
    }
  ]
};
