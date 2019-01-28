<template>
  <Layout>
    <v-layout justify-center>
      <NewsletterForm/>
    </v-layout>
  </Layout>
</template>

<page-query>
query Newsletter {
  pageData: pages(path: "/static/content/pages/newsletter") {
    content
    title
    description
    keywords
  }
}
</page-query>

<script>
import NewsletterForm from "~/components/NewsletterForm";

export default {
  components: {
    NewsletterForm
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
          property: "description",
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

<style>
</style>
