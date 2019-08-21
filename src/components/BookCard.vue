<template>
  <div class="book-container content-box">
    <a :href="book.node.url" target="_blank">{{ book.node.title }} By {{ book.node.author }}</a>
    <PostTags class="book-tag" :tags="book.node.tags" />
    <div>
      Read on
      <strong>{{ book.node.dateRead }}</strong>
    </div>
    <div>Rating: {{ book.node.rating }} / 10</div>
    <div v-if="book.node.content.length" v-html="book.node.content"></div>
  </div>
</template>

<script>
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostTags
  },
  props: ["book"]
};
</script>

<style lang="scss">
.book-tag {
  margin: 1rem 0;
}
.book-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>