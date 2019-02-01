<template>
  <div>
    <nav class="nav">
      <v-layout row justify-center align-center>
        <v-flex v-for="navLink in navLinks" :key="navLink">
          <g-link class="nav-link text-xs-center anchor-without-border" :to="{ name: navLink }">
            <span class="nav-link-content semi-bold">{{navLink}}</span>
          </g-link>
        </v-flex>
      </v-layout>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: ["about", "contact", "newsletter"]
    };
  },
  methods: {},
  name: "Nav"
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";
</style>
