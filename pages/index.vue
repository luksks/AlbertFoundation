<template>
  <div
    class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pb-24 h-banner"
  >
    <Logo />
    <barre />
  </div>
</template>

<script>
import barre from "~/components/barre.vue";
import Logo from "~/components/logo.vue";

export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "MainPage - AlbertFoundation"
    };
  },
  components: {
    barre,
    Logo
  }
};
</script>
