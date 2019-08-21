<template>
  <div class="nav-container">
    <v-navigation-drawer v-model="drawer" fixed temporary right width="180" height="100vh">
      <v-layout column py-3>
        <v-flex py-1 text-xs-center v-for="navLink in navLinks" :key="navLink">
          <g-link class="nav-link anchor-without-border semi-bold" :to="navLink">
            <span class="nav-link-content">{{ navLink | normalize }}</span>
          </g-link>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-layout justify-end>
      <menu-icon class="toggle-btn" title="Main navigation" @click.native="drawer = !drawer" />
    </v-layout>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  name: "MobileNav",
  filters: {
    normalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.replace(/-/g, " ");
    }
  },
  components: {
    MenuIcon
  },
  data() {
    return {
      drawer: null,
      navLinks: ["work-with-me", "newsletter", "about", "bookshelf", "contact"]
    };
  }
};
</script>

<style lang="scss" scoped>
$toggle-btn-dimension: 2rem;

.nav-link {
  width: 100%;
}

/deep/ .material-design-icon.toggle-btn,
/deep/ .material-design-icon.toggle-btn > .material-design-icon__svg {
  height: $toggle-btn-dimension;
  width: $toggle-btn-dimension;
}

.toggle-btn {
  cursor: pointer;
}

/deep/ .v-overlay--absolute {
  height: 100vh;
}

.nav-container {
  margin: 0 2rem;
}
</style>
