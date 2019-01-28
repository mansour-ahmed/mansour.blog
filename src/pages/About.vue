<template>
  <Layout>
    <div class="about-container" v-html="$page.pageData.content"></div>
  </Layout>
</template>

<page-query>
query About {
  pageData: pages(path: "/static/content/pages/about") {
    content
    title
    description
    keywords
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.pageData.title,
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: location.href
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
          content: location.href
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

<style lang="scss" scoped>
.about-container {
  /deep/ img {
    width: 20rem;
  }
}
</style>
