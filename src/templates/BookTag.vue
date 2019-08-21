<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.bookTag.title }}</h1>
    <div class="posts">
      <BookCard :book="book" v-for="book in $page.bookTag.belongsTo.edges" :key="book.node.id" />
    </div>
  </Layout>
</template>

<page-query>
query BookTag ($id: String!) {
  bookTag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Book {
                id
                author
                rating
                title
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
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import BookCard from "~/components/BookCard";

export default {
  components: {
    BookCard
  },
  metaInfo() {
    return {
      title: this.$page.bookTag.title
    };
  }
};
</script>

<style lang="scss">
</style>

