<template>
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
  }
};
</script>
