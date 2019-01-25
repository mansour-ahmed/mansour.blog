<template>
  <div>
    <v-app style="background-color: #ffffff;">
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
import Header from "~/components/header/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
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
  max-width: 70rem;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

hr {
  margin: 16px 0;
}

blockquote {
  $quote-spacing: 1rem;
  $icons-color: lighten($black, 20%);

  padding-left: $quote-spacing;
  border-left: 0.2rem solid $icons-color;
  p {
    font-size: 18px;
    &:before,
    &:after {
      color: $icons-color;
      font-size: 1.5rem;
      padding: 0;
    }
    &:before {
      content: "\201C";
      padding-right: $quote-spacing / 2;
    }
    &:after {
      padding-left: $quote-spacing / 2;
      content: "\201D";
    }
  }
}
</style>
