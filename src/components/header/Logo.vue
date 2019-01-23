<template>
    <g-link class="nav-link" to="/">
      <v-img alt="Logo image" :src="imgUrl" width="150"/>
    </g-link>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      imgUrl: require("@/assets/images/logo.png")
    };
  }
};
</script>

<style>
</style>
