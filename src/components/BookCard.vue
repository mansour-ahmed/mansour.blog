<template>
  <div class="book-container content-box" :id="generateSlug(book.node.title)">
    <a :href="book.node.url" target="_blank">{{ book.node.title }} By {{ book.node.author }}</a>
    <PostTags class="book-tag" :tags="book.node.tags" />
    <span class="book-heading">
      Read on
      <strong>{{ book.node.dateRead }}</strong>
    </span>
    <span class="book-heading">Rating: {{ book.node.rating }} / 10</span>
    <div v-if="book.node.content.length" v-html="book.node.content"></div>
  </div>
</template>

<script>
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostTags
  },
  methods: {
    generateSlug(bookTitle) {
      return bookTitle.replace(/ /g, "-").toLowerCase();
    }
  },
  props: ["book"]
};
</script>

<style lang="scss">
.book-tag {
  margin: 0.25rem 0;
}
.book-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  .book-heading {
    padding-bottom: .5rem;
    display:block;
  }

  p {
    margin-bottom: 0.5rem;
  }
}
</style>