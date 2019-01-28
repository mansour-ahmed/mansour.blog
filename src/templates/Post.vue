<template >
  <Layout>
    <NewsletterPopup v-bind:dialog="dialogVisible" delay="15000"/>
    <h1 v-if="$page.post">{{ $page.post.title }}</h1>
    <div v-if="$page.post" class="body2 pb-5">Written by:
      <g-link to="/about">{{ $page.post.author }}</g-link>
      - {{ $page.post.date }}
    </div>
    <div v-if="$page.post" v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query  Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    author
    date (format: "D. MMMM YYYY")
    image
    description
    keywords
  }
}
</page-query>

<script>
import NewsletterPopup from "~/components/NewsletterPopup";
export default {
  components: {
    NewsletterPopup
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {
    if (!this.$page.post) {
      this.$router.push("404");
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
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
          content: this.$page.post.description
        },
        {
          key: "keywords",
          property: "keywords",
          content: this.$page.post.keywords
        },
        { property: "og:title", content: this.$page.post.title },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.description
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
          content: this.$page.post.title
        },
        {
          key: "twitter:card",
          property: "twitter:card",
          content: "summary"
        },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.post.date
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";

/deep/ .g-image {
  max-width: 100%;
}

/deep/ .hljs {
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
  border-radius: 4px;
}
</style>
