<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.png"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">Hi. I'm Ahmed.</h1>

    <p
      class="author__intro"
    >I am an entrepreneur, web developer & coding instructor. I write about web developments, entrepreneurship & the pursuit of becoming a better human being.</p>

    <a href="https://twitter.com/AhmedMansour03/">Follow me on Twitter</a>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.4rem;
  }
}
</style>