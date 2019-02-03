<template>
  <div>
    <NewsletterShortForm v-if="showNewsletterForm"/>
    <div class="footer-container py-4 py-3">
      <div class="content-center">
        <div class="headline font-weight-bold text-xs-center">Ahmed Mansour</div>
        <v-layout justify-center align-start pt-3 row>
          <a
            class="anchor-without-border"
            href="https://github.com/mansour-ahmed/"
            target="_blank"
          >
            <g-image class="pr-4" alt="Linkedin Profile" :src="linkedinUrl" width="50"/>
          </a>
          <a class="anchor-without-border" href="https://www.linkedin.com/in/ahmedmansour03/" target="_blank">
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
  </div>
</template>

<script>
import NewsletterShortForm from "~/components/NewsletterShortForm";

export default {
  components: {
    NewsletterShortForm
  },
  data() {
    return {
      linkedinUrl: require("@/assets/images/linkedin.svg"),
      githubUrl: require("@/assets/images/twitter.svg"),
      twitterUrl: require("@/assets/images/github.svg"),
      showNewsletterForm: true
    };
  },
  created() {
    const routesWithNoNewsletter = ["/newsletter", "/contact"];
    const currentRoute = this.$route.path;
    if (routesWithNoNewsletter.includes(currentRoute)) {
      this.showNewsletterForm = false;
    }
  }
};
</script>

<style scoped>
.footer-container {
  background-color: #eaeded;
}
a {
  border: none;
}
</style>
