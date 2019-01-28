<template>
  <v-app style="background-color: #ffffff;"  v-if="!loading">
    <Header/>
    <v-content>
      <div class="layout content-center">
        <v-container>
          <v-layout column>
            <slot/>
          </v-layout>
        </v-container>
      </div>
    </v-content>
    <Footer/>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/header/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  },
  data: () => ({
    loading: true
  }),
  created() {
    this.$nextTick(function() {
      this.loading = false;
    });
  }
};
</script>



<style lang="scss">
@import "~/assets/styles/typography.scss";
@import "~/assets/styles/colors.scss";

.white-background {
  background-color: $white;
}

.content-center {
  max-width: 50rem;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

hr {
  margin: 16px 0;
}

</style>
