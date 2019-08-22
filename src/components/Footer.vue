<template>
  <footer class="footer">
    <div class="footer-element">
      <a href="https://www.linkedin.com/in/ahmedmansour03/" target="_blank">
        <g-image class="pr-4 social-img" alt="Linkedin Profile" :src="linkedinUrl" />
      </a>
      <a href="https://github.com/mansour-ahmed/" target="_blank">
        <g-image class="pr-4 social-img" alt="Github Profile" :src="githubUrl" />
      </a>
      <a href="https://twitter.com/AhmedMansour03/" target="_blank">
        <g-image class="pr-4 social-img" alt="Twitter Profile" :src="twitterUrl" />
      </a>
    </div>
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="footer__links">
      Powered by
      <a href="//gridsome.org">Gridsome</a>
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linkedinUrl: require("@/assets/images/linkedin.svg"),
      twitterUrl: require("@/assets/images/twitter.svg"),
      githubUrl: require("@/assets/images/github.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
/* a {
  border: none;
} */

.footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
  > span {
    margin: 0 0.35em;
  }
  a {
    color: currentColor;
  }
}
.footer-element {
  display: flex;
  padding: 1rem 0;
  flex-direction: row;
  a {
    border-bottom: none;
  }
  .social-img {
    width: 3.5rem;
    /deep/ svg {
      fill: currentColor;
    }
  }
}
</style>
