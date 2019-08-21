<template>
  <footer class="footer">
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="footer__links">
      Powered by
      <a href="//gridsome.org">Gridsome</a>
    </span>

    <div class="footer-element"></div>
  </footer>
  <!-- <div>
    <div class="footer-container py-4 py-3">
      <div class="content-center">
        <div class="headline font-weight-bold text-xs-center">Ahmed Mansour</div>
        <v-layout justify-center align-start pt-3 row>
          <a
            class="anchor-without-border"
            href="https://www.linkedin.com/in/ahmedmansour03/"
            target="_blank"
          >
            <g-image class="pr-4" alt="Linkedin Profile" :src="linkedinUrl" width="50"/>
          </a>
          <a class="anchor-without-border" href="https://github.com/mansour-ahmed/" target="_blank">
            <g-image class="pr-4" alt="Github Profile" :src="githubUrl" width="50"/>
          </a>
          <a
            class="anchor-without-border"
            href="https://twitter.com/AhmedMansour03/"
            target="_blank"
          >
            <g-image class="pr-4" alt="Twitter Profile" :src="twitterUrl" width="50"/>
          </a>
        </v-layout>
      </div>
    </div>
  </div>-->
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
</style>
