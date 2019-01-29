<template>
  <div v-resize="onResize">
    <nav class="nav">
      <v-navigation-drawer v-model="drawer" absolute temporary right width="180">
        <v-layout column py-3>
          <v-flex py-1 text-xs-center v-for="navLink in navLinks" :key="navLink">
            <g-link class="nav-link anchor-without-border semi-bold" :to="{ name: navLink }">
              <span class="nav-link-content">{{navLink}}</span>
            </g-link>
          </v-flex>
        </v-layout>
      </v-navigation-drawer>
      <v-layout justify-end>
        <menu-icon class="toggle-btn" title="Main navigation" @click.native="drawer = !drawer"/>
      </v-layout>
    </nav>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  components: {
    MenuIcon
  },
  data() {
    return {
      drawer: null,
      navLinks: ["about", "contact", "newsletter"]
    };
  },
  methods: {
    onResize() {
      const width = window.innerWidth;
      const desktopDevice = width >= 960;
      if (this.drawer && desktopDevice) {
        this.drawer = false;
      }
    }
  },
  name: "MobileNav"
};
</script>

<style lang="scss" scoped>
$toggle-btn-dimension: 3.5rem;

.nav-link {
  width: 100%;
}

/deep/ .material-design-icon.toggle-btn,
/deep/ .material-design-icon.toggle-btn > .material-design-icon__svg {
  height: $toggle-btn-dimension;
  width: $toggle-btn-dimension;
}
</style>
