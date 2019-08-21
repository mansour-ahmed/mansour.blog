<template>
  <Layout>
    <div class="about-container content-center">
      <div v-html="$page.pageData.content"></div>
    </div>

    <BookCard :book="book" v-for="book in $page.books.edges" :key="book.node.id" />
  </Layout>
</template>

<page-query>
{
  books: allBook(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        author
        title
        rating
        dateRead (format: "MMMM YYYY")
        content
        tags {
          id
          title
          path
        }
        url
      }
    }
  }
    pageData: pages(path: "/content/pages/bookshelf") {
    content
    title
    description
    keywords
  }
}
</page-query>

<script>
// import PostTags from "~/components/PostTags";
import BookCard from "~/components/BookCard";

export default {
  components: {
    // PostTags,
    BookCard
  },
  metaInfo() {
    return {
      title: this.$page.pageData.title,
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: process.browser ? location.href : undefined
        }
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.pageData.description
        },
        {
          key: "keywords",
          property: "keywords",
          content: this.$page.pageData.keywords
        },
        { property: "og:title", content: this.$page.pageData.title },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.pageData.description
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          key: "og:url",
          property: "og:url",
          content: process.browser ? location.href : undefined
        },
        {
          key: "twitter:text:title",
          property: "twitter:text:title",
          content: this.$page.pageData.title
        },
        {
          key: "twitter:card",
          property: "twitter:card",
          content: "summary"
        }
      ]
    };
  }
};
</script>

