<template>
  <div class="post-tags">
    <g-link
      class="post-tags__link"
      v-for="tag in tags"
      :key="tag.id || tag.node.id"
      :to="tag.path || tag.node.path"
    >
      <span>#</span>
      {{ tag.title || tag.node.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style lang="scss">
@import "~/assets/style/_mixins.scss";

.post-tags {
  margin: 1em 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__link {
    margin-right: 0.7em;
    margin-top: 0.7em;
    display: flex;

    font-size: 0.8em;
    color: currentColor;
    border: none !important; // @TODO : remove important;
    background-color: var(--bg-color);
    color: currentColor !important; // @TODO : remove important;
    padding: 0.5em;
    border-radius: var(--radius);
    border: none !important; // @TODO : remove important;
  }
}
</style>