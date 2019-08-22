<template>
  <div id="app">
    <v-app :dark="darkTheme">
      <Header :darkTheme="darkTheme" />
      <main class="main">
        <NewsletterShortForm class="upper-form" v-if="showUpperNewsletter" />
        <slot />
        <NewsletterShortForm v-if="showLowerNewsletter" />
      </main>
      <Footer />
    </v-app>
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
import NewsletterShortForm from "~/components/NewsletterShortForm";
import Footer from "~/components/Footer.vue";
import Header from "~/components/header/Header.vue";

export default {
  name: "Layout",
  props: {
    showLogo: { default: true }
  },
  components: {
    Header,
    Footer,
    NewsletterShortForm
  },
  data: () => ({
    darkTheme: false
  }),
  methods: {
    syncTheme() {
      this.darkTheme = window.__theme === "dark";
    },
    listenToTheme() {
      document.addEventListener(
        "themeChange",
        e => {
          this.syncTheme();
        },
        false
      );
    }
  },
  computed: {
    currentPath: function() {
      return this.$route.path.split("/").join("");
    },
    showUpperNewsletter: function() {
      const linksWithNoUpperNewsLetter = [
        "newsletter",
        "",
        "contact",
        "about",
        "work-with-me"
      ];
      return !linksWithNoUpperNewsLetter.includes(this.currentPath);
    },
    showLowerNewsletter: function() {
      const linksWithNoLowerNewsLetter = ["/newsletter"];
      return !linksWithNoLowerNewsLetter.includes(this.currentPath);
    }
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
    this.listenToTheme();
  }
};
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  width: 100%;
  padding: 1.5vw 15px 0;
}
.upper-form {
  hr {
    margin: 0;
  }
}
</style>
