<template>
  <Layout>
    <div class="about-container content-box">
      <g-image
        alt="Ahmed Mansour proflile Picture."
        src="~/assets/images/author.png"
        width="180"
        height="180"
        class="profile-img"
      />
      <div v-html="$page.pageData.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query About {
  pageData: pages(path: "/content/pages/about") {
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

<style lang="scss" scoped>
.about-container {
  .profile-img {
    width: 10rem;
    border-radius: 50%;
    margin: 2rem auto;
    display: block;
  }

  .profile-image-container {
    text-align: center;
  }
}
</style>
