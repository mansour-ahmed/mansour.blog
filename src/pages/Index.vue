<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <TagsList :tags="$page.tags.edges" :type="'post'" />
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
 {
    pageData: pages(path: "/content/pages/home") {
    content
    title
    description
    keywords
  }
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        coverImage (width: 860, blur: 10)
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
  tags: allTag(sortBy:"title", order:ASC) {
    edges {
      node {
        id
        title
        path 
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import TagsList from "~/components/TagsList.vue";

export default {
  components: {
    Author,
    PostCard,
    TagsList
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
        // @TODO refactor these into a function
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
.post-tag {
  margin: 1rem 0;
}
</style>