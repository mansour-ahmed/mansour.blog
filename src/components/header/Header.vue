<template>
  <header class="header">
    <div class="header__left">
      <Logo :darkTheme="darkTheme" />
    </div>
    <div class="main-links">
      <a href="/work-with-me">Work with me</a>
      |
      <a href="/newsletter">Get updates</a>
    </div>

    <div class="header__right">
      <v-layout align-center justify-center>
        <ToggleTheme />
        <MobileNav />
      </v-layout>
    </div>
  </header>
</template>

<script>
import ToggleTheme from "~/components/header/ToggleTheme.vue";
import MobileNav from "~/components/header/MobileNav.vue";
import Logo from "~/components/header/Logo.vue";

export default {
  name: "Header",
  props: {
    darkTheme: { default: true }
  },
  components: { ToggleTheme, Logo, MobileNav }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  .main-links {
    a {
      margin: 0 2rem;
      border: none !important; // @TODO : remove important;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}
</style>

