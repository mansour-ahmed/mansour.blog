<template>
  <div>
    <header class="elv-1">
      <v-layout row align-center fill-height px-5 py-3>
        <v-flex xs6 md3>
          <Logo/>
        </v-flex>
        <v-flex xs6>
          <Nav class="hidden-sm-and-down"/>
          <MobileNav class="hidden-md-and-up"/>
        </v-flex>
      </v-layout>
    </header>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import MobileNav from "./MobileNav.vue";

import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: { Nav, Logo, MobileNav }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors.scss";

.content {
  display: grid;
  grid-template-columns: 100% 100%;
  grid-gap: 1rem;
  color: $black;
}

.header-container {
  padding: 4rem 0;
}
</style>
