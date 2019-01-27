<template >
  <Layout>
    <NewsletterPopup v-bind:dialog="dialogVisible" delay="15000"/>
    <h1 v-show="$page.post">{{ $page.post.title }}</h1>
    <div v-show="$page.post" class="body2 pb-5">Written by:
      <g-link to="/about">{{ $page.post.author }}</g-link>
      - {{ $page.post.date }}
    </div>
    <div v-show="$page.post" v-html="$page.post.content"></div>
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
  metaInfo() {
    return {
      title: this.$page.post ? this.$page.post.title : undefined,
      link: [
        // {
        //   rel: "canonical",
        //   href: window.location
        // },
      ],
      meta: [
        { name: "description", content: this.$page.post.description },
        { name: "keywords", content: this.$page.post.keywords }
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
