<template>
  <Layout>
    <div v-html="$page.about.content"></div>
  </Layout>
</template>

<page-query>
query About {
  about: about(path: "/static/content/about") {
    content
    title
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.about.title
    };
  }
};
</script>
