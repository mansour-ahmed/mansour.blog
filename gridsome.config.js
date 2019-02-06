// @TODO fix favicon
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ahmed Mansour",
  siteUrl: "https://ahmedmansour.me/",
  siteDescription:
    "Ahmed Mansour's website. Ahmed is a software engineer, professional trainer and entrepreneur living in Helsinki Finland",
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
        path: "static/content/pages/*.md",
        typeName: "Pages"
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-74640828-2"
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    }
  ]
};
