// @TODO fix favicon
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ahmed Mansour Blog',
  siteUrl: 'https://mansour.blog/',
  siteDescription:
    "Ahmed Mansour's website. Ahmed is a software engineer, professional trainer and entrepreneur living in Helsinki Finland",
  titleTemplate: '%s - Ahmed Mansour',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      internalLinksTarget: '_blank',
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs']
    }
  },
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Book',
        path: 'content/books/*.md',
        refs: {
          tags: {
            typeName: 'BookTag',
            route: 'bookshelf/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/pages/*.md',
        typeName: 'Pages'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-74640828-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,
        feedOptions: {
          title: 'Ahmed Mansour Blog',
          feed_url: 'https://mansour.blog/rss.xml',
          site_url: 'https://mansour.blog'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mansour.blog/' + node.slug,
          author: node.author,
          date: node.date,
          categories: [node.hashtags]
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Book',
        feedOptions: {
          title: 'Ahmed Mansour Blog',
          feed_url: 'https://mansour.blog/rss2.xml',
          site_url: 'https://mansour.blog'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.author,
          url: 'https://mansour.blog/bookshelf#' +  node.title.replace(/ /g, "-").toLowerCase() ,
          author: node.author,
          date: node.dateRead,
          categories: node.tags
        }),
        output: {
          dir: './static',
          name: 'rss2.xml'
        }
      }
    }
  ]
};
