<template>
  <div class="content-box">
    <strong class="tags-list-description">Find the {{type}}s that interests you</strong>
    <PostTags :tags="tags" />
  </div>
</template>

<script>
import PostTags from "~/components/PostTags.vue";

export default {
  props: ["tags", "type"],
  components: {
    PostTags
  }
};
</script>

<style lang="scss" scoped>
.tags-list-description {
  margin-top: 1rem;
  display:block;
}
.content-box {
  padding-bottom: 1rem;
  padding-top:.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>