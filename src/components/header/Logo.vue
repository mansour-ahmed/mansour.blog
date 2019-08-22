<template>
  <div>
    <g-link class="nav-link" to="/">
      <v-img alt="Logo image" :src="imgUrl" width="150" />
    </g-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["darkTheme"],
  data() {
    return {
      lightLogo: require("@/assets/images/logo-light.png"),
      darkLogo: require("@/assets/images/logo-dark.png")
    };
  },
  computed: {
    imgUrl: function() {
      return this.$props.darkTheme ? this.darkLogo : this.lightLogo;
    }
  }
};
</script>
